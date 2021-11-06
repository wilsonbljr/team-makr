require('dotenv').config()

import { app } from './app'

const port = 3000;

const server = app.listen(port);