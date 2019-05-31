<?php

// Unified prefix for all the API endpoints registered
// by this theme.
$api_prefix = 'bostonducktours';

// Retrieve the data required to render the header
// (all menus, images, etc.).
register_rest_route(
	$api_prefix,
	'header',
	[
		'methods'  => 'GET',
		'callback' => [ \BostonDuckTours\Header::class, 'api_get' ]
	]
);

// Retrieve the data required to render the footer
// (all menus, images, etc.).
register_rest_route(
	$api_prefix,
	'footer',
	[
		'methods'  => 'GET',
		'callback' => [ \BostonDuckTours\Footer::class, 'api_get' ]
	]
);

// Retrieve single post by slug.
register_rest_route(
	$api_prefix,
	'post/(?<slug>.+)',
	[
		'methods'  => 'GET',
		'callback' => [ \BostonDuckTours\Post::class, 'api_get_post' ]
	]
);

register_rest_route(
	$api_prefix,
	'homepage',
	[
		'methods'  => 'GET',
		'callback' => [ \BostonDuckTours\Post::class, 'api_get_homepage' ]
	]
);

// Retrieve Theme Options fields by slug delimited by comma..
register_rest_route(
	$api_prefix,
	'options/(?<options>.+)',
	[
		'methods'  => 'GET',
		'callback' => [ \BostonDuckTours\Settings::class, 'api_get_options' ]
	]
);

// Retrieve active languages from API
register_rest_route(
	$api_prefix,
	'languages',
	[
		'methods'  => 'GET',
		'callback' => [ \BostonDuckTours\Plugins\WPML::class, 'get_active_languages' ]
	]
);


// Retrieve active awards from API
register_rest_route(
	$api_prefix,
	'awards',
	[
		'methods'  => 'GET',
		'callback' => [ \BostonDuckTours\Awards::class, 'get_awards' ]
	]
);


// Retrieve Blog data and posts API
register_rest_route(
	$api_prefix,
	'posts/(?P<page>\d+)',
	[
		'methods'  => 'GET',
		'callback' => [ \BostonDuckTours\Blog::class, 'api_get_blog_posts' ]
	]
);

// Retrieve a single Gravity Form
register_rest_route(
	$api_prefix,
	'forms/(?P<id>\d+)',
	[
		'methods'  => 'GET',
		'callback' => [ \BostonDuckTours\Plugins\GravityForms::class, 'api_get_form' ]
	]
);

// Handles submitting Gravity Forms
register_rest_route(
	$api_prefix,
	'forms/(?P<id>\d+)',
	[
		'methods'  => 'POST',
		'callback' => [ \BostonDuckTours\Plugins\GravityForms::class, 'api_submit_form' ]
	]
);

// Retrieve related posts for RelatedPosts component
register_rest_route(
	$api_prefix,
	'related/(?<slug>.+)',
	[
		'methods'  => 'GET',
		'callback' => [ \BostonDuckTours\RelatedPosts::class, 'api_get_related_posts' ]
	]
);

register_rest_route(
	$api_prefix,
	'tours',
	[
		'methods'  => 'GET',
		'callback' => [ \BostonDuckTours\Tours::class, 'api_get' ]
	]
);

register_rest_route(
	$api_prefix,
	'ducks',
	[
		'methods'  => 'GET',
		'callback' => [ \BostonDuckTours\Ducks::class, 'api_get' ]
	]
);
