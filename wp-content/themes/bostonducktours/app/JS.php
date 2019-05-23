<?php

namespace BostonDuckTours;

/**
 * This class should prepare (e.g. pass variables) and register / enqueue
 * the themes JS file.
 */
class JS {

	/**
	 * Data to be passed to the JS file.
	 *
	 * @var array
	 */
	private $data = [];

	/**
	 * Pass more data from PHP to JS.
	 *
	 * @param string $key
	 * @param mixed $value
	 */
	public function add( $key, $value = null ): void {
		// Merge array to the existing one.
		if ( is_array( $value ) ) {
			// Make sure the value exists before merging.
			if ( ! isset( $this->data[ $key ] ) ) {
				$this->data[ $key ] = [];
			}

			$this->data[ $key ] = array_merge( $this->data[ $key ], $value );

			return;
		}

		// Just set the value if it's not an array.
		$this->data[ $key ] = $value;
	}

	/**
	 * Find and enqueue themes main JS file.
	 */
	public function load(): void {
		add_action( 'wp_enqueue_scripts', function (): void {
			// We need to look up the bundle using a glob, because in production
			// the bundle will have cache-busting hash, so the name will look
			// something like: "bundle.XYZ.js", where "XYZ" is random.
			$basePath = Browsers::is_IE() ? '/js/ie/' : '/js/modern/';
			$bundles = glob( get_template_directory() . $basePath . 'bundle*' );

			if ( ! $bundles ) {
				// TODO: Should we display some kind of error?

				return;
			}

			// Add the script.
			wp_enqueue_script(
				'theme-bundle',
				get_template_directory_uri() . $basePath . basename($bundles[0]),
				[],
				false,
				true
			);

			wp_set_script_translations( 'theme-bundle', 'bostonducktours' );

			// Inject custom data into JS.
			if ( $this->data ) {
				foreach ( $this->data as $key => $value ) {
					wp_localize_script(
						'theme-bundle',
						$key,
						$value
					);
				}
			}
		} );
	}
}
