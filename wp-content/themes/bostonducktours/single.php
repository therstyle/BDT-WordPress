<?php

include_once __DIR__ . '/header.php';
include_once __DIR__ . '/footer.php';

global $post;
global $current_post;

// If no post is assigned yet, get current $post
$current_post = $current_post ? $current_post : new \BostonDuckTours\Post( $post );

\BostonDuckTours\Preloader::add( 'posts', [ $current_post->get_formatted_data() ] );

include __DIR__ . '/index.php';
