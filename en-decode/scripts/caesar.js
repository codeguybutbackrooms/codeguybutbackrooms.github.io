(function () {
  window.caesar = {
    encode: function (text, shift = 3) {
      return text.replace(/[a-zA-Z]/g, function (c) {
        const base = c <= 'Z' ? 65 : 97;
        return String.fromCharCode(((c.charCodeAt(0) - base + shift) % 26) + base);
      });
    },

    decode: function (text, shift = 3) {
      return caesar.encode(text, 26 - (shift % 26));
    }
  };
})();
