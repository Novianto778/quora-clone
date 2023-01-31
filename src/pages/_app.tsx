import '@/styles/globals.css';
import {
    QueryClientProvider,
    QueryClient,
    Hydrate,
} from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/layout/Navbar/Navbar';
import { Open_Sans } from '@next/font/google';

const open_sans = Open_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
    // This ensures that data is not shared
    // between different users and requests
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 1000 * 60 * 5,
                    },
                },
            })
    );
    return (
        <>
            <Head>
                <link rel="icon" href="/image/favicon.ico" />
            </Head>
            <Toaster />
            <SessionProvider session={pageProps.session}>
                <QueryClientProvider client={queryClient}>
                    <Hydrate state={pageProps.dehydratedState}>
                        <div className={open_sans.className}>
                            <Navbar />
                            <div className="bg-gray-100 pt-20">
                                <Component {...pageProps} />
                            </div>
                        </div>
                    </Hydrate>
                </QueryClientProvider>
            </SessionProvider>
        </>
    );
}
