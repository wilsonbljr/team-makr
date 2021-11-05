import { Router } from 'express';
import { SoftSkillController } from '../controller/SoftSkillController';
const passport = require('passport');

const softSkillRouter = Router();

softSkillRouter.get('/softskill', passport.authenticate('bearer', { session: false }), SoftSkillController.getSoftSkills);

softSkillRouter.get('/softskill/:id', passport.authenticate('bearer', { session: false }), SoftSkillController.getSoftSkill);

softSkillRouter.post('/softskill', passport.authenticate('bearer', { session: false }), SoftSkillController.saveSoftSkill);

softSkillRouter.put('/softskill/:id', passport.authenticate('bearer', { session: false }), SoftSkillController.updateSoftSkill);

softSkillRouter.delete('/softskill/:id', passport.authenticate('bearer', { session: false }), SoftSkillController.deleteSoftSkill);

module.exports = softSkillRouter;