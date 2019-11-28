const { getHash: getBlockHashWithNonce, getSha256 } = require('./hash');

// const targetString = 'a';

const getHash = (blockHash, difficulty, delimiter) => {
    const [hash, nonce] = getBlockHashWithNonce(blockHash, difficulty, delimiter);
    return {
        newHash: hash,
        nonce
    };
};

module.exports = { getHash, getSha256 };