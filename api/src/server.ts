require('dotenv').config()
require('../redis/blacklist');

import { app } from './app'

const port = 3000;

const server = app.listen(port);