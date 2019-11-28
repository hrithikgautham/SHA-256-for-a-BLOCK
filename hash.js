const crypto = require('crypto');

//code to generate SHA 256 hash

const getSha256 = (block, nonce, delimiter) => crypto.createHash('sha256').update(`${block}${delimiter}${nonce}`).digest('hex');

function checkRequiredZeroes(hash, zeros) {
    let i = 0;
    while(i < zeros)
        if(hash[i++] != '0')
            return false;
    return true;
}

function getHash(blockHash, zeros, delimiter) {
    if(zeros >= 64)
        return new Error("difficulty is off the charts!");
    if(blockHash.length != 64)
        return new Error("Block hash should be a valid SHA-256 hash");
    if(checkRequiredZeroes(blockHash, zeros))
        return [blockHash, ''];
    let nonce = 0;// 4 Byte number
    let newBlockHash = "";
    while(nonce < Math.pow(2, 32)) {
        newBlockHash = getSha256(blockHash, nonce.toString(), delimiter);
        if(checkRequiredZeroes(newBlockHash, zeros))
            return [newBlockHash, nonce.toString()];
        nonce++;
    }
    return new Error("Couldn't find Hash!");
}

module.exports = { getHash, getSha256 };