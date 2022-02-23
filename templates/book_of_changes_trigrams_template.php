<?php

class BOC_Trigrams_Template {

  public function __construct() {
    error_log('trigrams template');
  }

  public function app_html() {

    //error_log('this is app html!!!');
    ob_start();
    ?>
    <div id="relshell">
    <!-- navigation icon -->
    <div id="nav-hex">
      <div class="nav-hex-line"></div>
      <div class="nav-hex-line"></div>
      <div class="nav-hex-line"></div>
      <div class="nav-hex-line"></div>
      <div class="nav-hex-line"></div>
      <div class="nav-hex-line"></div>
    </div>

    <div id="tri-hex">
      <!--
      <div class="tri-hex-line tri-top"></div>
      <div class="tri-hex-line yin-wrap flex-row flex-between">
        <div class="half-yin tri-top"></div>
        <div class="half-yin tri-top"></div>
      </div>
      <div class="tri-hex-line tri-top"></div>
      <div class="tri-hex-line yin-wrap flex-row flex-between">
        <div class="half-yin tri-bottom "></div>
        <div class="half-yin tri-bottom "></div>
      </div>
      <div class="tri-hex-line yin-wrap flex-row flex-between">
        <div class="half-yin tri-bottom"></div>
        <div class="half-yin tri-bottom"></div>
      </div>
      <div class="tri-hex-line tri-bottom">
      </div>
      -->
    </div>

    <!-- navigation menu -->
    <div id="nav-modal-shell">
      <div id="nav-modal">
        <div id="close-nav-modal" class="close-modal">&laquo;</div>
        <ul id="nav-list">
          <li class="nav-option">
            <a class="nav-anchor"id="throw" data-display="block,none" data-opacity="10,3.3" data-decor="underline,none" href="../">throw</a>
          </li>
          <li class="nav-option">
            <a class="nav-anchor"id="build" data-display="block,none" data-opacity="10,3.3" data-decor="underline,none" href="../build/">build</a>
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

    <!-- interpretive text modal -->
    <div id='hex-modal' class="full-modal">
      <div id="close-hex-modal" class="close-modal">&laquo;</div>
      <div id="hex-modal-content">
        <div id="hex-number" class="hex-title"></div>
        <div id="hex-name-title" class="hex-title"></div>
        <div id="hex-name-alt" class="hex-title"></div>
        <div id="hex-name-mod" class="hex-title"></div>
      </div>
    </div>

  </div><!-- relshell end -->

  <div id="app" class="flex-row flex-center">
    <!-- app body -->
    <div id="trigram-menu" class="flex-col flex-start">
      <div class="trigram-frame flex-row flex-center">
        <a class="trigram-char flex-row flex-start" href="#">
          <div class="tri-lines-char"></div>
          <div class="tri-lines-name"></div>
        </a>
      </div>
      <div class="trigram-frame flex-row flex-center">
        <a class="trigram-char flex-row flex-start" href="#">
          <div class="tri-lines-char"></div>
          <div class="tri-lines-name"></div>
        </a>
      </div>
      <div class="trigram-frame flex-row flex-center">
        <a class="trigram-char flex-row flex-start" href="#">
          <div class="tri-lines-char"></div>
          <div class="tri-lines-name"></div>
        </a>
      </div>
      <div class="trigram-frame flex-row flex-center">
        <a class="trigram-char flex-row flex-start" href="#">
          <div class="tri-lines-char"></div>
          <div class="tri-lines-name"></div>
        </a>
      </div>

      <div class="trigram-frame flex-row flex-center">
        <a class="trigram-char flex-row flex-start" href="#">
          <div class="tri-lines-char"></div>
          <div class="tri-lines-name"></div>
        </a>
      </div>
      <div class="trigram-frame flex-row flex-center">
        <a class="trigram-char flex-row flex-start" href="#">
          <div class="tri-lines-char"></div>
          <div class="tri-lines-name"></div>
        </a>
      </div>
      <div class="trigram-frame flex-row flex-center">
        <a class="trigram-char flex-row flex-start" href="#">
          <div class="tri-lines-char"></div>
          <div class="tri-lines-name"></div>
        </a>
      </div>
      <div class="trigram-frame flex-row flex-center">
        <a class="trigram-char flex-row flex-start" href="#">
          <div class="tri-lines-char"></div>
          <div class="tri-lines-name"></div>
        </a>
      </div>

    </div>
  </div><!-- app body end  -->

    <!-- footer icons -->
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
