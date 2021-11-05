import { Router } from "express";
import { LogController } from "../controller/LogController";
const passport = require('passport');

const LogRouter = Router();

LogRouter.get("/log", passport.authenticate('bearer', { session: false }), LogController.getLogs);

LogRouter.get("/log/:id", passport.authenticate('bearer', { session: false }), LogController.getLog);

module.exports = LogRouter;