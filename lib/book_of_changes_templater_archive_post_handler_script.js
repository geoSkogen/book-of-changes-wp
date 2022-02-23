'use strict'
jQuery(document).ready(function($){

function post_archive(collection,rest_api_collection) {

  const url = (window.location.origin.indexOf('localhost')>-1) ?
      window.location.origin + '/' + window.location.href.split('/')[
      window.location.href.split('/').indexOf('localhost')+1
    ]  :
    window.location.origin;

  const rest_url = url + '/wp-json/wp/v2/boc-archive'



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

function sort_archive_fields(rest_api_collection) {
  var collection = {}
  var post_body = ( document.querySelector('#messenger-body') ) ?
    document.querySelector('#messenger-body').value : ''

  var a_hex_index = library.get_hex_index(hex_builder.this_hex) ?
    library.get_hex_index(hex_builder.this_hex) : 'i'

  var mvng_lines_str = hex_builder.moving_lines.length ?
    hex_builder.moving_lines.join(',').replace(/\,/g,'') : 'n'

  var date = new Date()
  var time_arr = date.toLocaleString().split(',')
  var slug = time_arr[0].replace(/\//g,'')

  slug += time_arr[1].replace(/\:/g,'').replace(/\s/g,'')

  slug = slug.replace(/\-/g,'').replace('AM','-0').replace('PM','-1') +
    '-' + a_hex_index + '-' + mvng_lines_str

  collection = {
    // test data
    'title' : slug,
    'slug' : slug,
    'content': post_body,
    'type' : 'boc-archive',
    'status' :  'publish',
    'author': rest_api_collection.user_id,

    'meta' : {
      'hex_index': library.get_hex_index(hex_builder.this_hex),
      'mvng_lines' : hex_builder.moving_lines.join(','),
      'arch_type' : 'hexagram',
      'addressee' : rest_api_collection.user_id
    }
  }
  return collection
}

function render_messenger_header() {
  var index = library.get_hex_index(hex_builder.this_hex)
  if (index) {
    document.querySelector('#hex-char').innerHTML = hex_lines_chars_arr[index]
    document.querySelector('#name-char').innerHTML = hex_chars_table[index][0]
  }
}

function open_messenger_modal() {
  render_messenger_header()
  document.querySelector('#post-tooltip').style.display = 'block'
  document.querySelector('#wheel-frame').style.opacity = '0.33'
  document.querySelector('#second-hex').style.opacity = '0.33'
}

function close_messenger_modal() {
  document.querySelector('#post-tooltip').style.display = 'none'
  document.querySelector('#wheel-frame').style.opacity = '1'
  document.querySelector('#second-hex').style.opacity = '1'
}

var folder_icon = document.querySelector('#hex-archive')
var msg_modal_closer = document.querySelector('#close-msg-modal')
var msg_submitter = document.querySelector('#post-msg')

msg_modal_closer.addEventListener('click', close_messenger_modal)

folder_icon.addEventListener('click', open_messenger_modal)

msg_submitter.addEventListener('click', function () {
  // rest_api_collection is the php-localized script data object
  console.log('api collection')
  console.log(rest_api_collection)
  var collection = sort_archive_fields(rest_api_collection)
  console.log('collection')
  console.log(collection)
  var result = post_archive(collection,rest_api_collection)
  close_messenger_modal()
  console.log(result)
})

})
