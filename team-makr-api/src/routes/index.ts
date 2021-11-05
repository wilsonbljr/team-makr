const person = require('./personRoute')
const log = require ('./logRoute')
const login = require ('./loginRoute')
const hardSkill = require ('./hardSkillRoute')
const softSkill = require ('./softSkillRoute')
const team = require ('./teamRoute')

import * as express from 'express';

module.exports = app => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(person);
    app.use(log);
    app.use(login);
    app.use(hardSkill);
    app.use(softSkill);
    app.use(team);
}