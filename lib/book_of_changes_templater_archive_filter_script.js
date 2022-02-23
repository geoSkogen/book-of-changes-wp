'use strict'

var filter_icon = document.querySelector('#hex-filter')

var filter_menu = document.querySelector('#filter-menu')

var archive_items = document.querySelectorAll('.row-wrapper')

var user_filter = document.querySelector('#user-filter')

var user_filter_modal = document.querySelector('#user-filter-modal')

var user_filter_field = document.querySelector('#user-filter-field')

var go_button = document.querySelector('#go')

filter_icon.addEventListener('click', function (event) {
  toggle_modal_block(filter_menu,this)
})

filter_menu.addEventListener('change', function (event) {
  var el_index_arr = filter_archives(this.value,'')
  if (el_index_arr.length) {
    render_filtered_archives(el_index_arr)
  }
})

go_button.addEventListener('click', function (event) {
  var el_index_arr = filter_archives(5,user_filter_field.value)
  render_filtered_archives(el_index_arr)
  toggle_modal_block(user_filter_modal,user_filter)
  background_restore()
})

function toggle_modal_block(toggle_el,trigger_el) {
  var props = ['none','block']
  var reset_val = null
  var current_val = (Number(trigger_el.getAttribute('data-toggle')))
  reset_val = (current_val) ? 0 : 1
  toggle_el.style.display=props[current_val]
  trigger_el.setAttribute('data-toggle',reset_val)
  return reset_val
}

function background_dimmer() {
  app_shell.style.opacity = '0.33'
  toggle_modal_block(filter_menu,filter_icon)

}

function background_restore() {
  app_shell.style.opacity = '1'
}

function render_filtered_archives(data_arr) {
  for (var i = 1; i < archive_items.length; i++) {
    archive_items[i].style.display = (data_arr.indexOf(i)>-1) ? 'flex' : 'none'
  }
}

function filter_archives(rule,filter) {
  var result_arr = []
  switch (Number(rule)) {
    case 0 :
      for (var i = 1; i < archive_items.length; i++) {
        result_arr.push(i)
      }
      break
    case 1 :
      for (var i = 1; i < archive_items.length; i++) {
        if (!archive_items[i].querySelector('.hex_char').querySelector('i')) {
          result_arr.push(i)
        }
      }
      break
    case 2 :
      for (var i = 1; i < archive_items.length; i++) {
        if (archive_items[i].querySelector('.hex_char').querySelector('i')) {
          result_arr.push(i)
        }
      }
     break
    case 3 :
      for (var i = 1; i < archive_items.length; i++) {
        if (!archive_items[i].querySelector('.hex_char').querySelector('i')) {
          result_arr.push(i)
        }
      }
     break
    case 4 :
      toggle_modal_block(user_filter_modal,user_filter)
      background_dimmer()
      break
    case 5 :
      for (var i = 1; i < archive_items.length; i++) {
        if (archive_items[i].querySelector('.author').innerText===filter.toLowerCase() ) {
          result_arr.push(i)
        }
      }
      break
    default :
     console.log('no filter code')
  }
  return result_arr
}
