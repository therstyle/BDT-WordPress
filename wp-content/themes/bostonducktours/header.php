<?php

// Preload header data.
$header = [];
$header[ \BostonDuckTours\Plugins\WPML::get_current_language() ] =
    \BostonDuckTours\Header::get_data();

\BostonDuckTours\Preloader::add( 'header', $header );
