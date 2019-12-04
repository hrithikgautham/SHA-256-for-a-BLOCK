
# **block-pow** (now with Promises)<br><br>

## A simple module to generate proof-of-work.

#### Aim is to generate Asynchronous SHA-256/SHA-512 hash for a block in blockchain with NONCE.

#### It generates the appropriate hash according to the network difficulty.<br><br><br>

## HOW TO USE?<br><hr>

<code>
const { getBlockHash, getHash } = require("block-pow");<br><br>
// to find SHA-256/SHA-512 hash
<blockquote>
getHash(inputString, nonce, delimiter)<br>.then(console.log)<br>.catch(console.error);
</blockquote>

/*<br>
the above code generates SHA-256/SHA-512 hash for any string. To<br> find the hash of "inputString", use "nonce"="" and "delimiter"="" or<br> we could just use "getHash(inputString)"<br>
*/<br><br>
// to find hash of a block with appropriate nonce
<blockquote>
getBlockHash(blockHash, difficulty, delimiter)<br>.then(({ newString, newHash, nonce }) => console.log(newHash))<br>.catch(console.error);</blockquote>
/ * The applicability of "getBlockHash()" is explained below. */</code><br><br><br>

### ***IMPORTANT*** : After importing make sure that you pass **block hash**, **difficulty level** and **delimiter**.<br><br><br>

## INPUT PARAMS of getBlockHash(): <hr>
### **blockHash** (string) => This is the hash of the block(element of block chain) before adding **NONCE**.<br><br>

### **difficulty** (integer) => This is the network difficulty set by the blockchain network(explained in detail below).<br><br>

### **delimiter** (string) => This is used when the **NONCE** appended to the **blockHash** for finding the appropriate hash based on the **difficulty**.<br><br><br>

## OUTPUT VARAIBLES of getBlockHash():<hr>
### **newString** (string): **blockHash** concatenated with **delimiter** and **nonce**.<br><br>
### **newHash** (string): **SHA-256/SHA-512** hash of **newString**.<br><br>
### **nonce** (number): Random integer when appended with **blockHash** along with **delimiter** gives appropriate hash.<br><br><br>
  
## Example: <hr>

### * Let's say that the network difficulty is < **65536** (2^16).<br><br>
### * Since, **SHA-256/SHA-512** hash is **256 bits** long (**32 bytes or 64 HexaDecimal characters**);<br><br>
### * Based on the network difficulty, which is < 65536(2^16), the first **30 bytes** of the hash should start with **zeros**.i,e; first **60 HexaDecimal** characters should be zeros. <br><br><br>

### ***NOTE***: The above example is used just for the sake of understanding. Hash required for the above mentioned **difficulty** is impractical.<br><br><br>

## Example code for above example: <hr>
### * Let's say the **blockHash** is ***6b88c087247aa2f07ee1c5956b8e1a9f4c7f892a70e324f1bb3d161e05ca107b*** (SHA-256/SHA-512 hash for the string **"bitcoin"**).<br><br>
### ***NOTE***: the above hash can be generated using **crypto** module of **Node JS**. Or it can also be generated using ***getHash(string, nonce, delimiter)***.<br><br>
### * given network difficulty is **60** (meaning the first 60 characters of the hash should start with **zero**).
### * For simplicity, we can use the **delimiter** as **"."** .<br><br>
<code>
// first import the module<br>
const { getBlockHash } = require('block-pow');<br><br>
// here calculate() is a user defined function.<br>
<blockquote>async function calculate(blockHash, difficulty, delimiter) {<br><br>
// getBlockHash() returns a promise<br>
const { newString, newHash, nonce } = await getBlockHash(blockHash, difficulty, delimiter);<br><br>
console.log("new string:", newString, "new Hash: ", newHash, "nonce: ", nonce);<br><br>
}</blockquote><br>
<blockquote>calculate("6b88c087247aa2f07ee1c5956b8e1a9f4c7f892a70e324f1bb3d161e05ca107b", 60, ".");</blockquote><br>
/* <br>
 "newString" has "blockHash" appended with "delimiter"<br> and "nonce".i,e; inputString = `${blockHash}${delimiter}${nonce}`.<br>
*/<br>
/*<br>
the new hash after the computation will be stored in<br> "newHash" variable. i,e; SHA-256/SHA-512 hash of "inputString" will be stored in "newHash" variable.<br>
 */ <br>
// the "NONCE" required to generate the "newHash" <br>will be stored in "nonce" varaible.<br><br><br>
</code>

## **THANK YOU!**<br><br><hr>

# For more info, visit **[github repo](https://github.com/hrithikgautham/SHA-256-for-a-BLOCK)**.
