const { getHash } = require('./hash');

function resolve(targetString, noOfZeros) {
    let result = getHash(targetString, noOfZeros);
    return result !== null ? result : null;
}

module.exports = resolve;