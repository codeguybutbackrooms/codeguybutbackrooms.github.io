(function () {
  window.urlCodec = {
    encode: function (text) {
      return encodeURIComponent(text);
    },

    decode: function (text) {
      return decodeURIComponent(text);
    }
  };
})();
