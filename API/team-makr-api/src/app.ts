import * as express from 'express';
import * as logger from 'morgan';

import { connectDB } from './config/db';

export const app = express();

app.use(express.json());

app.use(logger('dev'));

connectDB();