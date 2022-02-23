'use strict'
jQuery(document).ready(function($){

function post_user(collection,rest_api_collection) {

  const url = (window.location.origin.indexOf('localhost')>-1) ?
      window.location.origin + '/' + window.location.href.split('/')[
      window.location.href.split('/').indexOf('localhost')+1
    ]  :
    window.location.origin;

  const rest_url = url + '/wp-json/wp/v2/users'

  $.ajax({
      method: "POST",
      url: rest_url,
      //
      data: collection,

      beforeSend: function ( xhr ) {
          xhr.setRequestHeader( 'X-WP-Nonce', rest_api_collection.nonce );
      },
      success : function( response ) {
        // Save the page ID in case you need it for something
        console.log(response)
        var boc_arch_id = response.id;
      }
  })
}

function sort_user_fields(form_fields) {
  var collection = {}

  collection = {
    // test data
    'username' : form_fields.uname,
    'email': form_fields.email,
    'password' : form_fields.pword,
    'roles' : ['subscriber']
  }
  return collection
}


function audit_form(collection) {
  var i = 0
  const messages = {
    'uname' : 'user name is too long or contains invalid characters',
    'email' : 'invalid email format',
    'pword' : 'password is too long or contains invalid characters',
    're_pword' : "passwords don't match"
  }
  msg_fields.forEach( (msg_field) => {
    msg_field.innerHTML = ''
  })

  fields.forEach( (field) => {

    if (!collection[field.id]) {
      field.className += ' error'
      field.setAttribute('placeholder',messages[field.id])
      msg_fields[i].innerHTML = messages[field.id]
    }
    i++
  })
}


function get_user_fields(input_els) {
  var pword
  var valid = 0;
  const validator = {
    'uname' : function (str) {
      var err = null
      const no_chars = [
        '{','}','(',')','=',';',':','/','\\','[',']'
      ]
      if (str.length < 17) {
        no_chars.forEach( (char) => {
          if (str.indexOf(char) > -1) {
            err = true
          }
        })
      } else {
        err = true
      }
      return err ? '' : str
    },
    'email' : function (str) {
      var err = null
      const patt = new RegExp(/(\w|0-9)+\@(\w|0-9)+\.(\w|0-9)+/)
      if (patt.test) {
        err = true
      }
      return err ? '' : str
    },
    'pword' : function (str) {
      var err = null
      const no_chars = ['{','}','(',')','=',';',':','/','\\','[',']']
      if (str.length < 25) {
        no_chars.forEach( (char) => {
          if (str.indexOf(char) > -1) {
            err = true
          }
        })
      } else {
        err = true
      }
      pword = str
      return err ? '' : str
    },
    're-pword' : function (str) {
      var err = true
      if (str===pword) {
        err = false
      }
    }
    return err ? '' : str
  }
  const assoc_arr = {}

  input_els.forEach( function (input_el) {
    if ( validator[el.id](input_el.value) ) {
      valid++
      assoc_arr[input_el.id] = input_el.value
    }
  })
  assoc_arr['valid'] = valid
  return assoc_arr

const submitter = document.querySelector('#new-profile-submit')
const fields = document.querySelectorAll('.new-profile-input')
const msg_fields = document.querySelectorAll('.msg')

submitter.addEventListener('click', function () {
  // rest_api_collection is the php-localized script data object
  console.log('api collection')
  console.log(rest_api_collection)

  var form_fields = get_user_fields(fields)
  var collection = sort_user_fields(form_fields)

  console.log('collection')
  console.log(collection)

  if (Object.keys(collection).length===fields.length) {
    //
    var result = post_user(collection,rest_api_collection)
  } else {
    audit_form(collection)
  }
  console.log(result)
})

})
