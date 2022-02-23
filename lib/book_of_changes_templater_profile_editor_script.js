'use strict'

var toggle_ops = [
  function (textval) {
    var div = document.createElement('div')
    var node = document.createTextNode(textval)
    div.className = 'toggle-in'
    div.appendChild(node)
    return div
  },
  function (textval) {
    var input = document.createElement('input')
    input.value = textval
    input.className = 'edit-profile-input toggle-in'
    return input
  }
]

function toggle_input(el,arg) {
  var val = el.getAttribute('data-toggle')
  var text = (Number(val)) ? el.innerText : el.value
  console.log(val)
  //console.log(text)
  var parent = el.parentElement
  var sibling = el.nextElementSibling
  var new_el = toggle_ops[Number(val)](text)
  var new_att = ( Number(val) ) ? '0' : '1'
  new_el.setAttribute('data-toggle',new_att)
  new_el.id = el.id
  parent.removeChild(el)
  parent.insertBefore(new_el,sibling)
  new_el.focus()
}

function init() {
  var appendix = document.querySelector('#form-appendix')
  var current_toggle_els = document.querySelectorAll('.toggle-in')
  var current_vals = {}

  current_toggle_els.forEach( function (current_toggle_el) {
    current_vals[current_toggle_el.id.replace('edit_','')] =
      current_toggle_el.innerText
  })
  console.log(current_vals)
  if (!appendix) {
    return false;
  } else {
    var edit_links = document.querySelectorAll('.toggle-it')
    var submit_button = document.querySelector('#no-submit')

    edit_links.forEach( function (edit_link) {

      if (edit_link.id!='lock-icon-wrapper') {

        edit_link.addEventListener( 'click', function (event) {
          var val = Number(this.getAttribute('data-toggle'))
          var new_att = (val) ? '0' : '1'
          var indexed_el = this.previousElementSibling
          console.log(indexed_el)
          console.log(indexed_el.value)
          toggle_input(indexed_el,val)
          this.setAttribute('data-toggle',new_att)
        })
      }
    })

    submit_button.addEventListener( 'click', function (event) {
      var toggle_els = document.querySelectorAll('.toggle-in')
      var form = document.createElement('form')
      var submit = document.createElement('input')
      toggle_els.forEach( function (toggle_el) {
        var no_in = document.createElement('input')
        var val = (toggle_el.value) ? toggle_el.value : toggle_el.innerText
        console.log(val)
        no_in.value = (toggle_el.value) ? toggle_el.value : toggle_el.innerText
        no_in.setAttribute('name',toggle_el.id)
        form.appendChild(no_in)
      })
      Object.keys(current_vals).forEach( function (current_name) {
        var no_in = document.createElement('input')
        no_in.value = current_vals[current_name]
        no_in.setAttribute('name',current_name)
        form.appendChild(no_in)
      })
      appendix.appendChild(form)
      form.id = 'no-form'
      form.setAttribute('method','POST')
      form.setAttribute('action','/book-of-changes/profile/edit/index.php')
      form.appendChild(submit)
      form.submit()
    })
  }
}

init()
