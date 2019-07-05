<?php

namespace BostonDuckTours;

/**
 * The goal of this class is to set up the theme - register all the things
 * related to the them itself (so theme support, image sizes, etc.), but *not*
 * the plugins.
 */
class Theme {

	/**
	 * Run all the functionalities / register everything.
	 * Ideally this one function will be called by an outside scripts,
	 * and after running it everything that team requires will be ready.
	 */
	public static function init(): void {
		self::register_new_editor_styles();
		self::add_title_support();
		self::add_excerpt_support();
		self::register_rest_routes();
		self::allow_uploading_svgs();
		self::add_image_sizes();

		Menu::register_menus();
		CPT::register_cpts();

		add_theme_support( 'post-thumbnails', [ 'page', 'post' ] );
	}

	/**
	 * @see https://codex.wordpress.org/Title_Tag
	 */
	private static function add_title_support(): void {
		add_theme_support( 'title-tag' );
	}

	/**
	 * @see https://codex.wordpress.org/TinyMCE_Custom_Styles
	 */
	private static function register_new_editor_styles(): void {
		add_filter( 'mce_buttons_3', function ( $buttons ) {
			array_unshift( $buttons, 'styleselect' );

			return $buttons;
		} );


		add_filter( 'tiny_mce_before_init', function ( $init_array ) {
			$style_formats = array(
				array(
					'title'    => 'Lead Paragraph',
					'block'    => 'p',
					'selector' => 'p',
					'classes'  => 'lead-paragraph',
					'wrapper'  => false,

				),
			);

			$init_array['style_formats'] = wp_json_encode( $style_formats );

			return $init_array;

		} );
	}

	/**
	 * @see https://codex.wordpress.org/Function_Reference/add_post_type_support
	 */
	private static function add_excerpt_support(): void {
		add_post_type_support( 'post', 'excerpt' );

		add_filter( 'excerpt_more', function ( $more ) {
			return '';
		} );
	}

	/**
	 * Default WP Rest routes retrieve data in a format that is not useful
	 * to us (e.g. it contains entire preformatted content, but no separate
	 * Gutenberg blocks). The theme will need to register its own routes.
	 */
	private static function register_rest_routes(): void {
		add_action( 'rest_api_init', function (): void {
			include_once get_template_directory() . '/api/routes.php';
		} );
	}

	/**
	 * Bu default WordPress blocks uploading SVGs, but many of our images
	 * will be in that format, and we want to be able to upload them.
	 */
	private static function allow_uploading_svgs(): void {
		add_filter( 'upload_mimes', function ( $mimes ) {
			$mimes['svg'] = 'image/svg+xml';

			return $mimes;
		} );
	}

	/**
	 * Register image sizes used by the theme.
	 *
	 * The idea here is not to register all possible image sizes that appear
	 * in the theme, because we'd be generating a lot of images, most of which
	 * won't ever be used. If the image size does not match the design exactly;
	 * that's ok, we'll take the closest one. The overhead from the user will
	 * be minimal, but we'll leverage browser caching to avoid loading new images
	 * every time user navigates somewhere or displays new block.
	 */
	private static function add_image_sizes(): void {
		add_image_size( 'full-width', 1920, 9999 );
		add_image_size( 'half', 960, 9999 );
		add_image_size( 'mobile', 768, 9999 );
		add_image_size( 'slider-image', 9999, 550 );
		add_image_size( 'one-third', 640, 9999 );
		add_image_size( 'one-fourth', 480, 9999 );
		add_image_size( 'post-tile', 560, 315, true );
		add_image_size( 'single-hero', 800, 450, true );
	}
}
