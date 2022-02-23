<?php

class BOC_Ex_Machina_Template {

  protected $favicon_filename = 'tao-75-black-svg.png';

  public function __construct() {
    error_log('ex machina template');
	$this->icon_path = site_url() . '/wp-content/plugins/book-of-changes/records/images/' . $this->favicon_filename;
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
                  <a class="subnav-anchor explore" href="../trigrams/">八卦<br/>trigrams</a>
                </li>
                <li class="nav-suboption">
                  <a class="subnav-anchor explore" href="../hexagrams/">卦<br/>hexagrams</a>
                </li>
                <li class="nav-suboption">
                  <a class="subnav-anchor explore" href="../i-ching/">易經<br/>the book</a>
                </li>
                <li class="nav-suboption">
                  <a class="subnav-anchor explore" href="#">貞<br/>ex machina</a>
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

	</div>  <!-- relshell -->

	<div id="header-wrapper" class="flex-row flex-center">
	  <div id='badge-frame'>
          <img src="<?php echo $this->icon_path;?>" />
      </div>
	  <div id="ex-machina-header">
	    <h1 class="page-title">Deus Ex Machina | Machina Ex Nihilo</h1>
	    <h2 class="page-sub-title">The Legacy of <i>I Ching</i> in Digital Computing</h2>
	  </div>
	</div>

    <div id="app" class="flex-row flex-around">

	 <article id="the-graphics">
	    <div id="graphic-shell">
		  <img id="ex-machina-graphic" src="#" />
		</div>
	  </article>

	  <article id="the-content" class="">
        <h3 class="tab-header">Gottfried Liebniz</h3>
        <section class="inform flex-row flex-center">
		  <p class="snippet">
            By the early
            18th Century this German philosopher&mdash;now known as the man who
            invented calculus&mdash;had also invented an arithmetic we now take for granted
            as the binary system.  Being one of the first	European thinkers to take a
            scholarly interst in Chinese civilization, Liebniz would've already seen how
            the ancient <em>I Ching</em>'s hexagrams corresponded to
            the binary numbers 000000 through 111111&mdash;0 to 63.
          </p>
		</section>

        <section class="inform flex-row flex-center">
		  <p class="snippet">
            Liebniz reveled in the <em>I Ching</em>, citing its mere existence as
            affirmation of his own religious beliefs. He even sent a copy of the 64
            hexagrams to the Duke of Brunswick, enclosed with a letter:
          </p>
		</section>

		<section class="inform flex-row flex-center">
		  <p class="blockquote">
               It is not easy to impart the creation <em>ex nihilo</em>
               through God's almighty power. Now one can say that nothing in the world
               can better present and demonstrate this power than the origin of
               numbers, as it is presented here through the simple unadorned presentation
               of One and Zero or Nothing.
          </p>
		</section>

        <section class="inform flex-row flex-center">
		  <p class="snippet">
             Despite its centrality to his spiritual
             convictions, Liebniz's binary math aroused scant interest among thinkers
             of his era. It was only via happenstance spanning a nearly 140-year
             succession of scholarship that his system fell into place as
             subatomic particles of the object code we still use to communicate with
             machines.
          </p>
		</section>

        <h3 class="tab-header">George Boole</h3>

        <section class="inform flex-row flex-center">
		  <p class="snippet">
            In 1854 he published
            <em>An Investigation of the Laws of Thought</em>,
            proposing that logic might proceed through a type of algebra based on
            binary variables&mdash;either true or false, represented as 1 or 0&mdash;and the
            formal logical operators of conjunction, disjunction, negation,
            implication, exclusivity, and equivalence.
          </p>
		</section>

		<h3 class="tab-header">Alan Turing</h3>
        <section class="inform flex-row flex-center">
		  <p class="snippet">
		  In a 1936 paper Turing proposed the 'universal computing machine' concept&mdash;
		  now known as the 'Turing Machine'&mdash;</p>
		</section>

        <h3 class="tab-header">Claude E. Shannon</h3>

        <section class="inform flex-row flex-center">
		  <p class="snippet">
            As part of his 1937 master's thesis at MIT, he included a section
            demonstrating that any numerical or logical problem could be navigated
            through the arrangement of electro-mechanical relays using Boolean
            algebra and binary arithmetic.
          </p>
		</section>

        <h3 class="tab-header">George Stibitz</h3>

		<section class="inform flex-row flex-center">
		  <p class="snippet">Following his invention of the 'Model K'&mdash;
		    an electro-mechanical binary-based adding machine&mdash;
		    he lead the 1938 Bell Labs research project resulting in the
			Complex Number Computer.
		  </p>
		 </section>

        <h3 class="tab-header">John Atanasoff</h3>

        <section class="inform flex-row flex-center">
		  <p class="snippet">
            In 1939,
            while serving as a physics professor at Iowa State, he
            prototyped what is now recognized as the first digital computer&mdash;an
            electronic device employing vacuum tubes as switches which solved
            simultaneous linear equations through binary math and Boolean logic.
          </p>
		</section>

        <h3 class="tab-header">Grace Hopper</h3>

        <section class="inform flex-row flex-center">
		  <p class="snippet">As part of
            Harvard University's Bureau of Ships Computation Project,
            she pioneered programming of the IBM Automatic Sequence Controlled
            Calculator&mdash;the "Mark I"&mdash;during World War II.  This led to her
            development of A-0&mdash;Arithmetic Language version 0&mdash;which translated
            programmers' source code into binary object code for the newly
            constructed UNIVAC I.  What she had created was the first compiler.
          </p>
		</section>

      </article> <!-- end content -->

	  <article id="the-sidebar-nav">
	    <div id="sidebar-nav-shell">
		  <a class="sidebar-nav-anchor">
		    <h3 class="sidebar-nav-anchor-text">Liebniz</h3>
		  </a>
		  <a class="sidebar-nav-anchor">
		    <h3 class="sidebar-nav-anchor-text">Boole</h3>
		  </a>
		  <a class="sidebar-nav-anchor">
		    <h3 class="sidebar-nav-anchor-text">Turing</h3>
		  </a>
		  <a class="sidebar-nav-anchor">
		    <h3 class="sidebar-nav-anchor-text">Shannon</h3>
		  </a>
		  <a class="sidebar-nav-anchor">
		    <h3 class="sidebar-nav-anchor-text">Stibitz</h3>
		  </a>
		  <a class="sidebar-nav-anchor">
		    <h3 class="sidebar-nav-anchor-text">Atanasoff</h3>
		  </a>
		  <a class="sidebar-nav-anchor">
		    <h3 class="sidebar-nav-anchor-text">Hopper</h3>
		  </a>
		</div>
	  </article>  <!-- end sidebar -->

	</div><!-- end wrapper -->


    <?php

    $html = ob_get_clean();

    return $html;
  }

}

?>
