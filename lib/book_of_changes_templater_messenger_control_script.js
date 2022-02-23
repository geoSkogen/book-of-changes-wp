'use strict'

var msg_icons = [
  document.querySelectorAll('.message-user'),
  document.querySelectorAll('.hexmessage-user')
]

var close_modals = document.querySelectorAll('.close-modal-form')
var options = document

msg_icons.forEach( function (click_icons) {
  click_icons.forEach( function (click_icon) {
    click_icon.addEventListener('click', function (event) {
      var modal_id = this.className.replace('user','modal')
      var modal = document.querySelector('#' + modal_id)
      var text = this.parentElement.previousElementSibling.innerText
      var opts = modal.querySelectorAll('.choose')
      opts.forEach( function (opt) {
        if ( opt.value===text ) { opt.setAttribute('selected','true') }
      })
      var body = modal.querySelector('.send-body')
      if (body) { body.focus() }
      modal.style.display = 'block'
      app_shell.style.opacity = '0.33';
    })
  })
})

close_modals.forEach( function (x_out) {
  x_out.addEventListener( 'click', function (event) {
    this.parentElement.parentElement.style.display = 'none'
    app_shell.style.opacity = '1';
  })
})
