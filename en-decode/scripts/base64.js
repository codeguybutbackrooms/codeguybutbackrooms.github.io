(function () {
  window.base64 = {
    encode: function (text) {
      // Unicode-safe Base64 encoding
      const utf8 = new TextEncoder().encode(text);
      let binary = '';
      utf8.forEach(byte => binary += String.fromCharCode(byte));
      return btoa(binary);
    },

    decode: function (b64text) {
      // Base64 to Unicode-safe string
      const binary = atob(b64text);
      const bytes = Uint8Array.from(binary, c => c.charCodeAt(0));
      return new TextDecoder().decode(bytes);
    }
  };
})();
