<?php


include_once __DIR__ . '/bootstrap/bootstrap.php';

// Setup all the functionalities that affect the entire theme,
// regardless of the page displayed.
\BostonDuckTours\Theme::init();

// Setup plugins / functionalities related to the specific pages,
// or functionalities the theme could work if they fail to setup.\
\BostonDuckTours\Gutenberg::init();
\BostonDuckTours\Plugins\ACF::init();

function my_acf_init() {
	acf_update_setting('google_api_key', the_field( 'api_key_google_maps', 'option' ));
}
add_action('acf/init', 'my_acf_init');
