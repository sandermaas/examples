import cookieParser from 'cookie-parser'
import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import helmet from 'helmet'
import { StatusCodes } from 'http-status-codes'
import morgan from 'morgan'
import path from 'path'

import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
if (process.env.NODE_ENV === 'production') {
  app.use(helmet())
}

app.use('/api', routes)

app.use(express.static(path.join(__dirname, 'public')))

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // console.log('API ERROR')
  // console.log(err.message)

  res.status(StatusCodes.BAD_REQUEST).json({
    error: err.message
  })
})

export default app
