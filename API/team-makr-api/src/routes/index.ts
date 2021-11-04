const person = require('./personRoute')
const log = require ('./logRoute')
const login = require ('./loginRoute')

import * as express from 'express';

module.exports = app => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(person);
    app.use(log);
    app.use(login);
}