import { Router } from 'express';
import { LoginController } from '../controller/LoginController';
const passport = require('passport')

const loginRouter = Router();

loginRouter.post("/person/login", passport.authenticate('local', { session: false }), LoginController.login)

loginRouter.get("/person/logout", passport.authenticate('bearer', { session: false }), LoginController.logout)

module.exports = loginRouter;