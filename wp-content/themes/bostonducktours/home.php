<?php
global $current_post;
$current_post = new \BostonDuckTours\Post( get_post( get_option( 'page_for_posts' ) ) );

// Blog should display the same way Posts do.
include_once __DIR__ . '/single.php';

