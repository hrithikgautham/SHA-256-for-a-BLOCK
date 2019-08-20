const crypto = require('crypto');

//code to generate SHA 256 hash

const getSha256 = (block, nonce) => crypto.createHash('sha256').update(`${block}${nonce}`).digest('hex');

function checkRequiredZeroes(hash, zeros) {
    let i = 0;
    while(i < zeros){
        if(hash[i] != '0')
            return false;
        i++;
    }
    return true;
}

function getHash(block, zeros) {
    let result;
    result = getSha256(block, '');
    if(checkRequiredZeroes(result, zeros))
        return [result, ''];
    let nonce = 0;// 4 Byte number
    while(true) {
        result = getSha256(block, nonce.toString());
        if(checkRequiredZeroes(result, zeros))
            return [result, nonce.toString()];
        nonce++;
    }
}

module.exports = { getHash, getSha256 };