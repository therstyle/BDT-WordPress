<?php

namespace BostonDuckTours\Plugins;
use \BostonDuckTours\ApiResponse;

/**
 * The goal of this class is to add WPML support for REST API
 */
class WPML {

	/**
	 * API Response.
	 *
	 * Pass all active languages to API endpoint
	 *
	 * @return \WP_REST_Response
	 */
	public static function get_active_languages(): \WP_REST_Response {
		// Retrieve all languages from WPML
		$languages = self::wpml_languages();

		// Languages was not found
		if ( ! $languages ) {
			return ApiResponse::error( __( 'Languages not found.', 'bostonducktours' ) );
		}

		return ApiResponse::ok( ['languages' => $languages] );
	}

	/**
	 * Function for retrieve WPML languages
	 */
	public static function wpml_languages(): array {
		$languages = apply_filters( 'wpml_active_languages', NULL, 'orderby=id&order=desc' );

		// Get just necessary values from retrieved languages array

		return is_array($languages) ? array_map( function ( $language ) {
			return [
				'locale' => $language['default_locale'],
				'translatedName' => $language['translated_name'],
				'nativeName' => $language['native_name'],
				'prefix' => $language['language_code']
			];
		}, $languages ) : [];
	}

	/**
	 * Retrieve the array of URLs to the given post in all available languages,
	 * indexed by the language code.
	 *
	 * @param int $post
	 *
	 * @return array
	 */
	public static function get_links_in_all_languages( \WP_Post $post ): array {
		$languages = self::get_languages();
		$urls = [];

		foreach ( $languages as $code => $data ) {
			$translated_post_id = apply_filters(
				'wpml_object_id',
				$post->ID,
				$post->post_type,
				false,
				$data['language_code']
			);

			if ( ! $translated_post_id ) {
				continue;
			}

			$urls[ $data['language_code'] ] = apply_filters(
				'wpml_permalink',
				get_permalink( $translated_post_id ),
				$data['language_code'],
				defined('REST_REQUEST') && REST_REQUEST
			);
		}

		return $urls;
	}

	/**
	 * Get the code of the current language.
	 *
	 * @return string
	 */
	public static function get_current_language(): string {
		return defined( 'ICL_LANGUAGE_CODE' ) ? ICL_LANGUAGE_CODE : 'en';
	}

	/**
	 * Retrieve the language code of the given post.
	 *
	 * @param int $post_id
	 *
	 * @return string
	 */
	public static function get_post_language( int $post_id ): string {
		$post_details = apply_filters( 'wpml_post_language_details', null, $post_id );
		if ( ! $post_details['language_code'] ) {
			return 'en';
		}

		return $post_details['language_code'];
	}

	/**
	 * Retrieves the list of all available languages.
	 *
	 * @return array
	 */
	public static function get_languages(): array {
		return apply_filters( 'wpml_active_languages', NULL, 'orderby=id&order=desc' ) ?: [];
	}
}
