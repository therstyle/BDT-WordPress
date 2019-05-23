<?php

namespace BostonDuckTours;

class Blog {

	/**
	 * Original WordPress query we are processing and extracting data from.
	 *
	 * @var \WP_Post
	 */
	private $wp_query;

	/**
	 * API Response.
	 *
	 * Retrieves blog post with pagination data.
	 *
	 * @param \WP_REST_Request
	 *
	 * @property number page
	 *
	 * @return \WP_REST_Response
	 */
	public static function api_get_blog_posts( \WP_REST_Request $request ): \WP_REST_Response {
		$page = $request['page'] ? $request['page'] : 1;

		$query = new self( $page );

		return ApiResponse::ok( $query->get_blog_posts(), $query->get_blog_pagination() );
	}

	public function __construct( int $page ) {
		$query = new \WP_Query( [
			'post_type' => 'post',
			'paged'     => $page,
		] );

		$this->wp_query = $query;
	}

	/**
	 * Retrieve pagination information for Blog component
	 *
	 * @return array
	 */
	public function get_blog_pagination(): array {
		return [
			'pagination' => [
				'max_num_pages' => $this->wp_query->max_num_pages,
			]
		];
	}

	/**
	 * Retrieve Blog posts by page
	 *
	 * @return array
	 */
	public function get_blog_posts(): array {
		$posts_data = [];

		while ( $this->wp_query->have_posts() ) {
			$this->wp_query->the_post();
			global $post;
			$current_post                   = new Post( $post );
			$current_post_data              = $current_post->get_formatted_data();
			$current_post_data['page']      = $this->wp_query->query_vars['paged'] ? (int) $this->wp_query->query_vars['paged'] : 1;
			$current_post_data['time_read'] = $this->count_reading_time( $post );
			array_push( $posts_data, $current_post_data );
		}

		return $posts_data;
	}

	public function get_blog_data(): array {
		return array_merge( [ 'posts' => $this->get_blog_posts() ], $this->get_blog_pagination() );
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
	private function count_reading_time( $post ) {
		$content = $post->post_content;
		$words   = str_word_count( strip_tags( $content ) );
		$minutes = $words / 200;

		return $minutes;
	}
}
