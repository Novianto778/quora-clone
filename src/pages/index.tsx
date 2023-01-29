import Head from 'next/head';
import { getSession, signOut, useSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';

export default function Home() {
    const { data: session, status } = useSession();
    console.log(session);

    // if (!session) return null;

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
            <main className="h-screen bg-gray-100">
                <h1 className="text-xl text-red-500">test</h1>
                <button
                    onClick={() =>
                        signOut({
                            callbackUrl: '/login',
                        })
                    }
                >
                    Sign Out
                </button>
            </main>
        </>
    );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     const session = await getSession(context);

//     if (!session) {
//         return {
//             redirect: {
//                 destination: '/login',
//                 permanent: false,
//             },
//         };
//     }

//     return {
//         props: { session },
//     };
// };
