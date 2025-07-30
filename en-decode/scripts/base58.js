(function () {
  const alphabet = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  const base = BigInt(alphabet.length);

  function encode(input) {
    let bytes = new TextEncoder().encode(input);
    let num = BigInt(0);
    for (let byte of bytes) {
      num = (num << BigInt(8)) + BigInt(byte);
    }

    let encoded = "";
    while (num > 0) {
      const mod = num % base;
      encoded = alphabet[Number(mod)] + encoded;
      num = num / base;
    }

    // Handle leading zeros (0x00 bytes)
    for (let byte of bytes) {
      if (byte === 0) encoded = alphabet[0] + encoded;
      else break;
    }

    return encoded;
  }

  function decode(input) {
    let num = BigInt(0);
    for (let char of input) {
      const index = alphabet.indexOf(char);
      if (index === -1) throw new Error(`Invalid character '${char}' in Base58 string.`);
      num = num * base + BigInt(index);
    }

    let bytes = [];
    while (num > 0) {
      bytes.unshift(Number(num % BigInt(256)));
      num = num / BigInt(256);
    }

    // Handle leading Base58 zeros
    for (let char of input) {
      if (char === alphabet[0]) bytes.unshift(0);
      else break;
    }

    return new TextDecoder().decode(new Uint8Array(bytes));
  }

  window.base58 = { encode, decode };
})();
