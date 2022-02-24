<?php

class BOC_Throw_Template {

  public function __construct() {
    //error_log('throw template');
  }

  public function app_html() {

    //error_log('this is app html!!!');
    ob_start();
    ?>
    <div id="test"></div>
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

    <!-- navigation menu -->
    <div id="nav-modal-shell">
      <div id="nav-modal">
        <div id="close-nav-modal" class="close-modal">&laquo;</div>
        <ul id="nav-list">
          <li class="nav-option">
            <a class="nav-anchor"id="build" data-display="block,none" data-opacity="10,3.3" data-decor="underline,none" href="build/">build</a>
          </li>
          <li class="nav-option">
            <a class="nav-anchor" id="explore" data-display="block,none" data-opacity="10,3.3" data-decor="underline,none" href="#">explore</a>
            <div id="subnav-modal">
              <ul id="explore-list" class="nav-sublist">
                <li class="nav-suboption">
                  <a class="subnav-anchor explore" href="trigrams/">八卦<br/>trigrams</a>
                </li>
                <li class="nav-suboption">
                  <a class="subnav-anchor explore" href="hexagrams/">卦<br/>hexagrams</a>
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

  </div><!-- relshell end -->

  <div id="app" class="flex-row flex-center">
    <!-- app body -->
    <div id="wheel-frame" class="flex-row flex-center">
      <div id="wheel-frame-v-align" class="flex-col flex-center control">
        <div id="wheel-outer" class="flex-row flex-center">
          <div id="wheel-outer-v-align" class="flex-col flex-center control">
            <div id="wheel-inner" class="flex-col flex-center">
              <!-- hexgram dynamic render element 1 -->
            </div><!-- wheelinner -->
          </div>
        </div><!-- wheelouter -->
      </div>
    </div><!-- wheelframe -->

    <div id="post-tooltip-frame" class="flex-row flex-center">
      <div id="post-tooltip">
        <div id="close-msg-modal" class="close-modal">&laquo;</div>
        <div id="msg-modal-title" class="flex-row flex-center">
          <div id="hex-char"></div>
          <div id="name-char"></div>
        </div>
        <div class="flex-row flex-center">
          <textarea id="messenger-body" rows="6" cols="32"></textarea>
        </div>
        <div class="flex-row flex-center">
          <button  id="post-msg" class="no-button">send</button>
        </div>
      </div>
    </div>

    <div id="results-table" class="flex-row flex-center">
      <div id="first-hex-name" class="hex-name">
        <!-- hexgram title dynamic render text node 1 -->
      </div>
      <i id="hex-mover" class="fa fa-arrow-circle-o-right"></i>
      <div id="second-hex-name"  class="hex-name">
        <!-- hexgram title dynamic render text node 2 -->
      </div>
    </div>

    <div id="second-hex" class="flex-col flex-center">
      <!-- hexgram dynamic render element 2 -->
    </div>
  </div><!-- app body end  -->

    <!-- footer icons -->
  <div id="footer-wrap" class="flex-row flex-between">
    <i id="hex-refresh" class="fa fa-refresh" ></i>
    <i id="hex-archive" class="fa fa-folder" ></i>
  </div>
    <?php

    $html = ob_get_clean();

    return $html;
  }

}

?>
