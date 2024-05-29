import { Logger, ILogObj } from 'tslog'

export class LoggerService {
  private readonly logger: Logger<ILogObj> = new Logger()

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
