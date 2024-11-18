// import express from "express";
// import { config } from "dotenv";
// import cors from "cors";
// import { dbConnection } from "./database/dbConnection.js";
// import cookieParser from "cookie-parser";
// import fileUpload from "express-fileupload";
// import topicRoutes from "./router/topicRoute.js";
// import authRouter from './router/authRoute.js';
// import adminRoutes from './router/adminRoutes.js';
// import facultyRoute from './router/facultyRoute.js';
// import bodyParser from 'body-parser';

// const app = express();

// // Load environment variables from the .env file
// config({ path: "./config/config.env" });

// // CORS Middleware to connect the frontend
// app.use(
//     cors({
//         origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
//         methods: ["GET", "POST", "PUT", "DELETE"],
//         credentials: true, // Enable credentials (cookies, etc.)
//     })
// );

// // Global error handler
// app.use((err, req, res, next) => {
//     console.error(err); // Debugging log
//     err.statusCode = err.statusCode || 500;
//     err.status = err.status || "error";

//     res.status(err.statusCode).json({
//         status: err.status,
//         message: err.message,
//     });
// });

// // Middleware for parsing cookies, JSON data, and file uploads
// app.use(cookieParser());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(
//     fileUpload({
//         useTempFiles: true,
//         tempFileDir: "/tmp/",
//     })
// );
// app.use(bodyParser.json());

// // Auth routes
// app.use("/api/v1/auth", authRouter);
// app.use("/api/topics", topicRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api/faculties", facultyRoute);

// // Connect to the database
// dbConnection();

// export default app;
import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import { dbConnection } from './database/dbConnection.js';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import topicRoutes from './router/topicRoute.js';
import authRouter from './router/authRoute.js';
import adminRoutes from './router/adminRoutes.js';
import facultyRoute from './router/facultyRoute.js';
import bodyParser from 'body-parser';
import enrollmentRoutes from './router/enrollmentRoutes.js';
import appointmentRoutes from './router/appointmentRoutes.js';


const app = express();

// Load environment variables from the .env file
config({ path: './config/config.env' });

// CORS Middleware to connect the frontend
app.use(cors({
    origin: 'http://127.0.0.1:5173', 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

// Middleware for parsing cookies, JSON data, and file uploads
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
}));
app.use(bodyParser.json());

// Auth routes
app.use('/api/v1/auth', authRouter);
app.use('/api/topics', topicRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/enrollments', enrollmentRoutes);
// Faculty route
app.use('/api/faculties', facultyRoute); 
app.use('/api/appointment', appointmentRoutes);
// Global error handler
app.use((err, req, res, next) => {
    console.error(err); // Debugging log
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});

// Connect to the database
dbConnection();

export default app;
