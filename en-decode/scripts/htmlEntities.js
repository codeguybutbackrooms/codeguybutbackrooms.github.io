(function () {
  window.htmlEntities = {
    encode: function (text) {
      return text.replace(/[\u00A0-\u9999<>&"'"]/gim, function (c) {
        return '&#' + c.charCodeAt(0) + ';';
      });
    },

    decode: function (text) {
      return text.replace(/&#(\d+);/g, function (_, code) {
        return String.fromCharCode(code);
      });
    }
  };
})();
