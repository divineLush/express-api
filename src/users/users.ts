import express from 'express'

export const userRoutes = express.Router()

userRoutes.post('/login', (req, res) => {
  res.send('/users/login\n')
})

userRoutes.post('/register', (req, res) => {
  res.send('/users/register\n')
})
