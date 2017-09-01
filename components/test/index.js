'use strict'

const $ = require('jquery')

module.exports = function () {
  $(document).ready(function () {
    var btn = document.getElementById('bauer-web-component-test-btn')
    if (typeof btn === 'object' && btn !== null) {
      btn.addEventListener('click', function () {
        if (btn.style.backgroundColor === 'red') {
          btn.style.backgroundColor = 'white  '
        } else {
          btn.style.backgroundColor = 'red'
        }
      })
    }
  })
}
