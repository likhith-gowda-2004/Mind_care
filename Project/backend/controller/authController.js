// // Use ES module syntax for imports
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import User from '../models/userModel.js';
// import createError from '../utils/appError.js';
// import dotenv from 'dotenv';

// // Load environment variables
// dotenv.config({ path: './config/config.env' });

// // REGISTER USER
// export const signup = async (req, res, next) => {
//     try {
//         const user = await User.findOne({ email: req.body.email });
//         if (user) {
//             return next(new createError('User already exists!', 400));
//         }

//         const hashedPassword = await bcrypt.hash(req.body.password, 12);
//         const newUser = await User.create({
//             ...req.body,
//             password: hashedPassword,
//         });

//         // Assign JWT (JSON web token)

//         const token = jwt.sign(
//             { _id: newUser._id },
//             process.env.JWT_SECRET,
//             {
//                 expiresIn: process.env.JWT_EXPIRES_IN,
//             }
//         );

//         res.status(201).json({
//             status: 'success',
//             message: 'User created successfully',
//             token,
//             user:{
//                 _id: newUser._id,
//                 name: newUser.name,
//                 email: newUser.email,
//                 role: newUser.role,
//             },
//         });
//     } catch (error) {
//         next(error);
//     }
// };

// // Define login function
// export const login = async (req, res, next) => {
//     try {
//         const { email, password } = req.body;

//         // Check if the user exists
//         const user = await User.findOne({ email });
//         if (!user) {
//             return next(new createError('User not found!', 404));
//         }

//         // Check if the password is correct
//         const isPasswordCorrect = await bcrypt.compare(password, user.password);
//         if (!isPasswordCorrect) {
//             return next(new createError('Incorrect password!', 401));
//         }

//         // Assign JWT (JSON web token)
//         const token = jwt.sign(
//             { _id: user._id },
//             process.env.JWT_SECRET,
//             {
//                 expiresIn: process.env.JWT_EXPIRES_IN,
//             }
//         );

//         res.status(200).json({
//             status: 'success',
//             message: 'Login successful',
//             token,
//             user:{
//                 _id: user._id,
//                 name: user.name,
//                 email: user.email,
//                 role: user.role,

//             },
//         });
//     } catch (error) {
//         next(error);
//     }
// };

// Use ES module syntax for imports
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import createError from '../utils/appError.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: './config/config.env' });

// REGISTER USER
export const signup = async (req, res, next) => {
    try {
        const { email, password, firstName, lastName, srn, phoneNumber, gender, dateOfBirth } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return next(new createError('User already exists!', 400));
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create the new user
        const newUser = await User.create({
            email,
            password: hashedPassword,
            firstName,
            lastName,
            srn,
            phoneNumber,
            gender,
            dateOfBirth,
        });

        // Assign JWT (JSON Web Token)
        const token = jwt.sign(
            { _id: newUser._id },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN,
            }
        );

        res.status(201).json({
            status: 'success',
            message: 'User created successfully',
            token,
            user: {
                _id: newUser._id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                srn: newUser.srn,
                email: newUser.email,
                phoneNumber: newUser.phoneNumber,
                gender: newUser.gender,
                dateOfBirth: newUser.dateOfBirth,
                role: newUser.role,
            },
        });
    } catch (error) {
        next(error);
    }
};

// LOGIN USER
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return next(new createError('User not found!', 404));
        }

        // Check if the password is correct
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return next(new createError('Incorrect password!', 401));
        }

        // Assign JWT (JSON Web Token)
        const token = jwt.sign(
            { _id: user._id },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN,
            }
        );

        res.status(200).json({
            status: 'success',
            message: 'Login successful',
            token,
            user: {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                srn: user.srn,
                email: user.email,
                phoneNumber: user.phoneNumber,
                gender: user.gender,
                dateOfBirth: user.dateOfBirth,
                role: user.role,
            },
        });
    } catch (error) {
        next(error);
    }
};
