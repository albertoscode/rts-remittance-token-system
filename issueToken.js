const RippleAPI = require('ripple-lib').RippleAPI;
const fs = require('fs');

// Read the credentials from a json file.
// This is a safer practice than hardcoding credentials in the code.
let rawdata = fs.readFileSync('credentials.json');
let credentials = JSON.parse(rawdata);

// Connect to the test network - replace this with your own server for production
const api = new RippleAPI({
  server: 'wss://s.altnet.rippletest.net:51233' // Test Net
});

// Get credentials from file
const issuerAddress = credentials.issuerAddress;
const issuerSecret = credentials.issuerSecret;
const destinationAddress = credentials.destinationAddress;

// Specify the token details
const currency = 'RT';
const value = '1000000'; // Amount of RT tokens to issue

api.connect().then(() => {
  console.log('Connected');

  const transaction = {
    "TransactionType" : "Payment",
    "Account" : issuerAddress,
    "Destination" : destinationAddress,
    "Amount" : {
      "value" : value,
      "currency" : currency,
      "issuer" : issuerAddress
    }
  };

  return api.prepareTransaction(transaction);

}).then(prepared => {
  console.log('Transaction prepared...');
  const {signedTransaction} = api.sign(prepared.txJSON, issuerSecret);
  console.log('Transaction signed...');
  return api.submit(signedTransaction);
  
}).then(result => {
  console.log('Transaction submitted...');
  if (result.resultCode !== 'tesSUCCESS') {
    console.error('Transaction failed:', result);
    process.exit(1);
  }
  console.log(result);
  console.log('Waiting for validation...');
  return api.getTransaction(result.tx_json.hash, {includeRawTransaction: false});

}).then(txResult => {
  console.log('Transaction result:', txResult.outcome.result);
  console.log('Balance changes:', JSON.stringify(txResult.outcome.balanceChanges));
  return api.disconnect();
  
}).then(() => {
  console.log('api disconnected');
  process.exit();

}).catch(console.error);
