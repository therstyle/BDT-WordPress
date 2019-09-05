<?php

namespace BostonDuckTours;

class Image implements Attachment {

	/**
	 * ID (as in - DB ID) of the image.
	 *
	 * @var int
	 */
	private $id;

	public function __construct( int $id ) {
		$this->id = $id;
	}

	/**
	 * @inheritdoc
	 */
	public function get_formatted_data(): array {
		return [
			'ID'           => $this->id,
			'sources'      => $this->get_sizes(),
			'caption'      => wp_get_attachment_caption( $this->id ),
			'file_content' => $this->get_file_content(),
		];
	}

	/**
	 * Function to retrieve plain text of file.
	 * Useful when uploaded image is an SVG and we want to insert it as DOM element
	 *
	 *
	 * @return string
	 */
	public function get_file_content(): string {
		$file_content = '';
		$src          = wp_get_attachment_image_src( $this->id );
		if ( ! $src ) {
			return $file_content;
		}

		$ext = pathinfo( $src[0], PATHINFO_EXTENSION );

		if ( $ext != 'svg' ) {
			$file_content = file_get_contents( get_attached_file( $this->id ) );
		}

		return $file_content;
	}

	/**
	 * Retrieve URLs of all image sizes available for a given image,
	 * along with their retina versions.
	 *
	 * This function will return the array in the following shape:
	 * [
	 *   'size' => [ 'src' => '...', 'srcset' => '...' ],
	 *   'size2' => [ 'src' => '...', 'srcset' => '...' ],
	 *   ...
	 * ]
	 *
	 * @return array
	 */
	public function get_sizes(): array {
		$sizes = [];

		$image_sizes = $this->get_image_sizes();
		foreach ( $image_sizes as $size ) {
			$src = wp_get_attachment_image_src( $this->id, $size );

			$sizes[ $size ] = [
				'src'    => $src[0],
				'srcset' => (string) wp_calculate_image_srcset(
					[ $src[1], $src[2] ],
					$src[0],
					wp_get_attachment_metadata( $this->id ),
					$this->id
				)
			];
		}

		return $sizes;
	}

	/**
	 * Retrieve all available image sizes.
	 *
	 * Because we might process multiple images during one application
	 * run, but the list of image sizes will not change, so we can
	 * cache it, and just retrieve it from cache when available.
	 *
	 * @return array
	 */
	private function get_image_sizes(): array {
		// Get sizes from cache, if available.
		$sizes = MemoryCache::get( 'image_sizes' );
		if ( $sizes ) {
			return $sizes;
		}

		// Generate the sizes, and store in cache.
		$sizes = get_intermediate_image_sizes();

		// This is not a default WP image size, but we'll want to use it
		// for images that span the entire screen on desktop.
		$sizes[] = 'full';

		MemoryCache::add( 'image_sizes', $sizes );

		return $sizes;
	}
}
