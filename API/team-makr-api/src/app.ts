const routes = require('./routes/index')
const auth = require('./config/auth')
const passport = require('passport')

import * as express from 'express';
import * as logger from 'morgan';

import { connectDB } from './config/db';

export const app = express();

app.use(passport.initialize());

app.use(logger('dev'));

routes(app);

connectDB();