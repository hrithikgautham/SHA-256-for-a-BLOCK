const { getHash: getBlockHashWithNonce, getSha256 } = require('./hash');

// const targetString = 'a';

const getHash = (blockHash, difficulty, delimiter) => {
    const [hash, nonce] = getBlockHashWithNonce(blockHash, difficulty, delimiter);// default delimiter is "".
    return {
        newString: `${blockHash}${delimiter}${nonce}`,
        newHash: hash,
        nonce
    };
};

module.exports = { getHash, getSha256 };