import { injectable } from 'inversify'
import { Logger, ILogObj } from 'tslog'
import { ILogger } from './logger.interface'
import 'reflect-metadata'

@injectable()
export class LoggerService implements ILogger {
  readonly logger: Logger<ILogObj> = new Logger()

  log(...args: unknown[]) {
    this.logger.info(...args)
  }

  error(...args: unknown[]) {
    this.logger.error(...args)
  }

  warn(...args: unknown[]) {
    this.logger.warn(...args)
  }
}
