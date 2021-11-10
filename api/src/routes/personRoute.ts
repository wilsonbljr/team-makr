const passport = require('passport');

import { Router } from 'express';
import { PersonController } from '../controller/PersonController';

const personRouter = Router();

personRouter.get('/person', passport.authenticate('bearer', { session: false }), PersonController.getPeople);

personRouter.get('/person/:id', passport.authenticate('bearer', { session: false }), PersonController.getPerson);

personRouter.post('/person', PersonController.savePerson);

personRouter.put('/person/:id', passport.authenticate('bearer', { session: false }), PersonController.updatePerson);

personRouter.delete('/person/:id', passport.authenticate('bearer', { session: false }), PersonController.deletePerson);

module.exports = personRouter;