const routes = require('./routes/index');
const auth = require('./config/auth');
const passport = require('passport');
const cors = require('cors');

import * as express from 'express';
import { connectDB } from './config/db';

export const app = express();

app.use(cors())

app.use(passport.initialize());

routes(app);

connectDB();