// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import User from '@/model/userModel';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectDB from '@/connectDB';

type Data = {
    name: string;
    email: string;
    role: 'admin' | 'user';
    token: string;
};

type Error = {
    message: string;
};

connectDB();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | Error>
) {
    const { email, password } = req.body;

    // console.log(req.body)
    try {
        if (req.method === 'POST') {
            if (!email || !password) {
                return res
                    .status(422)
                    .json({ message: 'please ass all the fields' });
            }
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(404).json({ message: 'Invalid credentials' });
            }
            const doMatch = bcrypt.compare(password, user.password!);
            if (doMatch) {
                const token = jwt.sign(
                    { userId: user._id },
                    process.env.JWT_SECRET!,
                    {
                        expiresIn: '1d',
                    }
                );

                if (!doMatch) {
                    return res
                        .status(401)
                        .json({ message: 'Invalid credentials' });
                }

                const { email, name } = user;

                // res.cookie('jwt', token, {
                //     httpOnly: true,
                //     secure: true,
                //     sameSite: 'None',
                //     maxAge: 24 * 60 * 60 * 1000,
                // });

                // setCookie('jwt', token, {
                //     req,
                //     res,
                //     httpOnly: true,
                //     secure: true,
                //     sameSite: 'None',
                //     maxAge: 24 * 60 * 60 * 1000,
                // });

                res.status(201).json({
                    token,
                    name,
                    email,
                    message: 'login successful',
                });
            }
        } else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (err) {
        console.log(err);
    }
}
