const $ = require('jquery')
module.exports = function () {
  setTimeout(function () {
    $('.embeds-instagram').each(function () {
      var _self = $(this)
      var oembedUrl = 'https://api.instagram.com/oembed?url=' + _self.data('embed-id')
      $.ajax({
        url: oembedUrl,
        dataType: 'jsonp',
        success: function (data) {
          _self.html(data.html)
        },
        error: function (result) {
          console.log('Instagram oembed error!')
        }
      })
    })
  }, 800)
}