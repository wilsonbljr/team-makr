import { Router } from 'express';
import { PersonToTeamController } from '../controller/PersonToTeamController';
const passport = require('passport')

const personToTeamRouter = Router();

personToTeamRouter.get('/person/:id/team', passport.authenticate('bearer', { session: false }), PersonToTeamController.getPersonTeam)

module.exports = personToTeamRouter;