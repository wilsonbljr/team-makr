const passport = require('passport');

import { Router } from 'express';
import { PersonToTeamController } from '../controller/PersonToTeamController';

const personToTeamRouter = Router();

personToTeamRouter.get('/person/:id/team', passport.authenticate('bearer', { session: false }), PersonToTeamController.getPersonTeam)

personToTeamRouter.put('/person/:personId/team/:teamId', passport.authenticate('bearer', { session: false }), PersonToTeamController.addPersonTeam)

personToTeamRouter.delete('/person/:personId/team/:teamId', passport.authenticate('bearer', { session: false }), PersonToTeamController.removePersonTeam)

module.exports = personToTeamRouter;