import { withAuth } from 'next-auth/middleware';
import { NextRequest, NextResponse } from 'next/server';
type Token = {
    accessToken: string;
    roles: string[];
    username: string;
    [x: string]: any;
};
export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    function middleware(req) {
        console.log('token: ', req.nextauth.token);
        const token = req.nextauth.token as Token;
        const pathname = req.nextUrl.pathname;

        console.log(
            pathname.startsWith('/admin') && token?.roles.includes('admin')
        );

        if (pathname.startsWith('/admin') && !token.roles.includes('admin'))
            return NextResponse.rewrite(
                new URL('/login?message=You Are Not Authorized!', req.url)
            );
        // if (
        //     req.nextUrl.pathname.startsWith('/user') &&
        //     req.nextauth.token?.role !== 'user'
        // )
        //     return NextResponse.rewrite(
        //         new URL('/auth/login?message=You Are Not Authorized!', req.url)
        //     );
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    }
);

export const config = {
    matcher: ['/admin/:path*', '/user/:path*'],
};
