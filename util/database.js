const mysqul  = require('mysql2');

const pool = mysqul.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'igo9092121Ry&'
});


module.exports = pool.promise();