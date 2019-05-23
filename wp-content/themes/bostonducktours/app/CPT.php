<?php

namespace BostonDuckTours;

/**
 * Registers CPTs.
 *
 * Just registering CPTs is taken out to the separate class, because
 * registering CPTs usually incurs a lot of config-like code.
 */
class CPT {

	/**
	 * Aggregate function calling all functions registering CPTs.
	 */
	public static function register_cpts(): void {
		self::register_cpt_nested_blocks();
		self::register_cpt_discounts();
		self::register_cpt_tours();

		add_theme_support( 'post-thumbnails', [ 'discount', 'tour' ] );
	}

	/**
	 * Nested Blocks
	 *
	 * This is a "fake" CPT, it has no frontend, but is used instead
	 * of nested Gutenberg blocks, which are not yet supported in ACF.
	 * So instead of nesting blocks, we can create a CPT, insert all blocks
	 * there, and then link that post to a parent block.
	 */
	private static function register_cpt_nested_blocks(): void {
		$labels = array(
			'name'               => _x( 'Nested Blocks', 'post type general name', 'bostonducktours' ),
			'singular_name'      => _x( 'Nested Block', 'post type singular name', 'bostonducktours' ),
			'menu_name'          => _x( 'Nested Blocks', 'admin menu', 'bostonducktours' ),
			'name_admin_bar'     => _x( 'Nested Block', 'add new on admin bar', 'bostonducktours' ),
			'add_new'            => _x( 'Add New', 'nested block', 'bostonducktours' ),
			'add_new_item'       => __( 'Add New Nested Block', 'bostonducktours' ),
			'new_item'           => __( 'New Nested Block', 'bostonducktours' ),
			'edit_item'          => __( 'Edit Nested Block', 'bostonducktours' ),
			'view_item'          => __( 'View Nested Block', 'bostonducktours' ),
			'all_items'          => __( 'All Nested Blocks', 'bostonducktours' ),
			'search_items'       => __( 'Search Nested Blocks', 'bostonducktours' ),
			'parent_item_colon'  => __( 'Parent Nested Blocks:', 'bostonducktours' ),
			'not_found'          => __( 'No nested blocks found.', 'bostonducktours' ),
			'not_found_in_trash' => __( 'No nested blocks found in Trash.', 'bostonducktours' )
		);

		$args = array(
			'labels'             => $labels,
			'description'        => __( 'Description.', 'bostonducktours' ),
			'public'             => false,
			'publicly_queryable' => false,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'query_var'          => false,
			'capability_type'    => 'post',
			'has_archive'        => false,
			'hierarchical'       => true,
			'menu_position'      => null,
			'menu_icon'          => 'dashicons-networking',
			'show_in_rest'       => true,
			'supports'           => array( 'title', 'editor', 'page-attributes' )
		);

		register_post_type( 'nested_block', $args );
	}

	/**
	 * Discounts & Specials
	 */
	private static function register_cpt_discounts(): void {
		$labels = array(
			'name'               => _x( 'Discounts', 'post type general name', 'bostonducktours' ),
			'singular_name'      => _x( 'Discount', 'post type singular name', 'bostonducktours' ),
			'menu_name'          => _x( 'Discounts', 'admin menu', 'bostonducktours' ),
			'name_admin_bar'     => _x( 'Discount', 'add new on admin bar', 'bostonducktours' ),
			'add_new'            => _x( 'Add New', 'discount', 'bostonducktours' ),
			'add_new_item'       => __( 'Add New Discount', 'bostonducktours' ),
			'new_item'           => __( 'New Discount', 'bostonducktours' ),
			'edit_item'          => __( 'Edit Discount', 'bostonducktours' ),
			'view_item'          => __( 'View Discount', 'bostonducktours' ),
			'all_items'          => __( 'All Discounts', 'bostonducktours' ),
			'search_items'       => __( 'Search Discounts', 'bostonducktours' ),
			'parent_item_colon'  => __( 'Parent Discounts:', 'bostonducktours' ),
			'not_found'          => __( 'No discounts found.', 'bostonducktours' ),
			'not_found_in_trash' => __( 'No discounts found in Trash.', 'bostonducktours' )
		);

		$args = array(
			'labels'             => $labels,
			'description'        => __( 'Description.', 'bostonducktours' ),
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'query_var'          => true,
			'rewrite'            => array( 'slug' => 'discount' ),
			'capability_type'    => 'post',
			'has_archive'        => true,
			'hierarchical'       => true,
			'menu_position'      => null,
			'show_in_rest'       => true,
			'supports'           => array( 'title', 'editor', 'thumbnail', 'page-attributes' )
		);

		register_post_type( 'discount', $args );
	}

