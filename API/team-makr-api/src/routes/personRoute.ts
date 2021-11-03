import { Router } from 'express';
import { PersonController } from '../controller/PersonController';

const PersonRouter = Router();

PersonRouter.get('/person', PersonController.get);

module.exports = PersonRouter;