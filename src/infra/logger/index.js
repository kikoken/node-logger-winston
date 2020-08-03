import {createLogger, format, transports} from 'winston'
import { LogginWinston } from' @google-cloud/logging-winston'

const dateFormat = () => new Date(Date.now()).toUTCString()
const loggingWinston = new LoggingWinston({
    prefix: 'myModule'
});

export default _route_ =>{ 
    const file = _route_ ? `${_route_}.log` : 'app.log'

    return createLogger({
        format: format.combine(
            format.simple(),
            format.timestamp(),
            format.printf(info => `${dateFormat()} | ${info.level.toUpperCase()} | ${file} | ${info.message}`)
        ),
        transports: [
            new transports.File({
                maxsize: 512000,
                maxFiles: 5,
                filename: `${__dirname}/../../../logs/${file}`
            }),
            new transports.Console({
                level: 'debug'
            }),
            loggingWinston
        ]
    })
}