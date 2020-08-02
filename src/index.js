import config from './config'
import logger from './infra/logger'
import server from './server'

// log unhandled execpetions
process.once('uncaughtException', (err) => {
    console.error('Unhandled Exception', err)
})
process.once('uncaughtRejection', (err, promise) => {
    console.error('Unhandled Rejection', err)
})

try {
    const app = server.start({
        port: config.port
    })
    logger().info(`Server started succesfully, running on port: ${config.port}.`)
} catch (error) {
    logger().info(error)
}