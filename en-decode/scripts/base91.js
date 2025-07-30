// Based on Joachim Henke's Base91 encoding
// https://base91.sourceforge.net/

(function () {
  const ENCODING_TABLE = (
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" +
    "0123456789" +
    "!#$%&()*+,./:;<=>?@[]^_`{|}~\""
  ).split("");

  const DECODING_TABLE = {};
  ENCODING_TABLE.forEach((ch, i) => (DECODING_TABLE[ch] = i));

  window.base91 = {
    encode(input) {
      let b = 0, n = 0, output = "";
      for (let i = 0; i < input.length; ++i) {
        b |= input.charCodeAt(i) << n;
        n += 8;
        if (n > 13) {
          let v = b & 8191;
          if (v > 88) {
            b >>= 13;
            n -= 13;
          } else {
            v = b & 16383;
            b >>= 14;
            n -= 14;
          }
          output += ENCODING_TABLE[v % 91] + ENCODING_TABLE[Math.floor(v / 91)];
        }
      }
      if (n) {
        output += ENCODING_TABLE[b % 91];
        if (n > 7 || b > 90) {
          output += ENCODING_TABLE[Math.floor(b / 91)];
        }
      }
      return output;
    },

    decode(input) {
      let v = -1, b = 0, n = 0, output = "";
      for (let i = 0; i < input.length; ++i) {
        const c = input[i];
        if (!(c in DECODING_TABLE)) continue;
        if (v < 0) {
          v = DECODING_TABLE[c];
        } else {
          v += DECODING_TABLE[c] * 91;
          b |= v << n;
          n += (v & 8191) > 88 ? 13 : 14;
          while (n >= 8) {
            output += String.fromCharCode(b & 255);
            b >>= 8;
            n -= 8;
          }
          v = -1;
        }
      }
      if (v >= 0) {
        b |= v << n;
        n += (v & 8191) > 88 ? 13 : 14;
        while (n >= 8) {
          output += String.fromCharCode(b & 255);
          b >>= 8;
          n -= 8;
        }
      }
      return output;
    }
  };
})();
