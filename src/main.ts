import { App } from './app'
import { ExceptionFilter } from './errors/exception.filter'
import { LoggerService } from './logger/logger.service'
import { UserController } from './users/users.controller'

(async () => {
  const logger = new LoggerService()
  new App(logger, new UserController(logger), new ExceptionFilter(logger))
})()
