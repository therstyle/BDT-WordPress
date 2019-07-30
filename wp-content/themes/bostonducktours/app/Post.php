<?php

namespace BostonDuckTours;

use BostonDuckTours\Plugins\WPML;

class Post {

	/**
	 * Original WordPress post we are processing and extracting data from.
	 *
	 * @var \WP_Post
	 */
	private $post;

	/**
	 * API Response.
	 *
	 * Retrieves a single post by a slug.
	 *
	 * @param \WP_REST_Request
	 *
	 * @property string slug
	 *
	 * @return \WP_REST_Response
	 */
	public static function api_get_post( \WP_REST_Request $request ): \WP_REST_Response {
		$path = $request['path'];

		// Path was not provided. That should be impossible.
		if ( ! $path ) {
			return ApiResponse::error( __( 'Invalid path.', 'bostonducktours' ) );
		}

		$post_obj = self::get_post_object( $path );

		// Post was not found.
		if ( ! $post_obj ) {
			return ApiResponse::error( __( 'Post not found.' . $full_path, 'bostonducktours' ) );
		}

		// Post was found.
		// Pass it through the parser to retrieve the data in the same
		// format as preloaded data.
		$post = new self( $post_obj );


		return ApiResponse::ok( $post->get_formatted_data() );
	}

	/**
	 * API Response.
	 *
	 * Retrieves the homepage.
	 *
	 * @return \WP_REST_Response
	 */
	public static function api_get_homepage(): \WP_REST_Response {
		$homepage = get_post( get_option( 'page_on_front' ) );

		// Post was not found.
		if ( ! $homepage ) {
			return ApiResponse::error( __( 'Post not found.', 'bostonducktours' ) );
		}

		// Post was found.
		// Pass it through the parser to retrieve the data in the same
		// format as preloaded data.
		$homepage_object = new self( $homepage );

		return ApiResponse::ok( $homepage_object->get_formatted_data() );
	}

	public function __construct( \WP_Post $post ) {
		$this->post = $post;
	}

	/**
	 * Retrieve posts data in the format used by the frontend.
	 *
	 * This function will be used when generating Rest API responses,
	 * and when generating preloaded data in the templates.
	 *
	 * @param array|false $only
	 *
	 * @return array
	 */
	public function get_formatted_data( $only = false ): array {
		$fields_to_generate = [
			'id',
			'slug',
			'path',
			'type',
			'excerpt',
			'content',
			'title',
			'blocks',
			'featured_image',
			'related_posts',
			'meta',
			'url',
			'language',
			'read_time',
			'published_date'
		];

		if ( $only ) {
			$fields_to_generate = $only;
		}

		$fields = [];
		foreach ( $fields_to_generate as $field_id ) {
			$fields[ $field_id ] = $this->get_formatted_field( $field_id );
		}

		return $fields;
	}

	/**
	 * Retrieve single post object
	 *
	 * @param string $path
	 *
	 * @return object
	 */
	public static function get_post_object( string $path ): object {

		// Generate full link of page based on path provided
		$full_path = get_bloginfo( 'url' ) . '/' . $path;

		// Retrieve post ID based on provided path
		$post_id = url_to_postid( $full_path );

		// get post object from retrieved ID
		$post_obj = get_post( $post_id );

		// Get $post_obj variable for blog page for which 'url_to_postid()' function doesn't work
		if ( ! $post_obj ) {
			$page_for_posts_url = get_permalink( get_option( 'page_for_posts' ) );
			if ( rtrim( $full_path, '/' ) == rtrim( $page_for_posts_url, '/' ) ) {
				$post_obj = get_post( get_option( 'page_for_posts' ) );
			}
		}

		return $post_obj;
	}

	/**
	 * Retrieve unified formatted data for one Post field.
	 *
	 * Because we can generate field values field by field we can respond
	 * to the frontend with any arbitrary combination of fields,
	 * not all of them every time.
	 *
	 * @see self::get_formatted_data
	 *
	 * @param string $field_id
	 *
	 * @return mixed
	 */
	private function get_formatted_field( string $field_id ) {
		switch ( $field_id ) {
			case 'id':
				return $this->post->ID;

			case 'slug':
				return $this->get_post_slug();

			case 'path':
				return $this->get_post_path();

			case 'type':
				return $this->post->post_type;

			case 'excerpt':
				return $this->get_post_excerpt();

			case 'content':
				return $this->get_post_content();

			case 'title':
				return $this->post->post_title;

			case 'read_time':
				return $this->count_reading_time( $this->post->post_content );

			case 'blocks':
				return $this->parse_blocks();

			case 'featured_image':
				return $this->get_featured_image();

			case 'related_posts':
				return $this->get_related_posts();

			case 'meta':
				return $this->get_meta();

			case 'published_date':
				return $this->get_published_date();

			case 'url':
				return WPML::get_links_in_all_languages( $this->post );

			case 'language':
				return WPML::get_post_language( $this->post->ID );
		}
	}

