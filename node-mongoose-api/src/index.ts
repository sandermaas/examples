import 'dotenv/config'

import app from './app'
import Database from './database'

const port = Number(process.env.PORT || 4000)

if (!!process.env.MONGO_DB_URI) {
  Database.connect(process.env.MONGO_DB_URI, () => {
    app.listen(port, () => {
      console.log('Express server started on port: ' + port)
      process.on('SIGINT', Database.disconnect).on('SIGTERM', Database.disconnect)
    })
  })
} else {
  console.log('The MONGO_URI env variable is not defined')
  process.exit(0)
}
