const { 
    getBlockHashUtil, 
    getHash,
    isParameterAbsent,
    isString,
    isNumber
} = require('./hash');

// const targetString = 'a';

const getBlockHash = async (
    blockHash = isParameterAbsent("block hash needed!"), 
    difficulty = isParameterAbsent("difficulty needed!"), 
    delimiter = "",
    hashAlgo = isParameterAbsent('didnt specify hash algorithm')
) => {
    const [hash, nonce] = await getBlockHashUtil(blockHash, difficulty, delimiter, hashAlgo);// default delimiter is "".
    return {
        newString: `${blockHash}${delimiter}${nonce}`,
        newHash: hash,
        nonce
    };
};

module.exports = { 
    getHash,
    getBlockHash,
    isParameterAbsent,
    isString,
    isNumber
};