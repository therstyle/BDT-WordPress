<?php

namespace BostonDuckTours;

use \BostonDuckTours\Plugins\{WPML, ACF};

class Header {

	/**
	 * API Response.
	 *
	 * Generates data required to render the page header.
	 *
	 * @return \WP_REST_Response
	 */
	public static function api_get(): \WP_REST_Response {
		return ApiResponse::ok( self::get_data() );
	}

	/**
	 * Registers menus used by the header.
	 */
	public static function add_menu(): void {
		register_nav_menu( 'header', __( 'Header', 'bostonducktours' ) );
	}

	/**
	 * Generate data required by the frontend to render the header.
	 *
	 * @return array
	 */
	public static function get_data(): array {
		// Add Menu to Header
		$menu = new Menu( 'header' );

		// Add Theme options to Header
		$preloadedOptions = [
			'main_site_logo',
			'topbar_button',
			'topbar_content',
			'actionbuttons_locations_link',
			'actionbuttons_language_switcher_label',
			'actionbuttons_ticekts',
			'page_on_front',
		];

		$options = Settings::get_options( implode( ',', $preloadedOptions ) );

		// "ACF::get_options_data" retrieves data for all languages.
		// Let's return header data for current language only.
		$current_language = WPML::get_current_language();
		$options          = array_map( function ( $item ) use ( $current_language ) {
			return $item[ $current_language ];
		}, $options );

		return array_merge(
			[ 'menu' => $menu->get_nested_items() ],
			$options
		);
	}
}
