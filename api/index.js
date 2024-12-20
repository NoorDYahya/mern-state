import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import listingRouter from './routes/listing.route.js';
dotenv.config();


const app = express();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('conncted to db');
})
.catch((err) =>{
    console.log('failed to connect to db ',err);
});

// JSON AS INPUT OF THE SERVER
app.use(express.json());

app.use(cookieParser());

app.listen(3000,() => {
    console.log('server is running on port 3000!');
})

//API ROUTES
app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use('/api/listing',listingRouter);

//middleware
app.use((err,req,res,next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode: statusCode,
        message,
    })
})
