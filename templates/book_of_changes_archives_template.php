<?php

class BOC_Archives_Template {

  public function __construct() {
    error_log('archives template');
  }

  public function app_html() {

    error_log('this is app html!!!');
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
                 <a class="subnav-anchor profile" href="../archives/">archives</a>
               </li>
               <li class="nav-suboption">
                 <a class="subnav-anchor profile" href="../users/">message</a>
               </li>
               <li class="nav-suboption">
                 <a class="subnav-anchor profile" href="../../profile/">settings</a>
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

   </div><!--relshell-->
    <h1>A bell is a cup.</h1>
    <?php

    $html = ob_get_clean();

    return $html;
  }

}

?>
