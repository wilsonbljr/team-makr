import { Router } from 'express';
import { PersonToHardSkillController } from '../controller/PersonToHardSkillController';
const passport = require('passport')

const personToHardSkillRouter = Router();

personToHardSkillRouter.get('/person/:id/hardskill', passport.authenticate('bearer', { session: false }), PersonToHardSkillController.getPersonHardSkill);

personToHardSkillRouter.put('/person/:personId/hardskill/:hardSkillId', PersonToHardSkillController.addPersonHardSkill);

module.exports = personToHardSkillRouter;