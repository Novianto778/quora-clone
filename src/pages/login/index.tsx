import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Logo from '@/assets/images/quora-logo.png';
import LoginForm from '@/features/Login/components/LoginForm';
import { footerLinks } from '@/features/Login/footerLinks';
import Link from 'next/link';

type Props = {};

const LoginPage = (props: Props) => {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div className="flex h-screen w-screen items-center justify-center bg-login bg-cover">
                <div
                    className="w-full max-w-3xl rounded bg-white pt-10
                "
                >
                    <div className="flex flex-col items-center justify-center">
                        <Image src={Logo} alt="logo" width={175} height={100} />
                        <h6 className="mt-2 font-bold text-gray-600">
                            Tempat berbagi pengetahuan dan memahami dunia lebih
                            baik
                        </h6>
                    </div>
                    <div className="mt-8">
                        <LoginForm />
                    </div>
                    <div className="mt-6 flex w-full items-center justify-center bg-gray-200 py-3 px-4">
                        <ul className="mx-auto flex gap-x-1">
                            {footerLinks.map((item) => {
                                const isFirst = footerLinks.indexOf(item) === 0;
                                return (
                                    <li
                                        key={item.title}
                                        className={`text-xs text-gray-700 ${
                                            !isFirst
                                                ? "before:mr-1 before:w-1 before:content-['•']"
                                                : ''
                                        }`}
                                    >
                                        {item.link ? (
                                            <Link
                                                href={`https://id.quora.com${item.link}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="duration-300 hover:underline"
                                            >
                                                {item.title}
                                            </Link>
                                        ) : (
                                            <span>{item.title}</span>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