	/**
	 * @return string
	 */
	private function get_post_slug(): string {
		if ( get_option( 'page_on_front' ) == $this->post->ID ) {
			return '';
		}

		return $this->post->post_name;
	}


	/**
	 * Retrieve relative link for any page
	 *
	 * @return string
	 */
	private function get_post_path(): string {
		$permalink     = get_permalink( $this->post->ID );
		$relative_link = wp_make_link_relative( $permalink );

		return $relative_link;
	}

	/**
	 * Retrieve published date for post in desired format
	 *
	 * @return string
	 */
	private function get_published_date(): string {
		return get_the_date( 'M d, Y', $this->post->ID );
	}

	/**
	 * Retrieve related posts from RelatedPosts class
	 *
	 * @return array|false
	 */
	private function get_related_posts() {
		$related_posts = RelatedPosts::get_related_posts_ids( $this->post->ID );

		if ( ! $related_posts || ! is_array( $related_posts ) ) {
			return false;
		}

		return $related_posts;
	}

	/**
	 * Function for retrieving post excerpt and truncuting it
	 * to closest word matching 200 characters ( 200chars from documentation )
	 *
	 * @return string
	 */
	private function get_post_excerpt(): string {
		$excerpt          = get_the_excerpt( $this->post->ID );
		$characters_count = 200;

		if ( strlen( $excerpt ) > $characters_count ) {
			return substr( $excerpt, 0, strpos( $excerpt, ' ', $characters_count ) );
		}

		return $excerpt;
	}

	/**
	 * Retrieves the content of the post (regular old-school pre-gutenberg content,
	 * with filters already applied).
	 *
	 * @return string
	 */
	private function get_post_content(): string {
		return apply_filters( 'the_content', $this->post->post_content );
	}

	/**
	 * The data returned from default WP "parse_blocks" in case of
	 * ACF fields is almost useful, but not quite. We get the values
	 * of all ACF fields, but they are indexed by the key (field_XYZ),
	 * not the name of the field, so we can't really use those
	 * on frontend, because we don't know what the fields are.
	 *
	 * This function goes over all the parsed blocks, and converts
	 * they keys of the fields to their names.
	 *
	 * @return array
	 */
	private function parse_blocks(): array {
		// We'll take the results of WP parsing the blocks
		// and modify it.
		$blocks = parse_blocks( $this->post->post_content );

		$processed_blocks = [];
		foreach ( $blocks as $block_data ) {
			$block = new Block( $block_data );

			$rendered_block = $block->validate_block();

			if ( isset( $rendered_block['blockName'] ) ) {
				$block->maybe_preload( $rendered_block['blockName'] );
			}

			if ( $rendered_block ) {
				$processed_blocks[] = $rendered_block;
			}
		}

		return $processed_blocks;
	}

	/**
	 * Retrieve the featured image of the post, in all sizes.
	 *
	 * @see Image::get_sizes
	 *
	 * @return array|false
	 */
	private function get_featured_image() {
		$image_id = (int) get_post_thumbnail_id( $this->post->ID );

		if ( ! $image_id ) {
			return false;
		}

		$featured_image = new Image( $image_id );

		return [
			'ID'      => $image_id,
			'sources' => $featured_image->get_sizes()
		];
	}

	/**
	 * Count read time based on post content string.
	 * According to web, average reading speed is between 230-280 words per minute,
	 * so we are using 200 here for keeping some limit to provide pessimistic reading
	 * time. Most people should read it faster.
	 *
	 * @var Post
	 *
	 * @return string
	 */
	private function count_reading_time( $content ) {
		$words   = str_word_count( strip_tags( $content ) );
		$minutes = ceil( $words / 200 );

		return $minutes;
	}

	/**
	 * Retrieve the meta information (ACF field values) for the current post.
	 *
	 * @return array|false
	 */
	private function get_meta() {
		return get_fields( $this->post->ID );
	}
}
