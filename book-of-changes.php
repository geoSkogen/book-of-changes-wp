<?php
/*
Plugin Name:  Book of Changes
Description:  I Ching for WordPress
Version:      1
Author:       geoskogen
Author URI:   https://joseph-scoggins.com
Text Domain:  book_of_changes
*/

defined( 'ABSPATH' ) or die( 'We make the path by walking.' );


if (!class_exists('BOC_Archive')) {
    include_once 'classes/book_of_changes_archive.php';
  }

  $archive = new BOC_Archive();

if (is_admin()) {

  if ( !class_exists( 'BOC_Admin' ) ) {
     include_once 'classes/book_of_changes_admin.php';
  }

  $admin= new BOC_Admin(
    'book-of-changes',
    ['main'],
    ['main']
  );

} else {
  // frontend resources
  if ( !class_exists( 'BOC_Templater' ) ) {
     include_once 'classes/book_of_changes_templater.php';
  }

  if ( !class_exists( 'BOC_Router' ) ) {
     include_once 'classes/book_of_changes_router.php';
  }

  $router = new BOC_Router('book-of-changes');

  $frontend = new BOC_Templater(
    $router,
    // javascript documents to register - enqueued as needed
    ['nav_modal','hex_control','touch_wheel','throw_control','build_control',
     'trigrams_control','hexagrams_control','profile_editor','messenger_control',
     'archive_control','archive_filter','archive_post_handler','user_post_handler',
	 'scroll_control'],
    // css docs to register
    ['main','throw','build','trigrams','hexagrams','profile','users','archive','ex_machina'],
    // active theme stylesheet handle - to dequeque as needed
    'tao-75-red.png',
    'child-style'
  );

  add_action( 'wp_head', [$frontend,'favicon_tag'], 2, null );

}

?>
