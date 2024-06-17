import { Container } from 'inversify'
import { App } from './app'
import { ExceptionFilter } from './errors/exception.filter'
import { LoggerService } from './logger/logger.service'
import { UserController } from './users/users.controller'
import { ILogger } from './logger/logger.interface'
import { TYPES } from './types'
import { IExceptionFilter } from './errors/exception.filter.interface'
import { IUserService } from './users/users.service.interface'
import { UserService } from './users/users.service'

(async () => {
  const container = new Container()
  container.bind<ILogger>(TYPES.ILogger).to(LoggerService)
  container.bind<IExceptionFilter>(TYPES.ExceptionFilter).to(ExceptionFilter)
  container.bind<UserController>(TYPES.UserController).to(UserController)
  container.bind<IUserService>(TYPES.UserService).to(UserService)
  container.bind<App>(TYPES.Application).to(App)

  container.get<App>(TYPES.Application)
})()
