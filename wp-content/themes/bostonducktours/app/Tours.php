<?php

namespace BostonDuckTours;

class Tours {

    /**
     * API Response.
     *
     * Retrieves the tour objects (Tour CPT). We serve all tours at once,
     * because on the frontend they are all displayed by default, so the filtering
     * can be done on frontend only, without additional calls.
     *
     * @return \WP_REST_Response
     */
    public static function api_get_tours(): \WP_REST_Response {
        return ApiResponse::ok( self::get_tours() );
    }

    /**
     * Generate the data for the Tours (list of CPTs plus the list of categories)
     * for the frontend.
     *
     * Frontend will typically display the list of CPTs with the list of filters,
     * so it will need both at the same time.
     *
     * @return array
     */
    public static function get_tours(): array {
        return [
            'tours' => self::get_tour_posts(),
            'categories' => self::get_tour_categories()
        ];
    }

    /**
     * Retrieve the Tours CPTs, and generate data for the frontend.
     *
     * @return array
     */
    private static function get_tour_posts(): array {
        return array_map( function ( \WP_Post $tour ) {
            $post = new Post( $tour );
            $post_data = $post->get_formatted_data( [
                'id', 'slug', 'title', 'content', 'featured_image'
            ] );

            // Categories this Tours has assigned.
            $terms = wp_get_post_terms( $tour->ID, 'tour-category' );

            // Assign a list of slugs only to the post.
            $post_data['tour_categories'] = array_map( function( \WP_Term $term ) {
                return [
                    'id' => $term->term_id,
                    'slug' => $term->slug,
                    'name' => $term->name
                ];
            }, $terms );

            // Location from ACF.
            $post_data['location'] = get_field( 'location', $tour->ID );

            return $post_data;
        }, get_posts( [
            'post_type' => 'tour',
            'posts_per_page' => -1,
        ] ) );
    }

    /**
     * Retrieve the list of all slugs of Tours.
     *
     * @return array
     */
    private static function get_tour_categories(): array {
        $terms = get_terms( [
            'taxonomy' => 'tour-category'
        ] );

        return array_map( function ( \WP_Term $term ) {
            return [
                'id' => $term->term_id,
                'slug' => $term->slug,
                'name' => wp_specialchars_decode( $term->name ),
            ];
        }, $terms );
    }
}
