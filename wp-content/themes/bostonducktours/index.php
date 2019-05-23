<?php

\BostonDuckTours\Gutenberg::init();


\BostonDuckTours\Preloader::add( [
	// Preload current language.
	'language'  => BostonDuckTours\Plugins\WPML::get_current_language(),
	// Preload Awards Slider.
	'awards'    => \BostonDuckTours\Awards::get_awards(),
	// Preload WPML Languages.
	'languages' => \BostonDuckTours\Plugins\WPML::WPML_languages(),
] );

// JavaScript
$js = new \BostonDuckTours\JS();

// Preloaded data is the same thing that can be obtained by making API calls,
// but we insert the data for the current page into the HTML, so that JS
// doesn't have to make the first API call.
$preloadedData = \BostonDuckTours\Preloader::get();
if ( ! empty( $preloadedData ) ) {
	$js->add( 'PreloadedData', $preloadedData );
}

$js->load();

?>

<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">

	<?php wp_head(); ?>
</head>

<body class="<?php echo \BostonDuckTours\Browsers::is_IE() ? 'internet-explorer' : ''; ?>">
<div id="app-root"></div>

<?php wp_footer(); ?>
</body>
</html>
