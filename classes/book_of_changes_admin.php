<?php

class BOC_Admin {

  protected $options;
  protected $suboptions;

  public $style_handles;
  public $script_handles;

  public function __construct($shortcode_handle,$script_handles,$style_handles) {

    $this->style_handles = $style_handles;
    $this->script_handles = $script_handles;
	$this->shortcode_handle = $shortcode_handle;

    //
    add_action(
     'admin_menu',
     [$this,'book_of_changes_register_options_pages']
    );
    //
    add_action(
      'admin_init',
      [$this,'book_of_changes_init_settings_api']
    );
    //
    add_action('wp_admin_enqueue_scripts',[$this,'add_assets']);
    //
  }


  public function add_assets() {
    //
    foreach ($this->style_handles as $style_handle) {
      wp_register_style(
        $style_handle,
        plugin_dir_url(__FILE__) .
        '../style/' . 'book_of_changes_admin_' . $style_handle . '_style.css'
      );
    }
    //
    foreach ($this->script_handles as $script_handle) {
      wp_register_script(
        $script_handle,
        plugin_dir_url(__FILE__) .
        '../lib/' . 'book_of_changes_admin_' . $script_handle . '_script.js',
        array(),
        null,
        true
      );
    }
    //
  }


  public function book_of_changes_register_options_pages () {
    //
    add_menu_page(
      'Book of Changes - Options', // Page Title
      'Book of Changes',  // Menu Title
      'manage_options', //capability
      'book_of_changes',  //menu_slug
      [$this,'book_of_changes_options_page'],//cb function
      'dashicons-text',
      22
    );
    //
    add_submenu_page(
      'book_of_changes', // parent slug
      'Book of Changes - Sub-Options', // Page Title
      'Book of Changes - Sub-Options',  // Menu Title
      'manage_options', //capability
      'book_of_changes_suboptions',  //menu_slug
      [$this,'book_of_changes_suboptions_page']//cb function
    );
  }


  public function book_of_changes_init_settings_api() {
    //
    add_settings_section(
      'book_of_changes',         //unique id
      'BOC Options Section',         //title
      [$this,'book_of_changes_options_section'],    //call back function
      'book_of_changes'        //page_slug
    );
    //
    add_settings_field(
      'api_key', //id
      'Book of Changes API Key', //label
      [$this,'book_of_changes_api_key_field'],    //call back function
      'book_of_changes',    // page slug
      'book_of_changes'     //section (parent settings-section uniqueID)
    );
    //
    add_settings_field(
      'publish', //id
      'Book of Changes - Publish Now?', //label
      [$this,'book_of_changes_publish_field'],    //call back function
      'book_of_changes',    // page slug
      'book_of_changes'     //section (parent settings-section uniqueID)
    );
    //
    add_settings_section(
      'book_of_changes_suboptions',         //unique id
      'Book of Changes - Sub-Options Section',         //title
      [$this,'book_of_changes_suboptions_section'],    //call back function
      'book_of_changes_suboptions'        //page_slug
    );
    //
    add_settings_field(
      '1', //id
      'Book of Changes Sub-Option 1', //label
      [$this,'book_of_changes_suboption_1_field'],    //call back function
      'book_of_changes_suboptions',    // page slug
      'book_of_changes_suboptions'     //section (parent settings-section uniqueID)
    );

    register_setting(
      'book_of_changes',
      'book_of_changes'
    );

    register_setting(
      'book_of_changes_suboptions',
      'book_of_changes_suboptions'
    );
  }


  protected function collect_section_overhead($prop_slug,$db_slug,$path_slug) {
    //
    $db_slug = ($db_slug) ? '_' . $db_slug : '';
    //
    $this->{$prop_slug} =
      !empty( get_option('book_of_changes' . $db_slug) ) ?
        get_option('book_of_changes' . $db_slug) : [];
    //
    if (in_array($path_slug,$this->style_handles)) {
      wp_enqueue_style($path_slug);
    }
    //
    if (in_array($path_slug,$this->script_handles)) {
      wp_enqueue_script($path_slug);
    }
  }


  public function book_of_changes_options_section() {
    //
    $this->collect_section_overhead('options','','main');
    //
    ?>
    <div class="book-of-changes-signal">
      This is the Options Section of the Options Page
    </div>
    <?php
    //
  }


  public function book_of_changes_api_key_field() {
    //
    $val = !empty($this->options['api_key']) ? $this->options['api_key'] : '';
    $att = ($val) ? 'value' : 'placeholder';
    $val = ($val) ? $val : 'not set';
    //
    ?>
    <label for="api-key">API Key:</label>
    <input type="text" id="api-key" class="book-of-changes-admin"
     name="book_of_changes[api_key]" <?php echo $att ."='". $val  ."'"?> />
    <?php
    //
  }


  public function book_of_changes_publish_field() {
    //
    $val = (!empty($this->options['publish']) && $this->options['publish']) ?
      $this->options['publish'] : '';

    if ($val) {
      //error_log('publish value is set');
      if (!class_exists('BOC_Publisher')) {
        include_once 'book_of_changes_publisher.php';
      }
      //
      $publisher = new BOC_Publisher('book-of-changes');
      //
      if (!$publisher->error) {
        //error_log('valid data for publication');
        $publisher->publish($this->shortcode_handle,'templates/template-full-width.php');

        $opts = get_option('book_of_changes');
        $opts['publish'] = 0;
        update_option('book_of_changes',$opts);
      }
      //
      if ($publisher->error) {
        error_log(print_r($publisher->error,true));
      }
    }

    ?>
    <label for="publish">Publish Now?</label>
    <input type="checkbox" id="publish" class="book-of-changes-checkbox"
      name="book_of_changes[publish]" value="1" />
    <?php
    //
  }


  public function book_of_changes_suboptions_section () {
    //
    $this->collect_section_overhead('suboptions','suboptions','main');
    //
    ?>
    <div class="book-of-changes-signal">
      This is the Sub-Options Section of the Sub-Options Page
    </div>
    <?php
    //
  }


  public function book_of_changes_suboption_1_field() {
    //
    $val = !empty($this->suboptions[1]) ? $this->suboptions[1] : '';
    $att = ($val) ? 'value' : 'placeholder';
    $val = ($val) ? $val : 'not set';
    //
    ?>
    <label for="suboption-1"></label>
    <input type="text" id="suboption-1" class="book-of-changes-admin"
     name="book_of_changes_suboptions[1]" <?php echo $att ."='". $val  ."'"?> />
    <?php
    //
  }


  public function book_of_changes_options_page () {
    //
    $this->book_of_changes_options_form('book_of_changes');
  }


  public function book_of_changes_suboptions_page () {
    //
    $this->book_of_changes_options_form('book_of_changes_suboptions');
  }


  protected function book_of_changes_options_form ($prop) {
    //
    echo "<form method='POST' action='options.php' id='$prop'>";
    //
    settings_fields( $prop );
    do_settings_sections( $prop );
    submit_button();
    //
    echo '</form>';
  }

}

?>
