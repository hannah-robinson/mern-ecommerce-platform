import express from 'express'
import dotenv from 'dotenv'
dotenv.config() // putting it here because bc we have to call config method before using any of the variables
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
const port = process.env.PORT || 5001
// use port in .env file or 5001 as a fallback if .env not found

connectDB() // connect to  MongoDB

const app = express()

app.get('/', (req, res) => {
  res.send('API is running')
})

app.use('/api/products', productRoutes)

app.listen(port, () =>
  console.log(`Server running on port http://localhost:${port}`)
)
