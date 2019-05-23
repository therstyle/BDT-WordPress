<?php

namespace BostonDuckTours;

use \BostonDuckTours\Plugins\{ACF,WPML,GravityForms};

class Footer {

	/**
	 * API Response.
	 *
	 * Generates data required to render the page footer.
	 *
	 * @return \WP_REST_Response
	 */
	public static function api_get(): \WP_REST_Response {
		return ApiResponse::ok( self::get_data() );
	}

	/**
	 * Registers menus used by the footer.
	 */
	public static function add_menu(): void {
		register_nav_menu( 'footer', __( 'Footer', 'bostonducktours' ) );
		register_nav_menu( 'footer_bottom', __( 'Footer Bottom Bar', 'bostonducktours' ) );
	}

	/**
	 * Generate data required by the frontend to render the footer.
	 *
	 * @return array
	 */
	public static function get_data(): array {
		// Add Menus to Footer
		$menu          = new Menu( 'footer' );
		$menuBottomBar = new Menu( 'footer_bottom' );

		// Add Theme options to Footer
		$footerOptions = [
			'footer_awards_visibility',
			'footer_connect_label',
			'footer_social_buttons',
			'footer_locations_label',
			'footer_locations',
			'gravity_form_id',
			'footer_bottom_bar_content',
			'footer_awards_label',
			'footer_awards_button',
			'footer_awards_button_icon',
		];

		$options = ACF::get_options_data( $footerOptions );

		// "ACF::get_options_data" retrieves data for all languages.
		// Let's return footer data for current language only.
		$current_language = WPML::get_current_language();
		$options          = array_map( function ( $item ) use ( $current_language ) {
			return $item[ $current_language ];
		}, $options );

		// Social buttons
		$options['footer_social_buttons'] = array_map( function ( $button ) {
			$icon_ID = $button['icon']['ID'];
			$icon    = new Image( $icon_ID );

			return [
				'icon' => [
					'ID'      => $icon_ID,
					'sources' => $icon->get_sizes(),
				],
				'url'  => $button['url']
			];
		}, $options['footer_social_buttons'] );

		// Overwrite variable to return icon URL
		$options['footer_awards_button_icon'] = $options['footer_awards_button_icon']['url'];

		// Newsletter form.
		// We need to enqueue GF scripts for some of the form functionalities
		// (like recaptcha) to work on the frontend.
		GravityForms::enqueue_form_scripts( (int) $options['gravity_form_id'] );

		return array_merge( $options, [
			'menu'        => $menu->get_nested_items(),
			'menu_bottom' => $menuBottomBar->get_nested_items(),
		] );
	}
}
