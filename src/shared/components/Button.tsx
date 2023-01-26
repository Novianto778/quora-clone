import { classNames } from '@/lib/utils/classNames';
import React from 'react';

type Props = {
    children: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'outlined' | 'transparent' | 'link';
    size?: 'sm' | 'md' | 'lg' | 'base';
    [key: string]: any;
};

const Button = (props: Props) => {
    let basicStyle: string =
        'duration-300 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed ';
    const {
        children,
        className,
        variant = 'primary',
        size = 'base',
        ...rest
    } = props;

    if (variant === 'primary') {
        basicStyle +=
            'bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600';
    }

    if (variant === 'outlined') {
        basicStyle +=
            'border border-gray-200 text-black px-4 py-2 rounded hover:bg-gray-100';
    }

    if (variant === 'transparent') {
        basicStyle += 'text-gray-600 px-4 py-2 rounded';
    }

    if (variant === 'link') {
        basicStyle += 'text-gray-light text-13 hover:underline';
    }

    if (size === 'sm') {
        basicStyle += ' text-sm px-2 py-1.5';
    }

    if (size === 'base') {
        basicStyle += ' text-base';
    }

    if (size === 'lg') {
        basicStyle += ' text-lg px-6 py-3';
    }

    return (
        <button className={classNames(basicStyle, className!)} {...rest}>
            {children}
        </button>
    );
};

export default Button;
