const CryptoJS = require('crypto-js')

// hash
console.log("Hello world!");

var wachtwoord = "aacBBB";
var gestolenHash = CryptoJS.SHA256(wachtwoord).toString(CryptoJS.enc.Hex);

console.log (gestolenHash)