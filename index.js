const { getHash: getBlockHashWithNonce, getSha256 } = require('./hash');
const { isParameterAbsent } = require("./typeCheck/check");

// const targetString = 'a';

const getHash = async (
    blockHash = isParameterAbsent("block hash needed!"), 
    difficulty = isParameterAbsent("difficulty needed!"), 
    delimiter = ""
) => {
    const [hash, nonce] = await getBlockHashWithNonce(blockHash, difficulty, delimiter);// default delimiter is "".
    return {
        newString: `${blockHash}${delimiter}${nonce}`,
        newHash: hash,
        nonce
    };
};

module.exports = { getHash, getSha256 };