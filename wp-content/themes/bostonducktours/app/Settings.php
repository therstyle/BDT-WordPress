<?php

namespace BostonDuckTours;

use BostonDuckTours\Plugins\{WPML, ACF};

/**
 * This class helps retrieve desired global settings from backend
 */
class Settings {

	/**
	 * API Response.
	 *
	 * Retrieves options fields array from comma separated string.
	 *
	 * @param \WP_REST_Request
	 *
	 * @property string options
	 *
	 * @return \WP_REST_Response
	 */
	public static function api_get_options( \WP_REST_Request $request ): \WP_REST_Response {
		$options = $request['options'];

		// Options was not provided.
		if ( empty ( $options ) ) {
			return ApiResponse::error( __( 'Invalid options.', 'bostonducktours' ) );
		}

		return ApiResponse::ok( self::get_options( $options ) );
	}

	/**
	 * Helper function for retrieving options from
	 * general WP Settings and custom fields provided from ACF
	 * plugin in Theme Options pages merged together
	 *
	 * @param string $options
	 *
	 * @return array
	 */
	public static function get_options( string $options ): array {

		$options = explode( ',', $options );

		// Get general WP settings
		$wp_options = self::get_wp_options( $options );

		// Get ACF settings
		$options     = array_diff( $options, $wp_options );
		$acf_options = $options ? ACF::get_options_data( $options ) : [];

		$options = array_merge( $wp_options, $acf_options );

		return $options;
	}

	/**
	 * Function to retrieve only WP options from whole array of settings.
	 *
	 * @param array $options
	 *
	 * @return array
	 */
	private static function get_wp_options( array $options ): array {
		global $sitepress;
		$responseArray = [];

		$links_array = [
			'page_for_posts',
			'page_on_front',
		];

		foreach ( $options as $option ) {
			$languages = WPML::get_languages();

			$values = [];

			foreach ( $languages as $code => $language_data ) {
				$sitepress->switch_lang( $code );
				$option_value = get_option( $option );

				// If option is ID of page we have to retrieve URL
				// for that page with translation handling
				if ( in_array( $option, $links_array ) ) {
					$option_value = apply_filters( 'wpml_permalink', get_the_permalink( $option_value ), $code );
				}

				$values[ $code ] = $option_value;
			}

			$responseArray[ $option ] = $values;
		}
		$sitepress->switch_lang( ICL_LANGUAGE_CODE );

		return $responseArray;
	}
}
