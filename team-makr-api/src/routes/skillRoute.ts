const passport = require('passport');

import { Router } from 'express';
import { SkillController } from '../controller/SkillController';

const skillRouter = Router();

skillRouter.get('/skill', passport.authenticate('bearer', { session: false }), SkillController.getSkills);

skillRouter.get('/skill/:id', passport.authenticate('bearer', { session: false }), SkillController.getSkill);

skillRouter.post('/skill', passport.authenticate('bearer', { session: false }), SkillController.saveSkill);

skillRouter.put('/skill/:id', passport.authenticate('bearer', { session: false }), SkillController.updateSkill);

skillRouter.delete('/skill/:id', passport.authenticate('bearer', { session: false }), SkillController.deleteSkill);

module.exports = skillRouter;