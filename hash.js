const crypto = require('crypto');
const { 
    isParameterAbsent, 
    checkDiffuculty, 
    checkBlockHash,
    isString,
    isNumber
} = require("./typeCheck/check");

//code to generate SHA 256 hash

const getSha256 = (
    block = isParameterAbsent("No String provide for hashing"), 
    nonce = "", 
    delimiter = ""
) => crypto
        .createHash('sha256')
        .update(`${block}${delimiter}${nonce}`)
        .digest('hex');

function getHash(blockHash, zeros, delimiter) {
    checkDiffuculty(zeros);
    checkBlockHash(blockHash);
    isString(blockHash);
    isString(delimiter);
    isNumber(zeros);
    const startingPattern = "0".repeat(zeros);
    if(blockHash.startsWith(startingPattern))
        return [blockHash, ''];// if the hash already meets the requirement then nonce will be "" .
    let nonce = 0;// 4 Byte number
    let newBlockHash = "";
    const MAX = Math.pow(2, 32);
    while(nonce < MAX) {
        newBlockHash = getSha256(blockHash, nonce.toString(), delimiter);
        if(newBlockHash.startsWith(startingPattern))
            return [newBlockHash, nonce];
        nonce++;
    }
    throw new Error("Couldn't find Hash!");
}

module.exports = { getHash, getSha256 };