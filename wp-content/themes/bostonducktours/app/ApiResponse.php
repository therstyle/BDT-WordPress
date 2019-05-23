<?php

namespace BostonDuckTours;

/**
 * Contains helpers for generating API responses.
 */
class ApiResponse {

	/**
	 * Respond with a success.
	 *
	 * This function standardizes response status, and response
	 * structure.
	 *
	 * @param array $data
	 * @param array $meta
	 *
	 * @return \WP_REST_Response
	 */
	public static function ok( $data, $meta = [] ): \WP_REST_Response {
		$response = [
			'status' => 'ok',
			'data'   => $data,
		];

		if ( $meta ) {
			$response = array_merge( $response, $meta );
		}

		return new \WP_REST_Response( $response );
	}

	/**
	 * Generate error response.
	 *
	 * This function standardizes the response structure.
	 *
	 * @param string $message
	 *
	 * @return \WP_REST_Response
	 */
	public static function error( string $message ): \WP_REST_Response {
		$response = new \WP_REST_Response( [
			'error'   => true,
			'message' => $message
		] );

		$response->set_status( 400 );

		return $response;
	}
}
