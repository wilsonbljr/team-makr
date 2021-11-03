const routes = require('./routes/index')
import * as express from 'express';
import * as logger from 'morgan';

import { connectDB } from './config/db';

export const app = express();

routes(app);

app.use(logger('dev'));

connectDB();