<?php

namespace BostonDuckTours\Plugins;

use BostonDuckTours\ApiResponse;

class GravityForms {

	/**
	 * API response.
	 *
	 * Retrieves the data of a single Gravity Form, in JSON format.
	 *
	 * @param \WP_REST_Request $request
	 *
	 * @property int id
	 *
	 * @return \WP_REST_Response
	 */
	public static function api_get_form( \WP_REST_Request $request ): \WP_REST_Response {
		$id = $request['id'];

		// Return error when form ID is not provided
		if ( ! $id ) {
			return ApiResponse::error( __( 'Invalid ID.', 'bostonducktours' ) );
		}

		// Return error when Gravity Forms is not installed
		if ( ! function_exists( 'gravity_form' ) ) {
			return ApiResponse::error( __( 'Gravity forms is not installed', 'bostonducktours' ) );
		}

		return ApiResponse::ok( self::get_form( (int) $id ) );
	}

	/**
	 * API response.
	 *
	 * Handles form submit - saves the submitted data in entries.
	 *
	 * Form data should be submitted as a request body in JSON format.
	 *
	 * @param \WP_REST_Request $request
	 *
	 * @property int id
	 *
	 * @return \WP_REST_Response
	 */
	public static function api_submit_form( \WP_REST_Request $request ): \WP_REST_Response {
		$id   = $request['id'];
		$body = json_decode( $request->get_body(), true );

		// Return error when form ID is not provided
		if ( ! $id ) {
			return ApiResponse::error( __( 'Invalid ID.', 'bostonducktours' ) );
		}

		// Return error when Gravity Forms is not installed
		if ( ! function_exists( 'gravity_form' ) ) {
			return ApiResponse::error( __( 'Gravity forms is not installed', 'bostonducktours' ) );
		}

		$new_entry = self::add_entry( (int) $id, $body );

		return ApiResponse::ok( $new_entry );
	}

	/**
	 * Enqueues the scripts required for GF forms to function, like
	 * JS for recaptcha.
	 *
	 * @param int $form_id
	 */
	public static function enqueue_form_scripts( int $form_id ): void {
		// This will generate the forms HTML and enqueue the scripts.
		// TODO: Is there a simpler way?
		gravity_form( $form_id, true, true, false, null, false, 1, false );
	}

	/**
	 * Retrieve a single Gravity Form in a json format.
	 *
	 * @param int $id
	 *
	 * @return array
	 */
	private static function get_form( int $id ): array {
		$form = \GFAPI::get_form( $id );

		// By default the form does not contain the public key for recaptcha.
		// We need to add it manually.
		$site_key           = get_option( 'rg_gforms_captcha_public_key' );
		$form['captchaKey'] = $site_key;

		return $form;
	}

	/**
	 * This function takes the data from the frontend, valides it,
	 * and saves the new entry in DB, if validation is successful.
	 *
	 * $fields should be an associative array in the following
	 * format:
	 * field id => field value
	 *
	 * Field id is typically numeric (1, 2, 6.4, etc.), and should be
	 * passed here exactly that way, as retrieved from GF. The only
	 * exception (I think) is captcha field - it should (literally)
	 * be "g-recaptcha-response", because it has custom handling.
	 *
	 * Example call:
	 * add_entry(
	 *   5,
	 *   [
	 *     '1' => 'foo',
	 *     '2' => 'bar',
	 *     '3.1' => 'lorem',
	 *     '3.2' => 'ipsum',
	 *     'g-recaptcha-token' => '{generated token value}'
	 *   ]
	 * );
	 *
	 * @param int $form_id ,
	 * @param array $fields
	 *
	 * @return array
	 */
	private static function add_entry( int $form_id, array $fields ) {
		// That validates the inputs, but requires the keys for fields to be
		// in the format "input_{$id}".

		$fields_to_save = [];
		foreach ( $fields as $field_id => $field_value ) {
			$remapped_id = $field_id;
			if ( is_numeric( $field_id ) ) {
				$remapped_id = preg_replace( '/\./', '_', "input_{$field_id}" );
			}

			$fields_to_save[ $remapped_id ] = $field_value;
		}

		return \GFAPI::submit_form( $form_id, $fields_to_save );
	}
}
