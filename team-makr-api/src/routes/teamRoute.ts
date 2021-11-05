import { Router } from 'express';
import { TeamController } from '../controller/TeamController';
const passport = require('passport');

const teamRouter = Router();

teamRouter.get('/Team', passport.authenticate('bearer', { session: false }), TeamController.getTeams);

teamRouter.get('/Team/:id', passport.authenticate('bearer', { session: false }), TeamController.getTeam);

teamRouter.post('/Team', passport.authenticate('bearer', { session: false }), TeamController.saveTeam);

teamRouter.put('/Team/:id', passport.authenticate('bearer', { session: false }), TeamController.updateTeam);

teamRouter.delete('/Team/:id', passport.authenticate('bearer', { session: false }), TeamController.deleteTeam);

module.exports = teamRouter;