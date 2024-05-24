import express, { Request, Response, NextFunction } from 'express'
import { userRoutes } from './users/users.js'

const port = 8000
const app = express()

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log('custom')
  next()
})

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  console.log('only /')
  next()
})

// all middleware
app.all('/', (req: Request, res: Response, next: NextFunction) => {
  console.log('PARAMS: ', req.params)
  next()
})

let world = false

app.get('/', (req: Request, res: Response) => {
  res.json({ hello: true, world })
})

app.get('/error', (req: Request, res: Response) => {
  throw new Error('error!!!')
})

app.post('/', (req: Request, res: Response) => {
  world = !world
  res.send(200)
})

app.use('/users', userRoutes)

// handle errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err.message)
  res.status(500).send(err.message)
})

app.listen(port, () => {
  console.log('server running...')
})
