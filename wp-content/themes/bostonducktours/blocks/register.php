<?php

namespace BostonDuckTours;

Block::register( [
	'name'            => 'custom-width-content',
	'title'           => __( 'Custom width content', 'bostonducktours' ),
	'category'        => 'common',
	'render_callback' => [ Gutenberg::class, 'render_block' ]
] );

Block::register( [
	'name'            => 'wavy-hero',
	'title'           => __( 'Hero with Wave', 'bostonducktours' ),
	'category'        => 'widgets',
	'render_callback' => [ Gutenberg::class, 'render_block' ]
] );

Block::register( [
	'name'            => 'buttons',
	'title'           => __( 'Buttons', 'bostonducktours' ),
	'category'        => 'layout',
	'render_callback' => [ Gutenberg::class, 'render_block' ]
] );

Block::register( [
	'name'            => 'accordion',
	'title'           => __( 'Accordion', 'bostonducktours' ),
	'category'        => 'widgets',
	'render_callback' => [ Gutenberg::class, 'render_block' ]
] );

Block::register( [
	'name'            => 'tabs',
	'title'           => __( 'Tabs', 'bostonducktours' ),
	'category'        => 'layout',
	'render_callback' => [ Gutenberg::class, 'render_block' ]
] );

Block::register( [
	'name'            => 'content-images',
	'title'           => __( 'Content Images', 'bostonducktours' ),
	'category'        => 'common',
	'render_callback' => [ Gutenberg::class, 'render_block' ]
] );

Block::register( [
	'name'            => 'image-gallery',
	'title'           => __( 'Image Gallery', 'bostonducktours' ),
	'category'        => 'common',
	'render_callback' => [ Gutenberg::class, 'render_block' ]
] );

Block::register( [
	'name'            => 'image-links',
	'title'           => __( 'Image Links', 'bostonducktours' ),
	'category'        => 'common',
	'render_callback' => [ Gutenberg::class, 'render_block' ]
] );

Block::register( [
	'name'            => 'text-links',
	'title'           => __( 'Text Links', 'bostonducktours' ),
	'category'        => 'common',
	'render_callback' => [ Gutenberg::class, 'render_block' ]
] );

Block::register( [
	'name'            => 'cta-full-width',
	'title'           => __( 'CTA Full Width', 'bostonducktours' ),
	'category'        => 'common',
	'render_callback' => [ Gutenberg::class, 'render_block' ]
] );

Block::register( [
	'name'            => 'disclaimer',
	'title'           => __( 'Disclaimer', 'bostonducktours' ),
	'category'        => 'common',
	'render_callback' => [ Gutenberg::class, 'render_block' ]
] );

Block::register( [
	'name'            => 'location',
	'title'           => __( 'Location', 'bostonducktours' ),
	'category'        => 'common',
	'render_callback' => [ Gutenberg::class, 'render_block' ]
] );

Block::register( [
	'name'            => 'duck',
	'title'           => __( 'Duck', 'bostonducktours' ),
	'category'        => 'common',
	'render_callback' => [ Gutenberg::class, 'render_block' ]
] );

Block::register( [
	'name'            => 'discounts',
	'title'           => __( 'Discounts', 'bostonducktours' ),
	'category'        => 'common',
	'render_callback' => [ Gutenberg::class, 'render_block' ]
] );

Block::register( [
	'name'            => 'image-slider',
	'title'           => __( 'Image Slider', 'bostonducktours' ),
	'category'        => 'common',
	'render_callback' => [ Gutenberg::class, 'render_block' ]
] );

Block::register( [
	'name'            => 'awards-slider',
	'title'           => __( 'Awards Slider', 'bostonducktours' ),
	'category'        => 'common',
	'render_callback' => [ Gutenberg::class, 'render_block' ]
] );

Block::register( [
	'name'            => 'video-hero',
	'title'           => __( 'Video Hero', 'bostonducktours' ),
	'category'        => 'common',
	'render_callback' => [ Gutenberg::class, 'render_block' ]
] );

Block::register( [
	'name'            => 'tickets-hero',
	'title'           => __( 'Tickets Hero', 'bostonducktours' ),
	'category'        => 'common',
	'render_callback' => [ Gutenberg::class, 'render_block' ]
] );

Block::register( [
	'name'            => 'blog-hero',
	'title'           => __( 'Blog Hero', 'bostonducktours' ),
	'category'        => 'common',
	'render_callback' => [ Gutenberg::class, 'render_block' ]
] );

