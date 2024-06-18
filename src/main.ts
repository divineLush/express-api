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
import { ConfigService } from './config/config.service'

(async () => {
  const container = new Container()
  container.bind<ILogger>(TYPES.ILogger).to(LoggerService).inSingletonScope()
  container.bind<IExceptionFilter>(TYPES.ExceptionFilter).to(ExceptionFilter).inSingletonScope()
  container.bind<UserController>(TYPES.UserController).to(UserController).inSingletonScope()
  container.bind<IUserService>(TYPES.UserService).to(UserService).inSingletonScope()
  container.bind<ConfigService>(TYPES.ConfigService).to(ConfigService).inSingletonScope()
  container.bind<App>(TYPES.Application).to(App)

  container.get<App>(TYPES.Application)
})()
