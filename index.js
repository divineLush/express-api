import express from 'express'
import { userRoutes } from './users/users.js'

const port = 8000
const app = express()

app.use((req, res, next) => {
  console.log('custom')
  next()
})

app.use('/', (req, res, next) => {
  console.log('only /')
  next()
})

// all middleware
app.all('/', (req, res, next) => {
  console.log('PARAMS: ', req.params)
  next()
})

let world = false

app.get('/', (req, res) => {
  res.json({ hello: true, world })
})

app.get('/error', (req, res) => {
  throw new Error('error!!!')
})

app.post('/', (req, res) => {
  world = !world
  res.send(200)
})

app.use('/users', userRoutes)

// handle errors
app.use((err, req, res, next) => {
  console.log(err.message)
  res.status(500).send(err.message)
})

app.listen(port, () => {
  console.log('server running...')
})
