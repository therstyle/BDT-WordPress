<?php

namespace BostonDuckTours;

/**
 * Helper class to retrieve CPT posts and categories.
 */
abstract class CptData {
	/**
	 * This variable determines the post type that this class handles.
	 *
	 * Define this variable when extending the class. This is technically
	 * optional, as it will default to "post", but that is not intended
	 * use of this class, and might result in errors.
	 *
	 * @var string
	 */
	protected static $post_type;
	/**
	 * This variable determines the taxonomy name for post type that
	 * this class handles.
	 *
	 * Define this variable when extending the class. It's used to retrieve
	 * list of all taxonomy terms for frontend filters and to retrieve
	 * assigned terms to custom posts
	 *
	 * @var string
	 */
	protected static $taxonomy_name;

	/**
	 * API Response.
	 *
	 * Retrieves the CPT objects. We serve all posts at once,
	 * because on the frontend they are all displayed by default, so the filtering
	 * can be done on frontend only, without additional calls.
	 *
	 * @return \WP_REST_Response
	 */
	public static function api_get() {
		return ApiResponse::ok( self::get_posts_data() );
	}

	/**
	 * Generate the data for the Ducks (list of CPTs plus the list of categories)
	 * for the frontend.
	 *
	 * Frontend will typically display the list of CPTs with the list of filters,
	 * so it will need both at the same time.
	 *
	 * @return array
	 */
	public static function get_posts_data(): array {
		return [
			static::$post_type . 's' => self::get_posts(),
			'categories'             => self::get_categories()
		];
	}


	/**
	 * Retrieve CPT posts and generate data for the frontend.
	 *
	 * @return array
	 */
	private static function get_posts(): array {
		return array_map( function ( \WP_Post $duck ) {
			$post      = new Post( $duck );
			$post_data = $post->get_formatted_data( [
				'id',
				'slug',
				'title',
				'content',
				'featured_image'
			] );

			// Categories this CPT has assigned.
			$terms = wp_get_post_terms( $duck->ID, static::$taxonomy_name );

			// Assign a list of slugs only to the post.
			$post_data['categories'] = array_map( function ( \WP_Term $term ) {
				return [
					'id'   => $term->term_id,
					'slug' => $term->slug,
					'name' => wp_specialchars_decode( $term->name )
				];
			}, $terms );

			// Location from ACF.
			$post_data['location'] = get_field( 'location', $duck->ID );

			return $post_data;
		}, get_posts( [
			'post_type'      => static::$post_type,
			'posts_per_page' => - 1,
		] ) );
	}


	/**
	 * Retrieve the list of all categories of desired CPT.
	 *
	 * @return array
	 */
	private static function get_categories(): array {
		$terms = get_terms( [
			'taxonomy' => static::$taxonomy_name
		] );

		return array_map( function ( \WP_Term $term ) {
			return [
				'id'   => $term->term_id,
				'slug' => $term->slug,
				'name' => wp_specialchars_decode( $term->name ),
			];
		}, $terms );
	}
}
