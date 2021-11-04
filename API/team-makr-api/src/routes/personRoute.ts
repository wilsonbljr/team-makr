import { Router } from 'express';
import { PersonController } from '../controller/PersonController';
const passport = require('passport');

const PersonRouter = Router();

PersonRouter.get('/person', passport.authenticate('bearer', { session: false }), PersonController.getPeople);

PersonRouter.get('/person/:id', PersonController.getPerson);

PersonRouter.get('/person/:id/hardskill', PersonController.getPersonHardSkill);

PersonRouter.get('/person/:id/softskill', PersonController.getPersonSoftSkill)

PersonRouter.get('/person/:id/team', PersonController.getPersonTeam)

PersonRouter.post('/person', PersonController.savePerson);

PersonRouter.put('/person/:id', PersonController.updatePerson);

PersonRouter.delete('/person/:id', PersonController.deletePerson);

module.exports = PersonRouter;