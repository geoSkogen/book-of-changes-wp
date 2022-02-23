'use strict'

var wheel = document.querySelector('#wheel-outer')
var graph = document.querySelector('#wheel-inner')
var regraph = document.querySelector('#second-hex')

var hex_builder = {
  this_hex : [],
  next_hex : [],
  moving_lines : [],
  throw_line : function () {
    var val = Math.random()
    if (this.this_hex.length!=6) {
      if (val >= 0 && val < 0.25) {

        this.this_hex.push(0)

      } else if (val >= 0.25 && val < 0.5) {

        this.this_hex.push(1)

      } else if (val >= 0.5 && val < 0.75) {

        this.this_hex.push(0)
        this.moving_lines.push(this.this_hex.length-1)

      } else if (val >= 0.75 && val <= 1 ){

        this.this_hex.push(1)
        this.moving_lines.push(this.this_hex.length-1)

      } else {
        console.log('math randomization error')
      }
    }
    this.next_hex = []
    this.this_hex.forEach(function (this_line) { hex_builder.next_hex.push(this_line) })
    this.moving_lines.forEach( function (moving_line) {
      hex_builder.next_hex[moving_line] = (hex_builder.next_hex[moving_line] === 1) ? 0 : 1
    })
    console.log(val)
    console.log(this.this_hex)
    console.log(this.next_hex)
    console.log(this.moving_lines)
  },
  print_hex : function () {
    var routines = ['yin_line','yang_line']
    var hex_shells = [graph,regraph]
    var hex_data = [this.this_hex, this.next_hex]

    for (var i = 0; i < hex_data.length; i++) {

      var parent = hex_shells[i]
      parent.innerHTML = ''

      for (var ii = hex_data[i].length-1; ii > -1 ; ii-- ) {

        parent.appendChild( line_builder[ routines[ hex_data[i][ii] ] ](true) )

      }
    }
  }

}

var line_builder = {
  yang_line :  function (arg) {
    var line = document.createElement('div')
    var wrapper = document.createElement('div')
    wrapper.className = "flex-row flex-center line-frame"
    line.className = "full-line"
    if (!arg) {
      line.style.backgroundColor = 'black'
    }
    wrapper.appendChild(line)
    return wrapper
  },
  yin_line : function (arg) {
    var line_1 = document.createElement('div')
    var line_2 = document.createElement('div')
    var wrapper = document.createElement('div')
    var subwrapper = document.createElement('div')
    wrapper.className = "flex-row flex-center line-frame"
    subwrapper.className = "half-line-frame flex-row flex-between"
    line_1.className = "half-line"
    line_2.className = "half-line"
    subwrapper.appendChild(line_1)
    subwrapper.appendChild(line_2)
    wrapper.appendChild(subwrapper)
    return wrapper
  },
  half_line : function (arg) {
    var justify = (arg) ?  'flex-start' : 'flex-end'
    var line = document.createElement('div')
    var wrapper = document.createElement('div')
    var subwrapper = document.createElement('div')
    subwrapper.className = "half-line-frame flex-row"
    wrapper.className = "flex-row flex-center line-frame"
    line.className = "half-line"
    subwrapper.style.justifyContent = justify
    subwrapper.appendChild(line)
    wrapper.appendChild(subwrapper)
    return wrapper
  },
  null_line : function () {
    var line = this.yang_line(false)
    return line
  },
  manifest_line : function () {
    var line = {}
    var funcs = ['yang_line','yin_line','half_line','half_line','yang_line']
    var index = Math.floor(Math.random() * 4)
    var arg = (Math.floor(Math.random() * 2) > 1) ? true : false;
    var trans = Math.random()
    arg = (!index||index===4) ? true : arg
    line = this[funcs[index]](arg)
    //console.log('line testpattern')
    //console.log(funcs[index])
    //console.log(arg)
    trans = (trans >= 0.9) ? trans-0.1 : trans
    line.style.opacity = trans
    return line
  },
  test_pattern : function () {
    var indices = []
    var re_indices = []

    for (var i = 0; i < 3; i++) {
      var int = Math.floor(Math.random()*6)
      indices.push(int)
    }

    if (hex_builder.next_hex.length) {
      for (var j = 0; j < 3; j++) {
        var re_int = Math.floor(Math.random()*6)
        re_indices.push(int)
      }
    }
    // console.log('index_ints')
    // console.log(indices)
    graph.innerHTML = ''
    regraph.innerHTML = ''

    for (var ii = 0; ii < 6; ii++) {
      var dom_obj = (indices.indexOf(ii)>-1) ?
        this.manifest_line() : this.null_line()
      graph.appendChild(dom_obj)
      if (hex_builder.next_hex.length) {
        var re_dom_obj = (re_indices.indexOf(ii)>-1) ?
          this.manifest_line() : this.null_line()
        regraph.appendChild(re_dom_obj)
      } // end next hex cond
    } // end find three of six loop
  } // end testpattern
}

wheel.addEventListener('click', function (event) {
  if (event.target.id.indexOf('outer-v')>-1) {
    hex_builder.throw_line()
    var n = 129
    var dir = true
    //var value = graph.innerHTML
    var flash = setInterval( function () {
        n = flash_greys(n)
        line_builder.test_pattern()
        if (!dir) {
          if (n > 128) { n-- } else {
            clearInterval(flash)
            hex_builder.print_hex()
            if (hex_builder.this_hex.length===6) {
              print_hex_headers()
              if (hex_builder.moving_lines.length) {
                print_moving_icon()
              }
            }
          }
        } else {
          n++
          if (n > 211) { dir = false }
        }
        //console.log(n)

      },
      20
    )
    console.log(event.target.id)
  }
  event.stopPropagation()
})

function flash_greys(n) {
  wheel.style.backgroundColor = 'rgb(' + n + ',' + n + ',' + n + ')'
  return n
}

function get_hex_name(bin_arr) {
  var index = library.get_hex_index(bin_arr)
  var names = library.select_names(index)
  return names
}

function print_hex_headers() {
  var hexname_els = document.querySelectorAll('.hex-name')
  var hex_arrs = [hex_builder.this_hex, hex_builder.next_hex]
  var name_str = ''
  for (var i = 0; i < hexname_els.length; i++) {
    name_str = (!i || hex_builder.moving_lines.length) ? get_hex_name(hex_arrs[i]) : ''
    name_str = (name_str) ? name_str.replace(/\s\|\s/g,'<br/>') : ''
    hexname_els[i].innerHTML = (name_str) ? name_str : hexname_els[i].innerHTML
  }
}

function print_moving_icon() {
  var icon = document.querySelector('#hex-mover')
  icon.style.display= 'block'
}
