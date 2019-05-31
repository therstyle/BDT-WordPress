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
		self::register_cpt_ducks();

		add_theme_support( 'post-thumbnails', [ 'discount', 'tour', 'duck' ] );
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
	 * Tour Sites
	 */
	private static function register_cpt_tours(): void {
		$labels = array(
			'name'               => _x( 'Tour Sites', 'post type general name', 'bostonducktours' ),
			'singular_name'      => _x( 'Tour Site', 'post type singular name', 'bostonducktours' ),
			'menu_name'          => _x( 'Tour Sites', 'admin menu', 'bostonducktours' ),
			'name_admin_bar'     => _x( 'Tour Site', 'add new on admin bar', 'bostonducktours' ),
			'add_new'            => _x( 'Add New', 'tour', 'bostonducktours' ),
			'add_new_item'       => __( 'Add New Tour Site', 'bostonducktours' ),
			'new_item'           => __( 'New Tour Site', 'bostonducktours' ),
			'edit_item'          => __( 'Edit Tour Site', 'bostonducktours' ),
			'view_item'          => __( 'View Tour Site', 'bostonducktours' ),
			'all_items'          => __( 'All Tour Sites', 'bostonducktours' ),
			'search_items'       => __( 'Search Tour Sites', 'bostonducktours' ),
			'parent_item_colon'  => __( 'Parent Tour Sites:', 'bostonducktours' ),
			'not_found'          => __( 'No tour sites found.', 'bostonducktours' ),
			'not_found_in_trash' => __( 'No tour sites found in Trash.', 'bostonducktours' )
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
			'name'                       => _x( 'Categories', 'taxonomy general name', 'bostonducktours' ),
			'singular_name'              => _x( 'Category', 'taxonomy singular name', 'bostonducktours' ),
			'search_items'               => __( 'Search Categories', 'bostonducktours' ),
			'popular_items'              => __( 'Popular Categories', 'bostonducktours' ),
			'all_items'                  => __( 'All Categories', 'bostonducktours' ),
			'parent_item'                => null,
			'parent_item_colon'          => null,
			'edit_item'                  => __( 'Edit Category', 'bostonducktours' ),
			'update_item'                => __( 'Update Category', 'bostonducktours' ),
			'add_new_item'               => __( 'Add New Category', 'bostonducktours' ),
			'new_item_name'              => __( 'New Category Name', 'bostonducktours' ),
			'separate_items_with_commas' => __( 'Separate categories with commas', 'bostonducktours' ),
			'add_or_remove_items'        => __( 'Add or remove categories', 'bostonducktours' ),
			'choose_from_most_used'      => __( 'Choose from the most used categories', 'bostonducktours' ),
			'not_found'                  => __( 'No categories found.', 'bostonducktours' ),
			'menu_name'                  => __( 'Categories', 'bostonducktours' ),
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

	/**
	 * DUCKs & ConDUCKtors
	 */
	private static function register_cpt_ducks(): void {
		$labels = array(
			'name'               => _x( 'DUCKs & ConDUCKtors', 'post type general name', 'bostonducktours' ),
			'singular_name'      => _x( 'DUCK & ConDUCKtor', 'post type singular name', 'bostonducktours' ),
			'menu_name'          => _x( 'DUCKs & ConDUCKtors', 'admin menu', 'bostonducktours' ),
			'name_admin_bar'     => _x( 'DUCK & ConDUCKtor', 'add new on admin bar', 'bostonducktours' ),
			'add_new'            => _x( 'Add New', 'duck', 'bostonducktours' ),
			'add_new_item'       => __( 'Add New DUCK & ConDUCKtor', 'bostonducktours' ),
			'new_item'           => __( 'New DUCK & ConDUCKtor', 'bostonducktours' ),
			'edit_item'          => __( 'Edit DUCK & ConDUCKtor', 'bostonducktours' ),
			'view_item'          => __( 'View DUCK & ConDUCKtor', 'bostonducktours' ),
			'all_items'          => __( 'All DUCKs & ConDUCKtors', 'bostonducktours' ),
			'search_items'       => __( 'Search DUCKs & ConDUCKtors', 'bostonducktours' ),
			'parent_item_colon'  => __( 'Parent DUCKs & ConDUCKtors:', 'bostonducktours' ),
			'not_found'          => __( 'No DUCKs | ConDUCKtors found.', 'bostonducktours' ),
			'not_found_in_trash' => __( 'No DUCKs | ConDUCKtors found in Trash.', 'bostonducktours' )
		);

		$args = array(
			'labels'             => $labels,
			'description'        => __( 'Description.', 'bostonducktours' ),
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'query_var'          => true,
			'rewrite'            => array( 'slug' => 'duck' ),
			'capability_type'    => 'post',
			'has_archive'        => true,
			'hierarchical'       => false,
			'menu_position'      => null,
			'supports'           => array( 'title', 'editor', 'thumbnail' )
		);

		register_post_type( 'duck', $args );

		// Category
		$labels = array(
			'name'                       => _x( 'Categories', 'taxonomy general name', 'bostonducktours' ),
			'singular_name'              => _x( 'Category', 'taxonomy singular name', 'bostonducktours' ),
			'search_items'               => __( 'Search Categories', 'bostonducktours' ),
			'popular_items'              => __( 'Popular Categories', 'bostonducktours' ),
			'all_items'                  => __( 'All Categories', 'bostonducktours' ),
			'parent_item'                => null,
			'parent_item_colon'          => null,
			'edit_item'                  => __( 'Edit Category', 'bostonducktours' ),
			'update_item'                => __( 'Update Category', 'bostonducktours' ),
			'add_new_item'               => __( 'Add New Category', 'bostonducktours' ),
			'new_item_name'              => __( 'New Category Name', 'bostonducktours' ),
			'separate_items_with_commas' => __( 'Separate categories with commas', 'bostonducktours' ),
			'add_or_remove_items'        => __( 'Add or remove categories', 'bostonducktours' ),
			'choose_from_most_used'      => __( 'Choose from the most used categories', 'bostonducktours' ),
			'not_found'                  => __( 'No categories found.', 'bostonducktours' ),
			'menu_name'                  => __( 'Categories', 'bostonducktours' ),
		);

		$args = array(
			'hierarchical'          => false,
			'labels'                => $labels,
			'show_ui'               => true,
			'show_admin_column'     => true,
			'update_count_callback' => '_update_post_term_count',
			'query_var'             => true,
			'rewrite'               => array( 'slug' => 'duck-category' ),
		);

		register_taxonomy( 'duck-category', 'duck', $args );
	}
}
