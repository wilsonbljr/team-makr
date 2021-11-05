import { Router } from 'express';
import { HardSkillController } from '../controller/HardSkillController';
const passport = require('passport');

const hardSkillRouter = Router();

hardSkillRouter.get('/hardskill', passport.authenticate('bearer', { session: false }), HardSkillController.getHardSkills);

hardSkillRouter.get('/hardskill/:id', passport.authenticate('bearer', { session: false }), HardSkillController.getHardSkill);

hardSkillRouter.post('/hardskill', passport.authenticate('bearer', { session: false }), HardSkillController.saveHardSkill);

hardSkillRouter.put('/hardskill/:id', passport.authenticate('bearer', { session: false }), HardSkillController.updateHardSkill);

hardSkillRouter.delete('/hardskill/:id', passport.authenticate('bearer', { session: false }), HardSkillController.deleteHardSkill);

module.exports = hardSkillRouter;