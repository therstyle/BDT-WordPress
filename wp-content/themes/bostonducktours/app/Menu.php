<?php

namespace BostonDuckTours;

/**
 * This class should contain functionalities related to menus
 * (e.g. registering new menus).
 *
 * An instance of this class represents a single menu.
 */
class Menu {

	/**
	 * An object representing the current menu.
	 *
	 * @var \WP_Term
	 */
	private $menu;

	/**
	 * Registers all menus that the theme supports.
	 */
	public static function register_menus(): void {
		add_action( 'init', function () {
			Header::add_menu();
			Footer::add_menu();
		} );
	}

	/**
	 * @param string $location Name of the menu location to retrieve
	 *                         menu for.
	 */
	public function __construct( string $location ) {
		$locations  = get_nav_menu_locations();
		$this->menu = wp_get_nav_menu_object( $locations[ $location ] );
	}

	/**
	 * Retrieve the items belonging to the current menu.
	 *
	 * This function returns a one-dimensional array of menu items,
	 * even if menu is nested!
	 *
	 * @return array
	 */
	public function get_items(): array {
		$items = wp_get_nav_menu_items( $this->menu );

		// Items from wp_get_nav_menu_items contain a lot of properties
		// that we'll not use when displaying them. Keep only the
		// properties that we will use to make the response when sending
		// the menu smaller.
		return array_map( function ( $item ) {
			return [
				'ID'    => $item->ID,
				'title' => $item->title,
				'url'   => $item->url
			];
		}, $items );

	}

	/**
	 * Retrieve the items belonging to the current menu.
	 *
	 * This function returns a hierarchical array of menu items
	 *
	 * @return array
	 */
	public function get_nested_items(): array {
		$menu_object = wp_get_nav_menu_items( $this->menu );
		$menu_items  = array();

		foreach ( $menu_object as $menu_element ) {
			$background = get_field( 'menu_item_has_background', $menu_element->ID );

			$menu_item = [
				'ID'      => $menu_element->ID,
				'title'   => $menu_element->title,
				'url'     => $menu_element->url,
				'target'  => $menu_element->target,
				'classes' => $menu_element->classes
			];

			if ( ! empty( $menu_element->menu_item_parent ) ) {
				$menu_items[ $menu_element->menu_item_parent ]['submenu'][] = $menu_item;

				continue;
			}

			$menu_items[ $menu_element->ID ] = array_merge( $menu_item, [
				'target'     => $menu_element->target,
				'background' => $background,
				'submenu'    => []
			] );
		}

		return array_values( $menu_items );
	}
}
