const crypto = require('crypto');
const { 
    isParameterAbsent, 
    checkDiffuculty, 
    checkBlockHash,
    isString,
    isNumber
} = require("./typeCheck/check");

//code to generate SHA 256 hash

const getSha = (
    block = isParameterAbsent("No String provide for hashing"), 
    nonce = "", 
    delimiter = "",
    hashAlgo = 'sha1'
) => (
    new Promise((resolve, reject) => {
        const data = crypto
        .createHash(hashAlgo)
        .update(`${block}${delimiter}${nonce}`)
        .digest('hex');
        resolve(data);
    })
)

async function getHash(blockHash, zeros, delimiter, hashAlgo) {
    try {
        await isString(blockHash);
        await isString(delimiter);
        await isNumber(zeros);
        const availableHashingAlgorithms = ['sha256', 'sha512', 'sha1'];
        if(!availableHashingAlgorithms.includes(hashAlgo))
            throw new Error(`${hashAlgo} hash algorithm not provided!`);
        await checkDiffuculty(zeros, hashAlgo);
        await checkBlockHash(blockHash, hashAlgo);
        const startingPattern = "0".repeat(zeros);
        if(blockHash.startsWith(startingPattern))
            return [blockHash, ''];// if the hash already meets the requirement then nonce will be "" .
        let nonce = 0;// 4 Byte number
        let newBlockHash = "";
        const MAX = Math.pow(2, 32);
        while(nonce < MAX) {
            newBlockHash = await getSha(blockHash, nonce.toString(), delimiter, hashAlgo);
            if(newBlockHash.startsWith(startingPattern))
                return [newBlockHash, nonce];
            nonce++;
        }
        throw new Error("Couldn't find Hash!");
    }
    catch(err) {
        console.error("Error: error in getHash(); err: ", err);
    }
}

module.exports = { getHash, getSha };