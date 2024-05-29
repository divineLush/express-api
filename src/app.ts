import express, { Express } from 'express'
import { userRoutes } from './users/users'
import { Server } from 'http'

export class App {
  app: Express = express()
  server: Server
  port: number = 8000

  constructor() {
    this.server = this.app.listen(this.port, () => {
      console.log(`running on http://localhost:${this.port}`)
    })
  }

  init() {
    this.app.use('/users', userRoutes)
  }
}
