import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import shopPageRoutes from './routes/shopPageRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoute.js'
import paymentRoute from './routes/paymentRoute.js'
import uploadRoute from './routes/uploadRoute.js'
// configutation
dotenv.config()

// connection stable
connectDB()

// exprss initialition
const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/products', shopPageRoutes)
app.use('/api/shopProducts', shopPageRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/payment', paymentRoute)
app.use('/api/upload', uploadRoute)

// Making the uploads folder static
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
} else {
    // show this once basic server setup is done
    app.get('/', (req, res) => {
        res.send('API is running...')
    })
}

// middleware for 404
app.use(notFound)
// middleware for error Handling
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
            .bold
    )
)
