const passport = require('passport');

import { Router } from 'express';
import { LoginController } from '../controller/LoginController';

const loginRouter = Router();

loginRouter.get("/person/logout", passport.authenticate('bearer', { session: false }), LoginController.logout)

loginRouter.post("/person/login", passport.authenticate('local', { session: false }), LoginController.login)

loginRouter.post("/person/password-reset/token", LoginController.resetTokenGenerator);

loginRouter.post("/person/password-reset", LoginController.resetPassword);

module.exports = loginRouter;