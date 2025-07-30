(function () {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
  const padding = "=";

  function encode(input) {
    let output = "";
    let buffer = 0;
    let bitsLeft = 0;

    for (let i = 0; i < input.length; i++) {
      buffer = (buffer << 8) | input.charCodeAt(i);
      bitsLeft += 8;

      while (bitsLeft >= 5) {
        output += alphabet[(buffer >>> (bitsLeft - 5)) & 31];
        bitsLeft -= 5;
      }
    }

    if (bitsLeft > 0) {
      output += alphabet[(buffer << (5 - bitsLeft)) & 31];
    }

    while (output.length % 8 !== 0) {
      output += padding;
    }

    return output;
  }

  function decode(input) {
    input = input.replace(/=+$/, '');
    let buffer = 0;
    let bitsLeft = 0;
    let output = "";

    for (let i = 0; i < input.le
