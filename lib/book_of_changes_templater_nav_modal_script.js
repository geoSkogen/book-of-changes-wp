'use strict'

var app_shell = document.querySelector('#app')
var nav_open = document.querySelector('#nav-hex')
var nav_close = document.querySelector('#close-nav-modal')
var nav_shell = document.querySelector('#nav-modal-shell')
var nav_options = document.querySelectorAll('.nav-anchor')

nav_options.forEach( function (nav_opt) {

  nav_opt.addEventListener('click', function (event) {

    var self = this.innerText
    var toggle_arr = this.getAttribute('data-display').split(',')
    var decor_arr = this.getAttribute('data-decor').split(',')
    var subnav = document.querySelector('#' + this.id + '-list').parentElement

    nav_options.forEach( function (sibling) {

      var sibling_subnav = (document.querySelector('#' + sibling.id + '-list')) ?
        document.querySelector('#' + sibling.id + '-list').parentElement : null
      if (sibling.innerText!=self) {
        sibling.style.opacity = (toggle_arr[0]!='none') ? '0.33' : '1'
        if (sibling_subnav) {
          sibling_subnav.style.display = 'none'
          sibling.style.textDecoration = 'none'
          sibling.setAttribute('data-display','block,none')
          sibling.setAttribute('data-decor','underline,none')
        }
      }
    })
    subnav.style.display = toggle_arr[0]
    this.style.textDecoration = decor_arr[0]
    this.style.opacity = '1'
    toggle_arr.reverse()
    decor_arr.reverse()
    this.setAttribute('data-display',toggle_arr.join(','))
    this.setAttribute('data-decor',decor_arr.join(','))
  })
})

nav_open.addEventListener('click', function (event) {
  var dim = 0.3
  nav_modal_toggle(this,nav_shell,dim)
})

nav_close.addEventListener('click', function (event) {
  var bright = 1
  nav_modal_toggle(nav_shell,nav_open,bright)
})

function nav_modal_toggle(hide_me,show_me,opacity) {
  hide_me.style.display = 'none'
  show_me.style.display = 'block'
  app_shell.style.opacity = opacity

}
