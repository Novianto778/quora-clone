import { FcGoogle } from 'react-icons/fc';
import React from 'react';
import Button from '@/shared/components/Button';
import { BsFacebook } from 'react-icons/bs';
import TextField from '@/shared/components/TextField';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginType } from '../typings';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-hot-toast';

type Props = {};

const LoginForm = (props: Props) => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty },
    } = useForm<LoginType>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (formData: LoginType) => {
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // };

        // try {
        //     const { data } = await axios.post(
        //         `/api/auth/register`,
        //         { email: formData.email, password: formData.password },
        //         config
        //     );

        //     toast.success(data?.message);
        // } catch (error) {
        //     if (axios.isAxiosError(error)) {
        //         toast.error(error?.response?.data.message);
        //     }
        // }
        const res = await signIn('credentials', {
            email: formData.email,
            password: formData.password,
            redirect: false,
            callbackUrl: '/',
        });

        console.log(res);

        if (res?.ok) {
            router.push('/');
        }
    };
    return (
        <div className="flex items-center">
            <div className="w-1/2 border-r px-6">
                <p className="font-13 text-sm leading-4 text-gray-light">
                    Dengan melanjutkan, Anda menunjukkan bahwa Anda menyetujui
                    Persyaratan Layanan dan Kebijakan Privasi Quora.
                </p>
                <div>
                    <div
                        className="mt-4 flex flex-col gap-2
                    "
                    >
                        <Button
                            variant="outlined"
                            className="flex w-full items-center space-x-4"
                            onClick={() =>
                                signIn('google', { callbackUrl: '/' })
                            }
                        >
                            <FcGoogle size={24} />
                            <span>Lanjutkan dengan Google</span>
                        </Button>
                        <Button
                            variant="outlined"
                            className="flex w-full items-center space-x-4"
                        >
                            <BsFacebook size={24} color="#3b5998" />
                            <span>Lanjutkan dengan Facebook</span>
                        </Button>
                        <Button
                            size="sm"
                            variant="transparent"
                            className="duration-300 hover:bg-gray-200"
                        >
                            Daftar dengan surel
                        </Button>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 px-6">
                <p className="border-b pb-2 font-medium">Masuk</p>
                <div className="mt-4 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="email"
                            className="font-13 text-sm font-bold"
                        >
                            Surel
                        </label>
                        <TextField
                            {...register('email')}
                            type="email"
                            placeholder="Surel Anda"
                        />
                        {errors.email && (
                            <p className="text-sm text-red-500">
                                {errors.email.message as string}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="password"
                            className="font-13 text-sm font-bold"
                        >
                            Sandi
                        </label>
                        <TextField
                            {...register('password')}
                            type="password"
                            placeholder="Kata sandi Anda"
                        />
                        {errors.password && (
                            <p className="text-sm text-red-500">
                                {errors.password.message as string}
                            </p>
                        )}
                    </div>
                    <div className="flex items-center justify-between">
                        <Button variant="link">Lupa kata sandi?</Button>
                        <Button
                            variant="primary"
                            className="rounded-full px-5 py-1.5 text-15"
                            type="submit"
                            disabled={!isDirty}
                        >
                            Masuk
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
