<?php

namespace BostonDuckTours;

class Media {

	/**
	 * ID of the attachment.
	 *
	 * @var int
	 */
	private $id;

	public function __construct( int $id ) {
		$this->id = $id;
	}

	/**
	 * Different kinds of files can be uploaded to WordPress, but different file types
	 * have different properties (e.g. images are rescaled and have various sizes,
	 * but other files, e.g. videos are not).
	 *
	 * So different file types are handled by different classes to separate concerns,
	 * and this class checks the type of the attachment, and returns the instance
	 * of the class handling that particular type of attachment.
	 *
	 * @return Attachment
	 */
	public function resolve_media_class(): Attachment {
		if ( wp_attachment_is_image( $this->id ) ) {
			return new Image( $this->id );
		}

		return new GenericFile( $this->id );
	}
}
