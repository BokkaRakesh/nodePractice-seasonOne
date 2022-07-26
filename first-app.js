console.log("test for nodejs");
const fs = require('fs');

fs.writeFileSync('hello-text.js', `console.log('created hello text file')`);