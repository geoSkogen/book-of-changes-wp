<?php

class BOC_Archive {

  public function __construct() {

    if (!post_type_exists('boc-archive')) {

      add_action( 'init', [$this,'register_custom_post_type'] );
    }

    add_filter( 'rest_route_for_post', [$this,'plugin_rest_route_for_post'], 10, 2 );
  }
  // Create the custom post type for Reviews
  public static function define_custom_post_type(){
       $labels = array(
  		'name'               =>  'Archives' ,
  		'singular_name'      =>  'Archive' ,
  		'menu_name'          =>  'Archives'
  	);

  	$args = array(
  		'labels'             => $labels,
  		'public'             => false,
  		'publicly_queryable' => true,
  		'show_ui'            => true,
  		'show_in_menu'       => true,
      'menu_position'      => 24,
      'menu_icon'          => 'dashicons-book-alt',
  		'query_var'          => true,
  		'rewrite'            => [ 'slug' => 'boc-archive'],
  		'capability_type'    => 'page',
  		'has_archive'        => false,
  		'hierarchical'       => false,
      'show_in_rest'       => true,
      'rest_controller_class' => 'WP_REST_Posts_Controller',
  		'supports'           => ['title', 'editor', 'author', 'thumbnail', 'revisions', 'custom-fields' ]
  	);

    register_post_type( 'boc-archive' , $args);
  }


  public function register_custom_post_type() {

    $this->define_custom_post_type();

    flush_rewrite_rules();
  }


  public function plugin_rest_route_for_post( $route, $post ) {
    //
    if ( $post->post_type === 'boc-archive' ) {
        $route = '/wp/v2/boc-archive/' . $post->ID;
    }
    return $route;
  }

}

?>
