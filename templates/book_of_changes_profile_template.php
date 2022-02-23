<?php

class BOC_Profile_Template {

  protected $favicon_filename = 'tao-75-black-svg.png';
  protected $icon_path;
  protected $field_names;
  protected $field_labels;

  public function __construct() {
    $this->icon_path = site_url() . '/wp-content/plugins/parasol/records/images/' . $this->favicon_filename;
    $this->field_names = ['uname','email','pword','re-pword'];
    $this->field_labels = ['User Name','Email','Password','Re-Type Password'];
  }

  public function app_html() {

    ob_start();
    ?>
    <div id="relshell">

   <div id="nav-hex">
     <div class="nav-hex-line"></div>
     <div class="nav-hex-line"></div>
     <div class="nav-hex-line"></div>
     <div class="nav-hex-line"></div>
     <div class="nav-hex-line"></div>
     <div class="nav-hex-line"></div>
   </div>
   <div id="nav-modal-shell">
     <div id="nav-modal">
       <div id="close-nav-modal" class="close-modal">&laquo;</div>
       <ul id="nav-list">
         <li class="nav-option">
           <a class="nav-anchor"id="build" data-display="block,none" data-opacity="10,3.3" data-decor="underline,none" href="../">throw</a>
         </li>
         <li class="nav-option">
           <a class="nav-anchor" id="explore" data-display="block,none" data-opacity="10,3.3" data-decor="underline,none" href="#">explore</a>
           <div id="subnav-modal">
             <ul id="explore-list" class="nav-sublist">
               <li class="nav-suboption">
                 <a class="subnav-anchor explore" href="../trigrams/">八卦<br/>trigrams</a>
               </li>
               <li class="nav-suboption">
                 <a class="subnav-anchor explore" href="../hexagrams/">卦<br/>hexagrams</a>
               </li>
               <li class="nav-suboption">
                 <a class="subnav-anchor explore" href="../i-ching/">易經<br/>the book</a>
               </li>
               <li class="nav-suboption">
                 <a class="subnav-anchor explore" href="../ex-machina/">貞<br/>ex machina</a>
             </ul>
           </div>
         </li>
         <li class="nav-option">
           <a class="nav-anchor" id="profile" data-display="block,none" data-opacity="10,3.3" data-decor="underline,none" href="#">profile</a>
           <div id="subnav-modal">
             <ul id="profile-list" class="nav-sublist">
               <li class="nav-suboption">
                 <a class="subnav-anchor profile" href="/book-of-changes/profile/archives/">archives</a>
               </li>
               <li class="nav-suboption">
                 <a class="subnav-anchor profile" href="/book-of-changes/profile/users/">message</a>
               </li>
               <li class="nav-suboption">
                 <a class="subnav-anchor profile" href="/book-of-changes/profile/">settings</a>
               </li>
               <li class="nav-suboption">
                 <a class="subnav-anchor profile" href="#">logout</a>
               </li>
             </ul>
           </div>
         </li>
       </ul>
     </div><!-- nav modal-->
   </div><!-- nav modal shell -->
   <?php
    $nav_header = ob_get_clean();
    $html = $nav_header .
"<div id='app' class='flex-row flex-center'>" .
  "<div id='form-wrap' class='flex-col flex-start'>
    <h1 id='profile-header' class='flex-row flex-center'>
      <div id='badge-frame'>
          <img src='$this->icon_path' />
        </div>
      new profile
    </h1>
    <h2>☰  ☱  ☲  ☳  ☴  ☵  ☶  ☷</h2>
    <div id='new-profile-psuedo-form'>";
    $i = 0;
    foreach($this->field_names as $field_name) {
     //
      $placeholder= $this->field_labels[$i];
      $type  = strpos( $field_name, 'pword' )>-1 ? 'password' : 'text';
      $html .=
      "<div class='form-wrapper flex-row flex-center field-wrap' >
       <input type='$type' name='$field_name'
         id='$field_name' class='new-profile-input'
         placeholder='$placeholder' />
      </div>
      <div class='form-wrapper flex-row flex-center msg-wrap' >
        <div class='msg' id='$field_name-msg'></div>
      </div>";
      $i++;
    }

    $html .=
      "<div class='form-wrapper flex-row flex-center'>
        <div id='new-profile-submit' class='no-button'>create profile</div>
      <div/>";
    $html .=
    "</div>
  </div>
</div>";

    return $html;
  }

}

?>
