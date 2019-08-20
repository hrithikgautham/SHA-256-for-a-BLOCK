const { getHash } = require('./hash');

const targetString = 'a';
let result = getHash(targetString, 5);
if(result !== ''){
    const [hash, nonce] = result;
    console.log(`HASH: ${hash}, NONCE: ${nonce}`);
}
else
    console.log('FAILED');