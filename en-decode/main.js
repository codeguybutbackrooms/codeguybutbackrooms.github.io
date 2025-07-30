function runEncode() {
  const text = document.getElementById('inputText').value;
  const method = document.getElementById('method').value;
  let result = '';

  switch (method) {
    case 'base64': result = base64.encode(text); break;
    case 'base32': result = base32.encode(text); break;
    case 'base58': result = base58.encode(text); break;
    case 'base91': result = base91.encode(text); break;
    case 'rot13': result = rot13.encode(text); break;
    case 'caesar': result = caesar.encode(text); break;
    case 'htmlEntities': result = htmlEntities.encode(text); break;
    case 'url': result = urlCodec.encode(text); break;
    case 'ascii': result = ascii.toAll(text); break;
  }

  document.getElementById('outputText').value = result;
}

function runDecode() {
  const text = document.getElementById('inputText').value;
  const method = document.getElementById('method').value;
  let result = '';

  switch (method) {
    case 'base64': result = base64.decode(text); break;
    case 'base32': result = base32.decode(text); break;
    case 'base58': result = base58.decode(text); break;
    case 'base91': result = base91.decode(text); break;
    case 'rot13': result = rot13.encode(text); break;
    case 'caesar': result = caesar.decode(text); break;
    case 'htmlEntities': result = htmlEntities.decode(text); break;
    case 'url': result = urlCodec.decode(text); break;
    case 'ascii': result = ascii.fromAll(text); break;
  }

  document.getElementById('outputText').value = result;
}
