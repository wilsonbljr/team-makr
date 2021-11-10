const passport = require('passport');

import { Router } from 'express';
import { PersonToSkillController } from '../controller/PersonToSkillController';

const personToSkillRouter = Router();

personToSkillRouter.get('/person/:id/skill', passport.authenticate('bearer', { session: false }), PersonToSkillController.getPersonSkill);

personToSkillRouter.put('/person/:personId/skill/:skillId', passport.authenticate('bearer',  { session: false }), PersonToSkillController.addPersonSkill);

personToSkillRouter.delete('/person/:personId/skill/:skillId', passport.authenticate('bearer',  { session: false }), PersonToSkillController.removePersonSkill);

module.exports = personToSkillRouter;