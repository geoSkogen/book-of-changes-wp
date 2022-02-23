<?php

class BOC_Build_Template {

  public function __construct() {
    error_log('build template');
  }

  public function app_html() {

    //error_log('this is app html!!!');
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
                 <a class="subnav-anchor profile" href="../profile/archives/">archives</a>
               </li>
               <li class="nav-suboption">
                 <a class="subnav-anchor profile" href="../profile/users/">message</a>
               </li>
               <li class="nav-suboption">
                 <a class="subnav-anchor profile" href="../profile/">settings</a>
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

   <div id='hex-modal' class="full-modal">
     <div id="close-hex-modal" class="close-modal">&laquo;</div>
     <div id="hex-modal-content">
       <div id="hex-number" class="hex-title"></div>
       <div id="hex-char" class="hex-title"></div>
       <div id="hex-name-title" class="hex-title"></div>
       <div id="hex-name-alt" class="hex-title"></div>
       <div id="hex-name-mod" class="hex-title"></div>
       <div id="meta-col-tabs" class="flex-row flex-around">
         <div id="tab-1" class="meta-col-tab" data-toggle="1">INNER</div>
         <div id="tab-2" class="meta-col-tab" data-toggle="1">OUTER</div>
       </div>
       <div id="meta-cols" class="flex-row flex-center">
         <div id="meta-col-inner" class="flex-col flex-between meta-col" data-toggle="1">
           <div id="hex-meta-inner" class="hex-purport hex-meta"></div>
           <div id="moving-lines-inner" class="hex-purport moving-meta"></div>
         </div>
         <div id="meta-col-outer" class="flex-col flex-between meta-col" data-toggle="1">
           <div id="hex-meta-outer" class="hex-purport hex-meta"></div>
           <div id="moving-lines-outer" class="hex-purport moving-meta"></div>
         </div>
       </div>
     </div>
   </div>

 </div><!-- relshell -->

 <div id="app" class="flex-row flex-center">

   <div id="first-hex" class="flex-col flex-center">
     <!---->
     <div id="line-frame-6-1" class="flex-row flex-center line-frame" data-toggle="yin">
       <div class="half-line-frame flex-row flex-between">
         <div class="half-line"></div>
         <div class="half-line"></div>
       </div>
     </div>
     <div id="line-frame-5-1" class="flex-row flex-center line-frame" data-toggle="yang">
       <div class="full-line"></div>
     </div>
     <div id="line-frame-4-1" class="flex-row flex-center line-frame" data-toggle="yin">
       <div class="half-line-frame flex-row flex-between" data-toggle="yin">
         <div class="half-line"></div>
         <div class="half-line"></div>
       </div>
     </div>
     <div id="line-frame-3-1" class="flex-row flex-center line-frame" data-toggle="yang">
       <div class="full-line"></div>
     </div>
     <div id="line-frame-2-1" class="flex-row flex-center line-frame" data-toggle="yin">
       <div class="half-line-frame flex-row flex-between">
         <div class="half-line"></div>
         <div class="half-line"></div>
       </div>
     </div>
     <div id="line-frame-1-1" class="flex-row flex-center line-frame" data-toggle="yang">
       <div class="full-line"></div>
     </div>
     <!-- -->
   </div><!-- first-hex -->

   <div id="first-trigram-col" class="trigrams flex-row flex-center">
     <div id="first-trigram-top" class="trigram"></div>
     <div id="first-trigram-bottom" class="trigram"></div>
   </div>

   <div id="results-table" class="flex-row flex-center">
     <div id="first-hex-name" class="hex-name">
       <!-- -->
     </div>
     <i id="hex-mover" class="fas fa-arrow-alt-circle-right"></i>
     <div id="second-hex-name"  class="hex-name">
       <!-- -->
     </div>
   </div>

   <div id="second-hex" class="flex-col flex-center">
     <!-- -->
     <div id="line-frame-6-2" class="flex-row flex-center line-frame" data-toggle="yang">
       <div class="full-line"></div>
     </div>
     <div id="line-frame-5-2" class="flex-row flex-center line-frame" data-toggle="yin">
       <div class="half-line-frame flex-row flex-between">
         <div class="half-line"></div>
         <div class="half-line"></div>
       </div>
     </div>
     <div id="line-frame-4-2" class="flex-row flex-center line-frame" data-toggle="yang">
       <div class="full-line"></div>
     </div>
     <div id="line-frame-3-2" class="flex-row flex-center line-frame" data-toggle="yin">
       <div class="half-line-frame flex-row flex-between">
         <div class="half-line"></div>
         <div class="half-line"></div>
       </div>
     </div>
     <div id="line-frame-2-2" class="flex-row flex-center line-frame" data-toggle="yang">
       <div class="full-line"></div>
     </div>
     <div id="line-frame-1-2" class="flex-row flex-center line-frame" data-toggle="yin">
       <div class="half-line-frame flex-row flex-between">
         <div class="half-line"></div>
         <div class="half-line"></div>
       </div>
     </div>
     <!-- -->
   </div><!-- second-hex -->

   <div id="second-trigram-col" class="trigrams flex-row flex-center">
     <div id="second-trigram-top" class="trigram"></div>
     <div id="second-trigram-bottom" class="trigram"></div>
   </div>

 </div><!-- app -->

   <div id="footer-wrap" class="flex-row flex-between">
     <i id="hex-refresh" class="fas fa-retweet"></i>
     <i id="hex-archive" class="far fa-folder"></i>
   </div>

    <?php

    $html = ob_get_clean();

    return $html;
  }

}

?>
