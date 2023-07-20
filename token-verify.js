const jwt = require('jsonwebtoken');

const secret = 'myCat';
const token = 'rsdfghfasg5fd1sa7g568sd4g848f89H48H46A5168AFH4BA5HF8B4ZF57G68S7GS';

function verifyToken(payload, secret){
    return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);