import { Router } from 'express';
import { PersonToSkillController } from '../controller/PersonToSkillController';
const passport = require('passport')

const personToSkillRouter = Router();

personToSkillRouter.get('/person/:id/skill', passport.authenticate('bearer', { session: false }), PersonToSkillController.getPersonSkill);

personToSkillRouter.put('/person/:personId/skill/:skillId', passport.authenticate('bearer',  { session: false }), PersonToSkillController.addPersonSkill);

module.exports = personToSkillRouter;