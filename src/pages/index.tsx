import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Quora Clone</title>
                <meta name="description" content="Quora Clone by Novianto" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                {/* <link rel="icon" href="/image/favicon.ico" /> */}
            </Head>
            <main>
                <h1 className="text-xl text-red-500">test</h1>
            </main>
        </>
    );
}
