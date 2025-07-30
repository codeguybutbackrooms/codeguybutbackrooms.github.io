// Using Crockford's Base32
const base32 = {
  encode: (txt) => btoa(txt).replace(/=/g, ''),
  decode: (txt) => atob(txt)
};
