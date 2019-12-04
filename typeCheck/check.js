function isParameterAbsent(msg) {
    throw new Error(msg);
}

function checkDiffuculty(zeros, hashAlgo) {
    return new Promise((resolve, reject) => {
        if(
            zeros >= 64 && hashAlgo === 'sha256' || 
            zeros >= 128 && hashAlgo === 'sha512' ||
            zeros >= 40 && hashAlgo === 'sha1'
        )// check if zeros doesn't exceed 63 or 127
            reject(new Error("difficulty is off the charts!"));
        if(Math.floor(zeros) !== zeros)// check if it is a integer
            reject(new Error("Difficulty must be an 'Integer'."));
        resolve();
    });
}

function checkBlockHash(blockHash, hashAlgo) {
    return new Promise((resolve, reject) => {
        if(
            blockHash.length !== 64 && hashAlgo === 'sha256' || 
            blockHash.length !== 128 && hashAlgo === 'sha512' ||
            blockHash.length !== 40 && hashAlgo === 'sha1'
        )// check if the hash is 256 bits
            reject(new Error(`Block hash should be a valid hash in HEX format`));
        if(!blockHash.match(/^[0-9a-f]*$/gi))// check if hash has valid characters
            reject(new Error("Block Hash has invalid characters."));
        resolve();
    });
}

function isString(inputString) {
    return new Promise((resolve, reject) => {
        if(typeof inputString !== 'string')// check if it is a string
            reject(new Error("Not a String!"));
        resolve();
    });
}

function isNumber(inputNumber) {
    return new Promise((resolve,reject) => {
        if(typeof inputNumber !== 'number')// check if it is a string
            reject(new Error("Not a Number!"));
        resolve();
    });
}

module.exports = { isParameterAbsent, checkDiffuculty, checkBlockHash, isString, isNumber };