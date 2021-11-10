const { createLogger, transports, format } = require('winston')
const winstonMysql = require('winston-mysql')

const MySQLOptions = {
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'team_makr',
    table: 'log'
};


const logConfig = {
    transports: [
        new transports.Console({
            level: 'info',
            format: format.combine(format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}), format.json())
        }),
        new transports.Console({
            level: 'error',
            format: format.combine(format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}), format.json())
        }),
        new winstonMysql(MySQLOptions)
    ]
};

const logger = createLogger(logConfig);

module.exports = logger;