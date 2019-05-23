<?php

namespace BostonDuckTours;

/**
 * Simple cache storing values in memory during a single application run,
 * to avoid fetching the same data from DB multiple times.
 *
 * To store data in cache:
 * MemoryCache::add( 'foo', 'bar );
 *
 * And to retrieve:
 * MemoryCache::get( 'foo' );
 */
class MemoryCache {

	/**
	 * All the things we've cached during application run.
	 *
	 * @var array
	 */
	private static $data = [];

	/**
	 * Store a new value (or replace existing one) in the cache.
	 *
	 * @param string $key
	 * @param mixed $value
	 */
	public static function add( string $key, $value ): void {
		self::$data[ $key ] = $value;
	}

	/**
	 * Retrieve the value from the cache, by the name it was saved under.
	 *
	 * @param string $key
	 *
	 * @return mixed
	 */
	public static function get( string $key ) {
		if ( isset( self::$data[ $key ] ) ) {
			return self::$data[ $key ];
		}

		return null;
	}
}
