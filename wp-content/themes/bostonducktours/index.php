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
	<!-- Google Tag Manager --> <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-T2P2BS2');</script> <!-- End Google Tag Manager --> 
    <meta name="viewport" content="width=device-width, initial-scale=1">

	<?php wp_head(); ?>
</head>

<body class="<?php echo \BostonDuckTours\Browsers::is_IE() ? 'internet-explorer' : ''; ?>">
	<!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T2P2BS2" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) --> 

<div id="app-root"></div>

<?php wp_footer(); ?>
</body>
</html>
