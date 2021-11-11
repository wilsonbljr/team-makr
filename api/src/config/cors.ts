const cors = require('cors')

export const corsLogin = cors({
    exposedHeaders: ['Authorization']
})