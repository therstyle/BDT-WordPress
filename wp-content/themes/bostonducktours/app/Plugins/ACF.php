<?php

namespace BostonDuckTours\Plugins;

/**
 * The goal of this class is to add theme support for
 * ACF PRO plugin
 */
class ACF {

	public static function init(): void {
		self::add_acf_options_page();
	}

	/**
	 * DataBase Response.
	 *
	 * Return an array with Theme Options Fields from comma separated string
	 *
	 * @param array $options
	 *
	 * @return array
	 */
	public static function get_options_data( array $options ): array {
		//  provide array for holding response fields as an associative array
		//	Example response: [
		//          paragraph => 'Lorem ipsum...',
		//          button_field => [
		//              title => 'click me!',
		//              url => '/',
		//              target => '_blank'
		//              ]
		//          ]
		$responseArray = [];

		// Retrieve field by options and push to an array
		foreach ( $options as $option ) {
			// Get option value in all languages.
			$languages = WPML::get_languages();
			$values    = [];

			// If WPML is disabled we'll have empty array of languages, we'll not make
			// any iterations in the loop below, and therefore not retrieve any options.
			if ( ! $languages ) {
				$languages['en'] = [];
			}

			foreach ( $languages as $code => $language_data ) {
				$suffix = "_${code}";
				if ( $code === 'en' ) {
					$suffix = '';
				}

				$values[ $code ] = get_field( $option, "options${suffix}" );
			}

			$responseArray[ $option ] = $values;
		}

		return $responseArray;
	}

	/**
	 * Add ACF Theme Options page support
	 */
	private static function add_acf_options_page(): void {
		if ( function_exists( 'acf_add_options_page' ) ) {
			$menu_slug = 'theme_options';

			acf_add_options_page( [
				'page_title' => 'Theme Options',
				'menu_title' => 'Theme Options',
				'menu_slug'  => $menu_slug,
			] );

			acf_add_options_sub_page( [
				'page_title'  => 'Header',
				'menu_title'  => 'Header',
				'parent_slug' => $menu_slug,
			] );

			acf_add_options_sub_page( [
				'page_title'  => 'Footer',
				'menu_title'  => 'Footer',
				'parent_slug' => $menu_slug,
			] );

			acf_add_options_sub_page( [
				'page_title'  => 'General',
				'menu_title'  => 'General',
				'parent_slug' => $menu_slug,
			] );

			acf_add_options_sub_page( [
				'page_title'  => 'API Keys',
				'menu_title'  => 'API Keys',
				'parent_slug' => $menu_slug,
			] );

			acf_add_options_sub_page( [
				'page_title'  => 'Discounts',
				'menu_title'  => 'Discounts',
				'parent_slug' => $menu_slug,
			] );
		}
	}
}
