<?php

class BOC_Router {

  public $subdomain;
  protected $templates_path;


  public function __construct($subdomain) {
    $this->subdomain = $subdomain;
    $this->templates_path = __DIR__ . '../../templates/';
  }

  public function get($uri) {
    // html str
    $resource = str_replace($this->subdomain,'',$uri);

    switch($resource) {

      case '/' :

        if (!class_exists('BOC_Throw_Template')) {
          include_once $this->templates_path . 'book_of_changes_throw_template.php';
        }
        $app_html = new BOC_Throw_Template();
        break;

      case '/build/' :

        if (!class_exists('BOC_Build_Template')) {
          include_once $this->templates_path . 'book_of_changes_build_template.php';
        }
        $app_html = new BOC_Build_Template();
        break;

      case '/hexagrams/' :

        if (!class_exists('BOC_Hexagrams_Template')) {
          include_once $this->templates_path . 'book_of_changes_hexagrams_template.php';
        }
        $app_html = new BOC_Hexagrams_Template();
        break;

      case '/trigrams/' :

        if (!class_exists('BOC_Trigrams_Template')) {
          include_once $this->templates_path . 'book_of_changes_trigrams_template.php';
        }
        $app_html = new BOC_Trigrams_Template();
        break;

	 case '/ex-machina/' :

	    if (!class_exists('BOC_Ex_Machine_Template')) {
          include_once $this->templates_path . 'book_of_changes_ex_machina_template.php';
        }
        $app_html = new BOC_Ex_Machina_Template();
        break;

      case '/i-ching/' :

	    if (!class_exists('BOC_I_Ching_Template')) {
          include_once $this->templates_path . 'book_of_changes_i_ching_template.php';
        }
        $app_html = new BOC_I_Ching_Template();
        break;

      case '/profile/' :

        if (!class_exists('BOC_Profile_Template')) {
          include_once $this->templates_path . 'book_of_changes_profile_template.php';
        }
		$app_html = new BOC_Profile_Template();
        break;

      case '/archives/' :

		 if (!class_exists('BOC_Archives_Template')) {
          include_once $this->templates_path . 'book_of_changes_archives_template.php';
        }
		$app_html = new BOC_Archives_Template();
        break;

        break;

      case '/contacts/' :

		 if (!class_exists('BOC_Users_Template')) {
          include_once $this->templates_path . 'book_of_changes_users_template.php';
        }
		$app_html = new BOC_Users_Template();
        break;

      case '/cred/' :


      case '/history/' :


      default :
        if (!class_exists('BOC_Default_Template')) {
          include_once $this->templates_path . 'book_of_changes_default_template.php';
        }
        $app_html = new BOC_Default_Template();
    }

    return $app_html->app_html();

  }

}

?>
