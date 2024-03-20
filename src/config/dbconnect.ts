import mongoose from 'mongoose'
import { config } from 'dotenv'

config()

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || '')
    if (conn.connection.readyState === 1) {
      console.log('DB connection is successfully')
    } else {
      console.log('DB connetion fail!!!')
    }
  } catch (error: any) {
    console.log('DB connet error')
    throw new Error(error)
  }
}

export default dbConnect
