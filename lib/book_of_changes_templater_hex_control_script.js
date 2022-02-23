'use strict'

var library = {
  get_hex_index : function (the_hex_arr) {
    var bin_str = the_hex_arr.join('')
    return (hex_bin_arr.indexOf(bin_str) > 0 ) ?
      hex_bin_arr.indexOf(bin_str) : false
  },
  get_tri_index :  function (tri_arr) {
    var bin_str = tri_arr.join('')
    return (tri_bin_arr.indexOf(bin_str) > -1 ) ?
      tri_bin_arr.indexOf(bin_str) : false
  },
  select_names : function (the_hex_index) {
    var result = (the_hex_index && hex_name_arr[the_hex_index]) ?
      hex_name_arr[the_hex_index] : false
    return result
  },
  select_tri_names : function (the_tri_index) {
    var result = (tri_names_arr[the_tri_index]) ?
      tri_names_arr[the_tri_index][0] + tri_names_arr[the_tri_index][1] : ''
    return result
  },
  select_char : function (the_index,arg1,arg2) {
    var result = ''
    var pos = -1;
    if (arg1) {
      pos = (arg2) ? 0 : 1
      result = (the_index && hex_chars_table[the_index]) ?
      hex_chars_table[the_index][pos] : '&Omega;'
    } else {
      pos = (arg2) ? 1 : 0
      result = (tri_chars_table[the_index]) ?
      tri_chars_table[the_index][pos] : '&Omega;'
    }
    return result
  },
  select_text : function (the_hex_index) {
    var result = (the_hex_index > 0 && purports_outer[the_hex_index] ) ?
      {
        inner: purports_inner[the_hex_index],
        outer: purports_outer[the_hex_index]
      } : false
    return result
  },
  select_moving_lines : function (hex_index,lines_arr,side_arg) {
    var text_arr = []
    var current_table = (side_arg) ? moving_lines_inner : moving_lines_outer;
    var lines_arr = (!lines_arr.length) ? [-1] : lines_arr
    if (hex_index && current_table[hex_index]) {
      lines_arr.forEach( function (line) {
        if (current_table[hex_index][line+1]) {
          text_arr.push(current_table[hex_index][line+1])
        }
      })
    }
    return text_arr
  },
  get_inner_hex : function (number) {
    var bin_str = hex_bin_arr[number]
    var bin_arr = bin_str.split('')
    var indices = [1,2]
    var result_arrs = [[],[]]
    var result = null
    for (var i = 0; i < bin_arr.length/2; i++) {
      for (var ii = 0; ii < indices.length; ii++) {
        result_arrs[ii].push(bin_arr[indices[ii]])
        indices[ii]++
      }
    }
    result =  result_arrs[0].concat(result_arrs[1] ).join('')
    return hex_bin_arr.indexOf( result )
  },
  find_moving_lines : function (first_arr,next_arr) {
    var result = []
    for (var i = 0; i < first_arr.length; ii++) {
      if (first_arr[i]!=next_arr[i]) {
        result.push(i+1)
      }
    }
    return result
  },
  get_hex_index_from_trigrams : function (botton_trigram,top_trigram) {

  },
  get_trigrams_from_hex : function (the_hex_arr) {
    var result = {
      top: {names:'',chars:''},
      bottom: {names:'',chars:''}
    }
    var stage = {
      top: [],
      bottom: []
    }
    var string = ''
    var char_index = -1
    //
    for (var i = 0; i < the_hex_arr.length; i++) {
      if (i < 3) {
        string = 'bottom'
      } else {
        string = 'top'
      }
      stage[string].push(the_hex_arr[i])
    }
    ['bottom','top'].forEach( function (tri_arr) {
      for (var ii = 0; ii < 2; ii++) {
        //
        char_index = (ii) ? 0 : 1
        result[tri_arr].names +=
          tri_names_arr[ library.get_tri_index( stage[tri_arr] ) ][ii]
        result[tri_arr].chars +=
          tri_chars_arr[ library.get_tri_index( stage[tri_arr] ) ][char_index]
        //
        result[tri_arr].names += (ii) ? '' : ' | '
        result[tri_arr].chars += (ii) ? '' : ' | '
      }
    })
    return result
  }
}
