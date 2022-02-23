'use strict'

var hex_names = document.querySelectorAll('.hex-name')
var hex_modal = document.querySelector('#hex-modal')
var hex_modal_closer = document.querySelector('#close-hex-modal')
var hex_refresh_icon = document.querySelector('#hex-refresh')
var modal_dom = {
  h0 : document.querySelector('#hex-number'),
  h1 : document.querySelector('#hex-name-title'),
  h2 : document.querySelector('#hex-name-alt'),
  h3 : document.querySelector('#hex-name-mod'),
  articles : {
    inner : {
      desc: document.querySelector('#hex-meta-inner'),
      lines : document.querySelector('#moving-lines-inner')
    },
    outer : {
      desc: document.querySelector('#hex-meta-outer'),
      lines : document.querySelector('#moving-lines-outer')
    }
  }
}
var hexagram_menus = document.querySelectorAll('.meta-col')
var hexagram_menu_tabs = document.querySelectorAll('.meta-col-tab')

function reset_hexes() {
  var hexes = [graph,regraph]
  var hex_bins = []
  for (var i = 0; i < hexes.length; i++) {
    hex_names[i].innerHTML = ''
    hexes[i].innerHTML = ''
  }
  document.querySelector('#hex-mover').style.display = 'none'
  hex_builder.this_hex = []
  hex_builder.next_hex = []
  hex_builder.moving_lines = []
}

function open_hex_modal() {
  hex_modal.style.display = 'block'
  app_shell.style.opacity = 0.33
}

function close_hex_modal() {
  hex_modal.style.display = 'none'
  app_shell.style.opacity = 1
  clear_modal_content();
}

function clear_modal_content() {
  for (var i = 0 ; i < 4; i++) {
    modal_dom['h'+i].innerHTML = ''
  }
  Object.keys(modal_dom.articles).forEach( function (side_key) {
    Object.keys(modal_dom.articles[side_key]).forEach( function (content_key) {
      modal_dom.articles[side_key][content_key].innerHTML = ''
    })
  })
}

function get_hex_collection(event) {
  var collection = {
    number: -1,
    names: '',
    articles: {
      inner: { desc:'', lines:[] },
      outer: { desc:'', lines:[] }
    }
  }
  var current_hex = []
  var hex_index = -1
  var objs = [hex_builder.this_hex,hex_builder.next_hex]
  var props = ['first','second']
  var descs = {}
  props.forEach( function (prop) {
    var el_prop = event.target.id.replace('-hex-name','')
    hex_index = (props.indexOf(el_prop)!=-1) ? props.indexOf(el_prop) : hex_index
    current_hex = (event.target.id===prop+'-hex-name' && hex_index>-1) ?
      objs[hex_index] : current_hex
  })
  console.log(current_hex)
  console.log(event.target.id)
  collection.number
   = library.get_hex_index(current_hex)
  collection.names = library.select_names(collection.number)
  descs = library.select_text(collection.number)
  collection.articles.inner.desc = descs.inner
  collection.articles.outer.desc = descs.outer
  collection.articles.inner.lines =
    library.select_moving_lines(collection.number,hex_builder.moving_lines,1)
  collection.articles.outer.lines =
    library.select_moving_lines(collection.number,hex_builder.moving_lines,0)
  return collection
}

function render_modal_text(collection) {
  var names = (collection.names.length) ? collection.names.split(' | ') : []
  for (var i = 0; i < names.length+1; i++) {
    modal_dom['h'+i].innerHTML = (i) ? names[i-1] : collection.number
  }
  Object.keys(modal_dom.articles).forEach( function (side) {
    var side_key = side
    Object.keys(modal_dom.articles[side_key]).forEach( function (text) {
      switch (text) {
        case 'desc' :
          modal_dom.articles[side_key][text].innerHTML = collection.articles[side_key][text]
          break
        case 'lines' :
          var list = document.createElement('ul')
          if (collection.articles[side_key][text].length) {
            collection.articles[side_key][text].forEach( function (line_text) {
              var line_text = document.createTextNode(line_text)
              var line_el = document.createElement('li')
              line_el.appendChild(line_text)
              line_el.className = 'moving-line-item'
              list.appendChild(line_el)
              list.className = 'moving-lines-list'
            })
            modal_dom.articles[side_key][text].appendChild(list)
          }
          break
        default :
          console.log('irregular data collection object')
      }
    })
  })
}

function toggle_tab(toggle_arg,id_str) {
  var next_arg = (toggle_arg) ? 0 : 1
  var props = { display: ['none','flex'], opacity:['0.72','1'] }
  var chars = [':',';']
  var index = Number(id_str.split('-')[id_str.split('-').length-1])-1
  var els = [hexagram_menus[index],hexagram_menu_tabs[index]]
  var style_strs = []
  for (var i = 0; i < els.length; i++) {
    //console.log(i)
    //console.log(els[index])
    style_strs[i] = Object.keys(props)[i] + ':' + props[Object.keys(props)[i]][toggle_arg] + ';'
    els[i].setAttribute('style',style_strs[i])
    els[i].setAttribute('data-toggle',next_arg.toString())
  }
  // iterate all menu/tab pairs
  for (var j = 0; j < hexagram_menu_tabs.length;j++) {
    if (j!=index) {
      els = [hexagram_menus[j],hexagram_menu_tabs[j]]
      for (var ii = 0; ii < els.length; ii++) {
        style_strs[ii] = Object.keys(props)[ii] + ':' + props[Object.keys(props)[ii]][0] + ';'
        els[ii].setAttribute('style',style_strs[ii])
        els[ii].setAttribute('data-toggle','1')
      }
    }
  }
}

hex_refresh_icon.addEventListener('click', function (event) {
  reset_hexes()
})

hex_names.forEach( function (hex_name_el) {

  hex_name_el.addEventListener('click', function (event) {
    if (hex_builder.this_hex.length===6) {
      var collection = get_hex_collection(event)
      render_modal_text(collection)
      open_hex_modal()
      toggle_tab('1','id-1')
    }// adds hexagram conditional
  })//ends event listener function
})//ends hex iteration

hexagram_menu_tabs.forEach( function (menu_tab) {
  menu_tab.addEventListener('click', function (event) {
    toggle_tab( this.getAttribute('data-toggle'), this.id )
  })
})

hex_modal_closer.addEventListener('click',close_hex_modal)
