// import { createHash } from "crypto";
// import { promisify } from "util";

// const blacklist = require('./blacklist');
// const existsAsync = promisify(blacklist.exists).bind(blacklist);
// const setAsync = promisify(blacklist.set).bind(blacklist)
// const jwt = require('jsonwebtoken')


// function generateTokenHash(token) {
//     return createHash('sha256').update(token).digest('hex');
// }

// module.exports = {
//     add: async token => {
//         const expiration = jwt.decode(token).exp;
//         const tokenHash = generateTokenHash(token);
//         await setAsync(tokenHash, '');
//         blacklist.expireat(token, expiration);
//     },
//     verify: async token => {
//         const tokenHash = generateTokenHash(token);
//         const resultado = await existsAsync(tokenHash);
//         return resultado === 1;
//     }
// }