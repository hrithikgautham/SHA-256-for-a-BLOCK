function isParameterAbsent(msg) {
    throw new Error(msg);
}

function checkDiffuculty(zeros) {
    if(zeros >= 64)// check if zeros doesn't exceed 63
        throw new Error("difficulty is off the charts!");
    if(typeof zeros !== 'number')// check if it a number
        throw new Error("Difficulty must be of type 'Number'.");
    if(Math.floor(zeros) !== zeros)// check if it is a integer
        throw new Error("Difficulty must be an 'Integer'.");
    return;
}

function checkBlockHash(blockHash) {
    if(blockHash.length !== 64)// check if the hash is 256 bits
        throw new Error("Block hash should be a valid SHA-256 hash in HEX format");
    if(!blockHash.match(/^[0-9a-f]*$/gi))// check if hash has valid characters
        throw new Error("Block Hash has invalid characters.");
    return;
}

function isString(inputString) {
    if(typeof inputString !== 'string')// check if it is a string
        throw new Error("blockhash and delimiter must be of type 'String'.");
}

module.exports = { isParameterAbsent, checkDiffuculty, checkBlockHash, isString };