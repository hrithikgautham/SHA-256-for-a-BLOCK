# SHA-256-for-a-BLOCK
## Aim is to generate SHA-256 hash for a block in blockchain with NONCE.
## It generates the appropriate hash according to the network dificulty

# HOW TO USE?

### const pow = require("block-pow");

## After importing make sure that you pass ** block hash ** and ** nonce **.

### const { newHash, nonce } = pow.getHash(blockHash, difficulty);

# For more information visit [github repo](https://github.com/hrithikgautham/SHA-256-for-a-BLOCK)
