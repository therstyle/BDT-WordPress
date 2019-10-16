<?php

namespace BostonDuckTours;

use \BostonDuckTours\Plugins\{ACF, WPML};

class Awards {

	/**
	 * API Response.
	 *
	 * Generates data required to render the page footer.
	 *
	 * @return \WP_REST_Response
	 */
	public static function api_get(): \WP_REST_Response {
		return ApiResponse::ok( self::get_awards() );
	}

	/**
	 * Generate data required by the frontend to render the Awards Slider.
	 *
	 * @return array
	 */
	public static function get_awards(): array {
		// Add Theme options to Awards
		$awards = ACF::get_options_data( [ 'awards_slider_content' ] );

		// "ACF::get_options_data" retrieves options in all languages.
		// Let's retrieve awards in current language only.
		$current_language = WPML::get_current_language();
		$awards           = array_map( function ( $item ) use ( $current_language ) {
			return $item[ $current_language ];
		}, $awards );

		if ( ! $awards['awards_slider_content'] ) {
			return [];
		}

		// Switch icons to proper format for React component
		foreach ( $awards['awards_slider_content'] as $key => $award ) {
			if ( ! empty( $award['logo'] ) ) {
				$icon_ID = $award['logo']['ID'];
				$icon    = new Image( $icon_ID );

				$awards['awards_slider_content'][ $key ]['logo'] = $icon->get_formatted_data();
			}
		}

		return $awards['awards_slider_content'];
	}
}
