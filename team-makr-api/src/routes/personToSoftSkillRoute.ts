import { Router } from 'express';
import { PersonToSoftSkillController } from '../controller/PersonToSoftSkillController';
const passport = require('passport')

const personToSoftSkillRouter = Router();

personToSoftSkillRouter.get('/person/:id/softskill', passport.authenticate('bearer', { session: false }), PersonToSoftSkillController.getPersonSoftSkill)

personToSoftSkillRouter.put('/person/:personId/softskill/:softSkillId', PersonToSoftSkillController.addPersonSoftSkill);

module.exports = personToSoftSkillRouter;