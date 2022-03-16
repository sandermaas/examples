import mongoose from 'mongoose'

abstract class Database {
  public static connect(mongoUri: string, callback: () => void): void {
    mongoose.connection.on('connected', () => {
      console.log('Connected to the database')
      callback()
    })
    mongoose.connection.on('error', error => {
      console.log('DB ERROR')
      console.log(error)
    })

    mongoose.connect(mongoUri).catch(error => {
      console.log('DB INIT ERROR')
      console.log(error)
    })
  }

  public static disconnect(): void {
    mongoose.connection.close(() => {
      console.log('Mongoose default connection with DB : disconnected through app termination')
      process.exit(0)
    })
  }
}

export default Database
