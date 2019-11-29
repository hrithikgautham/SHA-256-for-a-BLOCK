# A simple module to generate proof-of-work.

### Aim is to generate SHA-256 hash for a block in blockchain with NONCE.

### It generates the appropriate hash according to the network difficulty.

# HOW TO USE?

## `const { getHash, getSha256 } = require("block-pow");`
## `const hash = getSha256(inputString, nonce, delimiter)`
## `/*` 
## `the above code generates SHA-256 hash for any string.To find the hash of "inputString", use "nonce"="" and "delimiter"="" or we could just use "getSha256(inputString)"`
## `*/`
## `const { newString, newHash, nonce } = getHash(blockHash, difficulty, delimiter);`
## `/* The applicability of "getHash()" is explained below. */`

## ***IMPORTANT*** : After importing make sure that you pass **block hash**, **difficulty level** and **delimiter**.

# INPUT PARAMS of getHash(): 
## **blockHash** (string) => This is the hash of the block(element of block chain) before adding **NONCE**.

## **difficulty** (integer) => This is the network difficulty set by the blockchain network(explained in detail below).

## **delimiter** (string) => This is used when the **NONCE** appended to the **blockHash** for finding the appropriate hash based on the **difficulty**.

# OUTPUT VARAIBLES of getHash():
## **newString** (string): **blockHash** concatenated with **delimiter** and **nonce**.
## **newHash** (string): **SHA-256** hash of **newString**.
## **nonce** (number): Random integer when appended with **blockHash** along with **delimiter** gives appropriate hash.

# Example: 

### * Let's say that the network difficulty is < **65536** (2^16).
### * Since, **SHA-256** hash is **256 bits** long (**32 bytes or 64 HexaDecimal characters**);
### * Based on the network difficulty, which is < 65536(2^16), the first **30 bytes** of the hash should start with **zeros**.i,e; first **60 HexaDecimal** characters should be zeros. 

## ***NOTE***: The above example is used just for the sake of understanding. Hash required for the above mentioned **difficulty** is impractical.

## Example code for above example: 
### * Let's say the **blockHash** is ***6b88c087247aa2f07ee1c5956b8e1a9f4c7f892a70e324f1bb3d161e05ca107b*** (SHa-256 hash for the string **"bitcoin"**).
## ***NOTE***: the above hash can be generated using **crypto** module of **Node JS**. Or it can also be generated using ***getSha256(string, nonce, delimiter)***.
### * given network difficulty is **60** (meaning the first 60 characters of the hash should start with **zero**).
## * For simplicity, we can use the **delimiter** as **"."** .
## `// first import the module`
## `const { getHash } = require('block-pow);`
## `const { newString, newHash, nonce } = getHash("6b88c087247aa2f07ee1c5956b8e1a9f4c7f892a70e324f1bb3d161e05ca107b", 60, ".");`
## `/* `
## `` "newString" has "blockHash" appended with "delimiter" and "nonce".i,e; inputString = `${blockHash}${delimiter}${nonce}`.``
## ` */ `
## `/* `
## ` the new hash after the computation will be stored in "newHash" variable. i,e; SHA-256 hash of "inputString" will be stored in "newHash" variable.`
## ` */ `
## `// the "NONCE" required to generate the "newHash" will be stored in "nonce" varaible`.

# ***THANK YOU!***

# For more information visit [github repo](https://github.com/hrithikgautham/SHA-256-for-a-BLOCK)