Block::register( [
	'name'            => 'image-with-list',
	'title'           => __( 'Image With List', 'bostonducktours' ),
	'category'        => 'common',
	'render_callback' => [ Gutenberg::class, 'render_block' ]
] );

Block::register( [
	'name'            => 'slider-with-box',
	'title'           => __( 'Slider with box', 'bostonducktours' ),
	'category'        => 'common',
	'render_callback' => [ Gutenberg::class, 'render_block' ]
] );

Block::register( [
	'name'            => 'adspace',
	'title'           => __( 'Adspace', 'bostonducktours' ),
	'category'        => 'common',
	'render_callback' => [ Gutenberg::class, 'render_block' ]
] );

Block::register( [
	'name'            => 'social-feed-slider',
	'title'           => __( 'Social Feed Slider', 'bostonducktours' ),
	'category'        => 'common',
	'render_callback' => [ Gutenberg::class, 'render_block' ]
] );

Block::register( [
	'name'            => 'callouts',
	'title'           => __( 'Callouts', 'bostonducktours' ),
	'category'        => 'common',
	'render_callback' => [ Gutenberg::class, 'render_block' ]
] );

Block::register( [
	'name'            => 'map-hero',
	'title'           => __( 'Map Hero', 'bostonducktours' ),
	'category'        => 'common',
	'render_callback' => [ Gutenberg::class, 'render_block' ]
] );

Block::register( [
	'name'            => 'series-of-blocks',
	'title'           => __( 'Series Of Blocks', 'bostonducktours' ),
	'category'        => 'common',
	'render_callback' => [ Gutenberg::class, 'render_block' ]
] );

Block::register( [
	'name'            => 'published-date',
	'title'           => __( 'Published Date', 'bostonducktours' ),
	'category'        => 'common',
	'render_callback' => [ Gutenberg::class, 'render_block' ]
] );

Block::register( [
	'name'            => 'overview',
	'title'           => __( 'Page Overview with Buttons', 'bostonducktours' ),
	'category'        => 'common',
	'render_callback' => [ Gutenberg::class, 'render_block' ]
] );

Block::register( [
	'name'             => 'posts-list',
	'title'            => __( 'Posts List with Pagination', 'bostonducktours' ),
	'category'         => 'common',
	'render_callback'  => [ Gutenberg::class, 'render_block' ],
	'preload_callback' => function () {
		// Retrieve global $wp_query for handling pagination
		// and preloading posts for blog
		global $wp_query;
		$current_page = $wp_query->query_vars['paged'] ? (int) $wp_query->query_vars['paged'] : 1;
		$blog         = new Blog( $current_page );

		// Preload posts array for display
		// default loaded posts.
		Preloader::add( array_merge(
			$blog->get_blog_data(),
			[
				'loaded_pages' => [ $current_page ]
			]
		) );
	}
] );

Block::register( [
	'name'             => 'related-posts',
	'title'            => __( 'Related Posts', 'bostonducktours' ),
	'category'         => 'common',
	'render_callback'  => [ Gutenberg::class, 'render_block' ],
	'preload_callback' => function () {
		$post_id = get_the_ID();

		// Prevent preloading posts when ID is not provided
		// or current page is blog archive
		if ( ! $post_id || is_home() ) {
			return;
		}

		Preloader::add( [
			'posts' => RelatedPosts::get_formatted_related_posts( $post_id )
		] );
	}
] );

Block::register( [
	'name'             => 'tours',
	'title'            => __( 'Tour', 'bostonducktours' ),
	'category'         => 'common',
	'render_callback'  => [ Gutenberg::class, 'render_block' ],
	'preload_callback' => function () {
		$tours = Tours::get_posts_data();

		Preloader::add( [
			'tours' => $tours['tours'],
			'tourCategories' => $tours['categories'],
		] );
	}
] );

Block::register( [
	'name'             => 'ducks',
	'title'            => __( 'DUCKS & ConDUCKtors', 'bostonducktours' ),
	'category'         => 'common',
	'render_callback'  => [ Gutenberg::class, 'render_block' ],
	'preload_callback' => function () {
		$ducks = Ducks::get_posts_data();

		Preloader::add( [
			'ducks' => $ducks['ducks'],
			'duckCategories' => $ducks['categories'],
		] );
	}
] );
