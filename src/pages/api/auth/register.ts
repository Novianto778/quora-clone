import User from '@/model/userModel';
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        if (req.method === 'POST') {
            const { email, password } = req.body;

            // console.log(email, password, firstName, lastName)

            const user = await User.findOne({ email: email });

            if (user) {
                return res.status(400).json({ message: 'User already exists' });
            }

            const hashedPassword = await bcrypt.hash(password, 12);
            const newUser = await new User({
                email: email,
                password: hashedPassword,
            }).save();

            // const token = jwt.sign(
            //     { _id: newUser._id },
            //     process.env.JWT_SECRET!,
            //     {
            //         expiresIn: '1d',
            //     }
            // );

            // console.log('token', token);

            // newUser.emailToken = token;
            await newUser.save();

            return res.status(200).json({
                message: 'Registration successful',
                // token,
            });

            //     const { origin } = absoluteUrl(req);
            //     const link = `${origin}/src/user/email/${token}`;

            //     const message = `<div>Click on the link below to verify your email, if the link is not working then please paste into the browser.</div></br>
            // <div>link:${link}</div>`;

            //     // console.log("message", message)

            //     // console.log("here")

            //     await sendEmail({
            //         to: newUser.email,
            //         subject: 'Password Reset',
            //         text: message,
            //     });

            //     return res.status(200).json({
            //         message: `Email sent to ${newUser.email}, please check your email`,
            //     });
        }
    } catch (error) {
        console.log(error);
    }
}
