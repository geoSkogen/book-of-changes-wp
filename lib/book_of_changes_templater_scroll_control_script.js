'use strict'

const scroll_control = {
	
	scroll_img : document.querySelector('#ex-machina-graphic'),

    scrollto_tabs : document.querySelectorAll('.tab-header'),

    jump_anchors : document.querySelectorAll('.sidebar-nav-anchor'),
	
	tab_coordinates : [],
	
	current_scroll_index : -1,

	get_scroll_coordinates : function () {
		
	  const scroll_depth_indices = []
      
	  this.scrollto_tabs.forEach( (this_tab)=> {
		
	    const rect = this_tab.getBoundingClientRect()
        const scroll_opts = { top: rect.y-24, left: rect.x, behavior: "smooth" }

        this.tab_coordinates.push( scroll_opts ) 
		scroll_depth_indices.push( rect.y )
		
      })
	  return scroll_depth_indices
    }	
}

var i = 0
const default_scroll_depths = scroll_control.get_scroll_coordinates()


scroll_control.jump_anchors.forEach( (nav_anchor) => { 
	
	const index = i
	
	nav_anchor.addEventListener('click', function (event) {
	
    	scroll_control.get_scroll_coordinates()
		window.scrollTo(scroll_control.tab_coordinates[index])
		console.log(index)
	})
	i++
})



window.addEventListener('scroll', (event) => {
	
	for (let i = 0; i < scroll_control.jump_anchors.length; i++) {
		scroll_control.jump_anchors[i].style.color = 'grey'
	}

	for (var i = 1; i < default_scroll_depths.length; i++) {
		
		if (window.pageYOffset > default_scroll_depths[i-1] && 
		    window.pageYOffset <= default_scroll_depths[i] ) {
				
				scroll_control.jump_anchors[i-1].style.color = 'white'
			}	
	}
})



