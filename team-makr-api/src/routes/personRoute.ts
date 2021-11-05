import { Router } from 'express';
import { PersonController } from '../controller/PersonController';
const passport = require('passport');

const PersonRouter = Router();

PersonRouter.get('/person', passport.authenticate('bearer', { session: false }), PersonController.getPeople);

PersonRouter.get('/person/:id', passport.authenticate('bearer', { session: false }), PersonController.getPerson);

PersonRouter.get('/person/:id/hardskill', passport.authenticate('bearer', { session: false }), PersonController.getPersonHardSkill);

PersonRouter.get('/person/:id/softskill', passport.authenticate('bearer', { session: false }), PersonController.getPersonSoftSkill)

PersonRouter.get('/person/:id/team', passport.authenticate('bearer', { session: false }), PersonController.getPersonTeam)

PersonRouter.post('/person', PersonController.savePerson);

PersonRouter.put('/person/:id', passport.authenticate('bearer', { session: false }), PersonController.updatePerson);

PersonRouter.delete('/person/:id', passport.authenticate('bearer', { session: false }), PersonController.deletePerson);

module.exports = PersonRouter;