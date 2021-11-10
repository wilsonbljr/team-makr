import { createHash } from "crypto";

const blacklist = require('./blacklist')
const { promisify } = require('util');
const jwt = require('jsonwebtoken');

const setAsync = promisify(blacklist.set).bind(blacklist);
const existsAsync = promisify(blacklist.exists).bind(blacklist);

function createTokenHash(token) {
    return createHash('sha256').update(token).digest('hex');
}

module.exports = {
    add: async token => {
        const expireDate = jwt.decode(token).exp;
        const tokenHash = createTokenHash(token);
        await setAsync(tokenHash, '');
        blacklist.expireat(tokenHash, expireDate);
    },
    check: async token => {
        const tokenHash = createTokenHash(token);
        const result = existsAsync(tokenHash);
        return result;
    }
}