import { Router } from 'express';
import { PersonController } from '../controller/PersonController';

const PersonRouter = Router();
const personController = new PersonController();

PersonRouter.post('/person', async (req, res) => {
    const dados = req.body;
});

