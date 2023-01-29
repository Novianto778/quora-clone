import clientPromise from '@/lib/db/mongodb';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import jwt from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
    adapter: MongoDBAdapter(clientPromise),
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
        // ...add more providers here
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: 'Credentials',
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: {
                    label: 'email',
                    type: 'text',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                },
            },
            async authorize(credentials, req) {
                const { email, password } = credentials as any;
                const res = await fetch(
                    'http://localhost:3000/api/auth/login',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email,
                            password,
                        }),
                    }
                );

                const user = await res.json();

                if (!res.ok || !user) {
                    throw new Error('Email or password is incorrect');
                }

                return user;
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            session.user = token;

            return session;
        },
    },
    session: {
        strategy: 'jwt',
    },
    jwt: {
        async encode({ token }) {
            return jwt.sign(token as {}, process.env.JWT_SECRET!);
        },
        async decode({ token }) {
            return jwt.verify(token!, process.env.JWT_SECRET!) as JWT;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/login',
    },
};

export default NextAuth(authOptions);
