const person = require('./personRoute')
import * as express from 'express';

module.exports = app => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(person);
}