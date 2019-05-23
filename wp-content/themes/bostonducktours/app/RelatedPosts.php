<?php

namespace BostonDuckTours;

class RelatedPosts {
	/**
	 * API Response.
	 *
	 * Retrieves blog post with pagination data.
	 *
	 * @param \WP_REST_Request $request
	 *
	 * @property string slug
	 *
	 * @return \WP_REST_Response
	 */
	public static function api_get_related_posts( \WP_REST_Request $request ): \WP_REST_Response {

		$slug = $request['slug'];

		// Slug was not provided. That should be impossible.
		if ( ! $slug ) {
			return ApiResponse::error( __( 'Invalid slug.', 'bostonducktours' ) );
		}

		// There is no function retrieving just one post by slug,
		// so we have to retrieve an array.
		$posts = get_posts( [
			'name'      => $slug,
			'post_type' => 'any'
		] );

		// Post was not found.
		if ( ! $posts[0] ) {
			return ApiResponse::error( __( 'Post not found.', 'bostonducktours' ) );
		}

		return ApiResponse::ok( self::get_formatted_related_posts( $posts[0]->ID ) );
	}

	/**
	 * Retrieve related posts based on Tags assigned to post
	 *
	 * @param int $post_id
	 *
	 * @return array|false
	 */
	public static function get_related_posts_ids( int $post_id ) {
		$tags = get_the_tags( $post_id );

		$posts_to_retrieve = 3;
		$query_args        = [
			'post_type'      => 'post',
			'posts_per_page' => $posts_to_retrieve,
			'post__not_in'   => [ $post_id ],
		];

		// Get just ID's from tags array
		if ( is_array( $tags ) ) {
			$tags = array_map( function ( $tag ) {
				return $tag->term_id;
			}, $tags );
		}

		// Add tags parameter to query arguments if its provided
		if ( $tags ) {
			$query_args['tag__in'] = $tags;
		}

		$query = new \WP_Query( $query_args );

		$related_posts = $query->posts;
		$found_posts   = $query->post_count;

		// Fire additional query for all posts when related
		// posts count is less than 3
		if ( isset( $query_args['tag__in'] ) && $found_posts < $posts_to_retrieve ) {
			// Adapt new query arguments
			unset( $query_args['tag__in'] );
			$query_args['posts_per_page'] = $posts_to_retrieve - $found_posts;
			$query_args['post__not_in']   = array_merge(
				$query_args['post__not_in'],
				array_map( function ( $post_not_in ) {
					return $post_not_in->ID;
				}, $related_posts ) );

			$additional_query = new \WP_Query( $query_args );

			$related_posts = array_merge( $related_posts, $additional_query->posts );
		}


		return array_map( function ( $single_post ) {
			return $single_post->ID;
		}, $related_posts );
	}

	/**
	 * Retrieve formatted data for related posts
	 *
	 * @param int $post_id
	 *
	 * @return array
	 */
	public static function get_formatted_related_posts( int $post_id ): array {
		$related_posts = self::get_related_posts_ids( $post_id );

		return array_map( function ( $single_post ) {
			$formatted_post = new Post( get_post( $single_post ) );

			return $formatted_post->get_formatted_data();
		}, $related_posts );
	}
}
