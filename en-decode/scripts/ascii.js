(function () {
  window.ascii = {
    // Convert text to Binary, Hex, Octal
    asciiToBin: txt => txt.split('').map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' '),
    asciiToHex: txt => txt.split('').map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join(' '),
    asciiToOct: txt => txt.split('').map(c => c.charCodeAt(0).toString(8).padStart(3, '0')).join(' '),

    // Convert Binary/Hex/Octal back to ASCII
    binToAscii: bin => bin.trim().split(/\s+/).map(b => String.fromCharCode(parseInt(b, 2))).join(''),
    hexToAscii: hex => hex.trim().split(/\s+/).map(h => String.fromCharCode(parseInt(h, 16))).join(''),
    octToAscii: oct => oct.trim().split(/\s+/).map(o => String.fromCharCode(parseInt(o, 8))).join(''),

    // Encode all formats at once
    toAll: txt => {
      return `Binary:\n${ascii.asciiToBin(txt)}\n\nHex:\n${ascii.asciiToHex(txt)}\n\nOctal:\n${ascii.asciiToOct(txt)}`;
    },

    // Auto-detect format and decode
    fromAll: input => {
      const cleaned = input.trim();
      const parts = cleaned.split(/\s+/);

      if (parts.every(p => /^[01]+$/.test(p))) {
        return ascii.binToAscii(cleaned);
      } else if (parts.every(p => /^[0-7]+$/.test(p))) {
        return ascii.octToAscii(cleaned);
      } else if (parts.every(p => /^[0-9a-fA-F]+$/.test(p))) {
        return ascii.hexToAscii(cleaned);
      } else {
        return "[Unrecognized ASCII format]";
      }
    }
  };
})();
