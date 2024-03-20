import express from 'express'
import { config } from 'dotenv'
import dbConnect from './config/dbconnect'
import { defaultErrorHandler } from './middlewares/defaultErrorHandler'

config()
const app = express()
const port = process.env.PORT || 8888

dbConnect()

app.use(defaultErrorHandler)

app.listen(port, () => {
  console.log('Server running on the port: ' + port)
})
