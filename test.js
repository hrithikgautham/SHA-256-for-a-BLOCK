const { getHash } = require('./');

// 429590ad5e0c7b7fec022b536dd67bb4727f951b843eb5ea4fc34ded5b2ab8b5

getHash("429590ad5e0c7b7fec022b536dd67bb4727f951b843eb5ea4fc34ded5b92a8b5", 4, ".")
    .then(console.log)
    .catch(err => console.error("Error in test.js, ", err));
// console.log("sdsdfds")