<?php

namespace BostonDuckTours;

/**
 * Handles collecting preloaded data across multiple template files,
 * potentially including each other.
 *
 * This is essentially just a wrapper for the array, since all templates
 * must add data to one place to be loaded into JS, and is slightly
 * more readable than a global variable.
 */
class Preloader {

	/**
	 * Data to be passed to JS.
	 *
	 * @var array
	 */
	private static $data = [];

	/**
	 * Add new item to the array with preloaded data.
	 *
	 * @param mixed $param1
	 * @param mixed $param2
	 */
	public static function add( $param1, $param2 = false ): void {
		$parameters = [];
		if ( is_array( $param1 ) && ! $param2 ) {
			$parameters = $param1;
		} else {
			$parameters[ $param1 ] = $param2;
		}

		foreach ( $parameters as $key => $value ) {
			if ( isset( self::$data[ $key ] ) && is_array( self::$data[ $key ] ) ) {
				self::$data[ $key ] = array_merge( self::$data[ $key ], $value );
				continue;
			}

			self::$data[ $key ] = $value;
		}
	}

	/**
	 * Retrieves all preloaded data.
	 *
	 * @return array
	 */
	public static function get(): array {
		return self::$data;
	}
}
