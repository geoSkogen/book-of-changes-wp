<?php

class BOC_Hexagrams_Template {

  public function __construct() {
    error_log('hexagrams template');
  }

  public function app_html() {

    error_log('this is app html!!!');
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
                  <a class="subnav-anchor explore" href="#">卦<br/>hexagrams</a>
                </li>
                <li class="nav-suboption">
                  <a class="subnav-anchor explore" href="../i-ching/">易經<br/>the book</a>
                </li>
                <li class="nav-suboption">
                  <a class="subnav-anchor explore" href="../ex-machina/">貞<br/>ex machina</a>
                </li>
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

    <!-- interpretive text modal -->
    <div id='hex-modal' class="full-modal">
      <div id="close-hex-modal" class="close-modal">&laquo;</div>
      <div id="hex-modal-content-first" class="hex-modal-content">
        <div class="flex-row flex-center">
          <div id="hex-lines-1" class="hex-title"></div>
          <div id="hex-number-1" class="hex-title"></div>
        </div>
        <div class="flex-row flex-center">
          <div id="hex-char-1" class="hex-title"></div>
          <div id="hex-pinyin-1" class="hex-title"></div>
        </div>
        <div id="hex-name-title-1" class="hex-title"></div>
        <div id="hex-name-alt-1" class="hex-title"></div>
        <div id="hex-name-mod-1" class="hex-title"></div>
        <br/>
        <div class="read-hex-frame flex-row flex-center">
          <a id="read-link-1" class="read-hex" href="#"></a>
        </div>
        <br/>
        <div class="inner-hex-frame flex-row flex-center">
          <a id="inner-link-1" class="inner-hex" href="#">inner</a>
          <div class="inner-pipe">&nbsp;|&nbsp;</div>
          <a id="innermost-link-1" class="inner-hex" href="#">innermost</a>
        </div>
      </div>
      <div id="icon-d-frame" class="flex-row flex-center">
        <i id="hex-mover-d" class="fas fa-arrow-alt-circle-down"></i>
      </div>
      <div id="hex-modal-content-next" class="hex-modal-content">
        <div class="flex-row flex-center">
          <div id="hex-lines-2" class="hex-title"></div>
          <div id="hex-number-2" class="hex-title"></div>
        </div>
        <div class="flex-row flex-center">
          <div id="hex-char-2" class="hex-title"></div>
          <div id="hex-pinyin-2" class="hex-title"></div>
        </div>
        <div id="hex-name-title-2" class="hex-title"></div>
        <div id="hex-name-alt-2" class="hex-title"></div>
        <div id="hex-name-mod-2" class="hex-title"></div>
        <br/>
        <div class="read-hex-frame flex-row flex-center">
          <a id="read-link-2" class="read-hex" href="#"></a>
        </div>
        <br/>
        <div class="inner-hex-frame flex-row flex-center">
          <a id="inner-link-2" class="inner-hex" href="#">inner</a>
          <div class="inner-pipe">&nbsp;|&nbsp;</div>
          <a id="innermost-link-2" class="inner-hex" href="#">innermost</a>
        </div>


      </div>
    </div>

  </div><!-- relshell end -->

  <div id="app" class="flex-row flex-center">
    <!-- app body -->
    <div id="hexagram-menu-tabs" class="flex-row flex-around">
      <div id="left-tab-1" class="menu-tab" data-toggle="1">I</div>
      <div id="middle-tab-2" class="menu-tab" data-toggle="1">II</div>
      <div id="middle-tab-3" class="menu-tab" data-toggle="1">III</div>
      <div id="right-tab-4" class="menu-tab" data-toggle="1">IV</div>
    </div>
    <!-- main -->
    <div id="hexagram-menu-1" class="flex-row flex-center hexagram-menu" data-toggle="1">
      <!-- javascript rendering-->
    </div>
    <div id="hexagram-menu-2" class="flex-row flex-center hexagram-menu" data-toggle="1">
      <!-- javascript rendering-->
    </div>
    <div id="hexagram-menu-3" class="flex-row flex-center hexagram-menu" data-toggle="1">
      <!-- javascript rendering-->
    </div>
    <div id="hexagram-menu-4" class="flex-row flex-center hexagram-menu" data-toggle="1">
      <!-- javascript rendering-->
    </div>
    <!-- end main -->
  </div><!-- app body end  -->

    <!-- footer icons -->
    <div id="footer-wrap" class="flex-row flex-between">
      <i id="hex-refresh" class="fas fa-retweet"></i>
      <i id="hex-filter" class="fas fa-filter" data-toggle="1"></i>
    </div>

    <div id="filter-menu-frame">
      <select id="filter-menu">
        <option id="0"  value="0" class="filter-option" selected>all</option>
        <option id="1" value="1" class="filter-option">sovereign</option>
        <option id="2" value="2" class="filter-option">inner</option>
        <option id="3" value="3" class="filter-option">innermost</option>
        <option id="4" value="4" class="filter-option">by trigram</option>
      </select>
    </div>

    <div id="filter-tooltip-frame" class="flex-row flex-center">
      <div id="filter-tooltip">
        <div id="close-filter-modal" class="close-modal">&laquo;</div>
        <div class="flex-row flex-center">
          <div class="filter-modal-flex-item">
            <div class="select-label">trigram</div>
            <select id="select-trigram">
              <option value="0" class="filter=option">sky - creative</option>
              <option value="1" class="filter-option">lake - joyous</option>
              <option value="2" class="filter-option">fire - clinging</option>
              <option value="3" class="filter-option">thunder - arousing</option>
              <option value="4" class="filter-option">wind - gentle</option>
              <option value="5" class="filter-option">water - abyssmal</option>
              <option value="6" class="filter-option">mountain - stillness</option>
              <option value="7"class="filter-option">earth - receptive</option>
            </select>
          </div>
          <div class="filter-modal-flex-item">
            <div class="select-label">hex segment</div>
            <select id="select-hex-segment">
              <option value="1" class="filter=option">top</option>
              <option value="0" class="filter-option">bottom</option>
            </select>
          </div>
        </div>
        <div class="flex-row flex-center">
          <button  id="filter-submit" class="no-button">filter</button>
        </div>
      </div>
    </div>
    <?php

    $html = ob_get_clean();

    return $html;
  }

}

?>
