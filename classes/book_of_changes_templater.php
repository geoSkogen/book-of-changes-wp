<?php

class BOC_Templater {

  public static $record_handles = ['hex-data','hex-chars'];
  public  $script_handles;
  public  $style_handles;
  protected $router;
  protected $theme_handle;

  public function __construct($router, $scripts_arr, $styles_arr, $favicon_filename, $theme_style_handle) {
    $this->script_handles = $scripts_arr;
    $this->style_handles = $styles_arr;
    $this->favicon_filename = $favicon_filename;
    $this->router = $router;
    $this->theme_handle = $theme_style_handle;
    //
    add_shortcode( $this->router->subdomain . '-template',
      [$this,'print_book_of_changes_template']
    );
    //
    add_action('wp_enqueue_scripts',[$this,'add_assets']);
  }


  public function add_assets() {
    // void - register
    foreach ($this->style_handles as $style_handle) {
      wp_register_style(
        $style_handle,
        plugin_dir_url(__FILE__) .
        '../style/' . 'book_of_changes_templater_' . $style_handle . '_style.css'
      );
    }

    wp_register_style(
      'font-awesome',
      plugin_dir_url(__FILE__) . '../style/font-awesome-4.7.0/css/font-awesome.min.css'
    );
    wp_enqueue_style('font-awesome');

    //
    foreach ($this->script_handles as $script_handle) {

      $deps = (
        $script_handle==='archive_post_handler' ||
        $script_handle==='user_post_handler' ) ?
          ['jquery'] : [];

      wp_register_script(
        $script_handle,
        plugin_dir_url(__FILE__) .
        '../lib/' . 'book_of_changes_templater_' . $script_handle . '_script.js',
        $deps,
        null,
        true
      );
    }
    //
    self::add_records(self::$record_handles);
    //
  }


  public static function add_records($script_handles) {

    foreach ($script_handles as $script_handle) {
      wp_register_script(
        $script_handle,
        plugin_dir_url(__FILE__) .
        '../records/' .  $script_handle . '.js',
        array(),
        null,
        true
      );
    }
  }


  public function favicon_tag() {
    // void - echo
    $uri_arr = explode('/',$_SERVER['REQUEST_URI']);
    if (in_array($this->router->subdomain,$uri_arr)) {

      $href = site_url() . '/wp-content/plugins/book_of_changes/records/images/' . $this->favicon_filename;
      $tag = "<link rel='icon' href='{$href}' type='image/x-icon' />";
      error_log($href);
      echo $tag;
    }
  }


  public function print_book_of_changes_template($atts = []) {
    // void - echo
    extract(shortcode_atts(array(
      'style_slugs' => '',
      'script_slugs' => ''
     ), $atts));
    //
    $style_slugs = !empty($atts['style_slugs']) ? explode(',',$atts['style_slugs']) : [];
    $script_slugs = !empty($atts['script_slugs']) ? explode(',',$atts['script_slugs']) : [];
    //
    wp_dequeue_style($this->theme_handle);
    wp_deregister_style($this->theme_handle);
    // main stylesheet is always enqueued -
    wp_enqueue_style('main');
    // stylesheet args option -
    foreach($style_slugs as $style_slug) {
      if (in_array($style_slug, $this->style_handles) ) {
        wp_enqueue_style($style_slug);
      }
    }
    // reference docs are required -
    foreach (self::$record_handles as $record_handle) {
      wp_enqueue_script($record_handle);
    }
    // collapsible nav script is required -
    wp_enqueue_script('nav_modal');
    // reference docs controller is required -
    wp_enqueue_script('hex_control');
    // javascript doc args option -
    foreach($script_slugs as $script_slug) {
      //
      if ( in_array($script_slug, $this->script_handles) ) {
        //
        wp_enqueue_script($script_slug);
        //
        if ($script_slug==='archive_post_handler') {
          $user = wp_get_current_user();
          wp_localize_script( 'archive_post_handler', 'rest_api_collection',
            [ 'nonce' => wp_create_nonce( 'wp_rest' ), 'user_id' => $user->ID ]
          );
        }

        if ($script_slug==='user_post_handler') {
          //
          wp_localize_script( 'user_post_handler', 'rest_api_collection',
            [ 'nonce' => wp_create_nonce( 'wp_rest' ) ]
          );
        }
      }
    }
    // show the shortcode the path
    if (strpos(site_url(),'localhost')) {
      // kludge against LAMP staging site URL
      $url_arr= explode('/',site_url());
      $domain = $url_arr[count($url_arr)-1] ?
        $url_arr[count($url_arr)-1] : $url_arr[count($url_arr)-2];
      //
      $path = str_replace('/' . $domain . '/', '', $_SERVER['REQUEST_URI']);
    } else {
      //
      $path = substr(1,$_SERVER['REQUEST_URI']);
    }
    // print the routed app template onto the page
    echo $this->router->get($path);
  }

}
