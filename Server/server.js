import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
import catetgoryRoutes from './routes/categoryRoutes.js'
import cors from 'cors'
import productRoutes from './routes/productRoute.js'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

// configure's
dotenv.config();
connectDB();


//rest object
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));

//Routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/category', catetgoryRoutes)
app.use('/api/v1/product', productRoutes)

app.use('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

app.get('/', (req, res) => {
    res.json('Hello');
});

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`.bgGreen.white);
})