<?php

namespace BostonDuckTours;

class Block {

	// Will handling all block data for further processing
	private $block;
	// Will store callback preloaders for registering blocks
	private static $preloader = [];

	/**
	 * Helper function for register block with
	 * additional parameters
	 *
	 * @param array $params
	 */
	public static function register( array $params ): void {
		if ( ! $params || ! isset( $params['name'] ) ) {
			return;
		}


		// If 'preload_callback' parameter is provided we want to store it's
		// content to use later when block will be used in some pages
		if ( isset( $params['preload_callback'] ) ) {
			if (! isset( self::$preloader[ $params['name'] ] ) )  {
				self::remember_to_preload( $params['name'], $params['preload_callback'] );
			}
			unset($params['preload_callback']);
		}

		acf_register_block( $params );
	}

	public function __construct( array $block ) {
		$this->block = $block;
	}

	/**
	 * Function executed for components with 'preload_callback'
	 * provided. It's used in 'Post' class when loop
	 * through posts gutenberg block
	 *
	 * @param string $type
	 */
	public function maybe_preload( string $type ): void {
		if ( isset( self::$preloader[ $type ] )
		     && (
			     ! isset( self::$preloader[ $type ]['executed'] )
			     || ! self::$preloader[ $type ]['executed']
		     )
		) {
			// Set preloader flag for avoiding
			// several preloading the same component
			self::$preloader[ $type ]['executed'] = true;

			// Execute preloader function
			(self::$preloader[ $type ]['callback'])();
		}
	}
	/**
	 * Data returned for block after some validations
	 * for proper rendering
	 *
	 * @return array|false
	 */
	public function validate_block() {
		$block = $this->block;
		// This is the list of block types that will be rendered
		// as regular content on the front (and therefore will use
		// "innerHTML" and not ACF fields). This should correspond
		// to block resolving in React.
		$is_content_block = (
			empty( $block['blockName'] )
			|| $block['blockName'] === 'core/paragraph'
			|| $block['blockName'] === 'core/heading'
			|| $block['blockName'] === 'core/spacer'
			|| $block['blockName'] === 'core/list'
		);

		// Gutenberg frequently inserts empty content blocks between
		// other blocks. We don't want to send them to frontend because
		// that just increases the amount of data sent, and empty blocks
		// will not be displayed anyway.
		if (
			$is_content_block
			&& empty( trim( $block['innerHTML'] ) )
		) {
			return false;
		}

		// The post content from "parse_blocks" did not go through regular filters,
		// which means some HTML tags (e.g. <p>s) are missing, and also shortcodes
		// are not working.
		if ( $is_content_block ) {
			$block['innerHTML'] = apply_filters( 'the_content', $block['innerHTML'] );
		}

		// ACF fields.

		// Check if ACF fields are set in the block
		// in the first place.
		if (
			! isset( $block['attrs'] )
			|| ! isset( $block['attrs']['data'] )
			|| empty( $block['attrs']['data'] )
		) {
			return $block;
		}

		$block['attrs']['data'] = Gutenberg::parse_block_acf_fields(
			$block['attrs']['id'],
			$block['attrs']['data']
		);

		return $block;
	}

	/**
	 * Helper method to remember preloader callback function
	 * provided with block registration
	 *
	 * @param string $type
	 * @param callable $callback
	 */
	private static function remember_to_preload( string $type, callable $callback ): void {
		// We are adding prefix for block name due to it being
		// implemented by ACF function 'acf_register_block'
		$type = 'acf/' . $type;

		if ( ! isset( self::$preloader[ $type ] ) ) {
			self::$preloader[ $type ]['callback'] = $callback;
		}
	}
}
