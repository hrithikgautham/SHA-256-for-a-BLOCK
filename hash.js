const crypto = require('crypto');
const { 
    isParameterAbsent, 
    checkDiffuculty, 
    checkBlockHash,
    isString
} = require("./typeCheck/check");

//code to generate SHA 256 hash

const getSha256 = (block = isParameterAbsent("No String provide for hashing"), nonce = "", delimiter = "") => crypto.createHash('sha256').update(`${block}${delimiter}${nonce}`).digest('hex');

function checkRequiredZeroes(hash, zeros) {
    let i = 0;
    while(i < zeros)
        if(hash[i++] != '0')
            return false;
    return true;
}

function getHash(blockHash = isParameterAbsent("Block Hash is not provided!"), zeros = isParameterAbsent("Network difficulty is not provided"), delimiter = "") {
    checkDiffuculty(zeros);
    checkBlockHash(blockHash);
    isString(blockHash);
    isString(delimiter);
    if(checkRequiredZeroes(blockHash, zeros))
        return [blockHash, ''];// if the hash already meets the requirement then nonce will be "" .
    let nonce = 0;// 4 Byte number
    let newBlockHash = "";
    const MAX = Math.pow(2, 32);
    while(nonce < MAX) {
        newBlockHash = getSha256(blockHash, nonce.toString(), delimiter);
        if(checkRequiredZeroes(newBlockHash, zeros))
            return [newBlockHash, nonce];
        nonce++;
    }
    throw new Error("Couldn't find Hash!");
}

module.exports = { getHash, getSha256 };