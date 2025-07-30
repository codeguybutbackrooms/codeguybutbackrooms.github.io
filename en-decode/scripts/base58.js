// Minimal Base58 (Bitcoin alphabet)
const ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

const base58 = {
  encode: (txt) => {
    let num = BigInt('0x' + Array.from(txt).map(c => c.charCodeAt(0).toString(16)).join(''));
    let encoded = '';
    while (num > 0) {
      const mod = num % 58n;
      encoded = ALPHABET[Number(mod)] + encoded;
      num = num / 58n;
    }
    return encoded;
  },
  decode: (txt) => {
    let num = 0n;
    for (let c of txt) {
      num = num * 58n + BigInt(ALPHABET.indexOf(c));
    }
    let hex = num.toString(16);
    if (hex.length % 2) hex = '0' + hex;
    return decodeURIComponent('%' + hex.match(/.{1,2}/g).join('%'));
  }
};
