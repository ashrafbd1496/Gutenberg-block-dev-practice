<?php
/**
 * Plugin Name: Dynamic Block Plugin
 * Description: Dynamic block plugin for Gutenberg editor.
 * Version: 1.0
 * Author: Ashraf
 * text-domain: dbp
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; 
}

// Register block script and style
function dynamic_block_register_assets() {
    wp_register_script(
        'dynamic-block-editor-script',
        plugins_url( 'block.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-data' ),
        '1.0',
        true
    );
      // CSS register
      wp_register_style(
        'dynamic-block-style',
        plugins_url( 'style.css', __FILE__ ),
        array(),
        '1.0'
    );
}
add_action( 'init', 'dynamic_block_register_assets' );

function dynamic_block_register_block() {
    register_block_type( 'dynamic/block', array(
        'editor_script' => 'dynamic-block-editor-script',
        'style'         => 'dynamic-block-style',
        'render_callback' => 'dynamic_block_render_callback', 
    ) );
}
add_action( 'init', 'dynamic_block_register_block' );


function dynamic_block_render_callback( $attributes ) {
    //data fetcing from custom post types-books
    $args = array(
        'post_type' => 'book',
        'posts_per_page' => 5,
    );
    $query = new WP_Query( $args );

    if ( ! $query->have_posts() ) {
        return '<p>No books found.</p>';
    }

    $output = '<ul class="dynamic-book-list">';
    while ( $query->have_posts() ) {
        $query->the_post();
        $book_title = get_the_title();
        $book_link = get_permalink(); 
        $output .= '<li><a href="' . esc_url( $book_link ) . '" target="_blank" rel="noopener">' . esc_html( $book_title ) . '</a></li>';

    }
    wp_reset_postdata();

    $output .= '</ul>';

    return $output;
}

function register_custom_post_type() {
    register_post_type( 'book', array(
        'label' => 'Books',
        'public' => true,
        'supports' => array( 'title', 'editor', 'thumbnail' ),  // editor সহ ব্লক সমর্থন
        'show_in_rest' => true, // ব্লক এডিটর সক্রিয় করার জন্য
        'menu_icon' => 'dashicons-book',
    ) );
}
add_action( 'init', 'register_custom_post_type' );



function dynamic_block_include_template( $template ) {
    if ( is_singular( 'book' ) ) {
        // 'book' পোস্ট টাইপের জন্য টেমপ্লেট ফাইল নির্ধারণ
        $plugin_template = plugin_dir_path( __FILE__ ) . 'single-book.php';
        if ( file_exists( $plugin_template ) ) {
            return $plugin_template;
        }
    }

    return $template;
}
add_filter( 'template_include', 'dynamic_block_include_template' );