	/**
	 * Tours
	 */
	private static function register_cpt_tours(): void {
		$labels = array(
			'name'               => _x( 'Tours', 'post type general name', 'bostonducktours' ),
			'singular_name'      => _x( 'Tour', 'post type singular name', 'bostonducktours' ),
			'menu_name'          => _x( 'Tours', 'admin menu', 'bostonducktours' ),
			'name_admin_bar'     => _x( 'Tour', 'add new on admin bar', 'bostonducktours' ),
			'add_new'            => _x( 'Add New', 'tour', 'bostonducktours' ),
			'add_new_item'       => __( 'Add New Tour', 'bostonducktours' ),
			'new_item'           => __( 'New Tour', 'bostonducktours' ),
			'edit_item'          => __( 'Edit Tour', 'bostonducktours' ),
			'view_item'          => __( 'View Tour', 'bostonducktours' ),
			'all_items'          => __( 'All Tours', 'bostonducktours' ),
			'search_items'       => __( 'Search Tours', 'bostonducktours' ),
			'parent_item_colon'  => __( 'Parent Tours:', 'bostonducktours' ),
			'not_found'          => __( 'No tours found.', 'bostonducktours' ),
			'not_found_in_trash' => __( 'No tours found in Trash.', 'bostonducktours' )
		);

		$args = array(
			'labels'             => $labels,
			'description'        => __( 'Description.', 'bostonducktours' ),
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'query_var'          => true,
			'rewrite'            => array( 'slug' => 'tour' ),
			'capability_type'    => 'post',
			'has_archive'        => true,
			'hierarchical'       => false,
			'menu_position'      => null,
			'supports'           => array( 'title', 'editor', 'thumbnail' )
		);

		register_post_type( 'tour', $args );

		// Category
		$labels = array(
			'name'                       => _x( 'Categories', 'taxonomy general name', 'textdomain' ),
			'singular_name'              => _x( 'Category', 'taxonomy singular name', 'textdomain' ),
			'search_items'               => __( 'Search Categories', 'textdomain' ),
			'popular_items'              => __( 'Popular Categories', 'textdomain' ),
			'all_items'                  => __( 'All Categories', 'textdomain' ),
			'parent_item'                => null,
			'parent_item_colon'          => null,
			'edit_item'                  => __( 'Edit Category', 'textdomain' ),
			'update_item'                => __( 'Update Category', 'textdomain' ),
			'add_new_item'               => __( 'Add New Category', 'textdomain' ),
			'new_item_name'              => __( 'New Category Name', 'textdomain' ),
			'separate_items_with_commas' => __( 'Separate categories with commas', 'textdomain' ),
			'add_or_remove_items'        => __( 'Add or remove categories', 'textdomain' ),
			'choose_from_most_used'      => __( 'Choose from the most used categories', 'textdomain' ),
			'not_found'                  => __( 'No categories found.', 'textdomain' ),
			'menu_name'                  => __( 'Categories', 'textdomain' ),
		);

		$args = array(
			'hierarchical'          => false,
			'labels'                => $labels,
			'show_ui'               => true,
			'show_admin_column'     => true,
			'update_count_callback' => '_update_post_term_count',
			'query_var'             => true,
			'rewrite'               => array( 'slug' => 'tour-category' ),
		);

		register_taxonomy( 'tour-category', 'tour', $args );
	}
}
