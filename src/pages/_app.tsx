import '@/styles/globals.css';
import {
    QueryClientProvider,
    QueryClient,
    Hydrate,
} from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import Head from 'next/head';

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
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    <Component {...pageProps} />
                </Hydrate>
            </QueryClientProvider>
        </>
    );
}
