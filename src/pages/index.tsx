import Head from 'next/head';
import { getSession, signOut, useSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import PageContent from '@/layout/PageContent/PageContent';
import RuangSidebar from '@/features/ruang/RuangSidebar';
import PostInput from '@/features/posts/PostInput';
import PostCard from '@/features/posts/PostCard/PostCard';
import { apiBaseUrl } from 'next-auth/client/_utils';

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
            <main className="h-[200vh]">
                <div className="h-full">
                    <PageContent layoutType="leftmainright">
                        <RuangSidebar />
                        <div className="flex flex-col gap-y-4">
                            <PostInput />
                            <div className="w-full">
                                <PostCard />
                            </div>
                        </div>
                        <></>
                    </PageContent>
                </div>
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
