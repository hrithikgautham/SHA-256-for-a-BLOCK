const { getHash, getHash256 } = require('./hash');

let result = getHash('a', 5);
if(result !== ''){
    const [hash, nonce] = result;
    console.log(`HASH: ${hash}, NONCE: ${nonce}`);
}
else
    console.log('FAILED');