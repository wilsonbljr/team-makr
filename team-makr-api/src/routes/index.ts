const person = require('./personRoute');
const log = require ('./logRoute');
const login = require ('./loginRoute');
const skill = require ('./skillRoute');
const team = require ('./teamRoute');
const personToSkill = require ('./personToSkillRoute');
const personToTeam = require ('./personToTeamRoute');

import * as express from 'express';

module.exports = app => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(person);
    app.use(log);
    app.use(login);
    app.use(skill);
    app.use(team);
    app.use(personToSkill);
    app.use(personToTeam);
}