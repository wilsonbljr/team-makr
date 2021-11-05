import { Router } from 'express';
import { LoginController } from '../controller/LoginController';
const passport = require('passport')

const loginRouter = Router();

loginRouter.post("/person/login", passport.authenticate('local', { session: false }), LoginController.login)

loginRouter.post("/person/password-reset/token", LoginController.resetTokenGenerator);

loginRouter.post("/person/password-reset", LoginController.resetPassword);

module.exports = loginRouter;