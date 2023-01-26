import { classNames } from '@/lib/utils/classNames';
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

type Props = {
    name?: string;
    type?: 'text' | 'password' | 'email' | 'number';
    placeholder?: string;
    size?: 'sm' | 'base' | 'lg';
    textarea?: boolean;
    className?: string;
    icon?: React.ReactNode;
};
/* eslint-disable react/display-name */
const TextField = React.forwardRef<
    HTMLInputElement | HTMLTextAreaElement,
    Props
>((props, ref) => {
    const {
        name,
        type = 'text',
        placeholder,
        size = 'base',
        textarea = false,
        className,
        icon,
        ...rest
    } = props;
    const [inputType, setInputType] = useState(type);
    const InputElement = textarea ? 'textarea' : 'input';

    return (
        <div className={classNames('relative', className!)}>
            <InputElement
                type={inputType}
                className={`form-control block w-full px-4 py-2 text-${size} m-0 rounded border border-solid border-gray-300 bg-white bg-clip-padding font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none`}
                placeholder={placeholder || name}
                name={name}
                ref={ref as any}
                {...rest}
            />
            {icon && <div className="absolute right-3 top-3">{icon}</div>}
            {type === 'password' && (
                <div
                    className="absolute right-3 top-3 cursor-pointer"
                    onClick={() =>
                        setInputType((prev) =>
                            prev === 'password' ? 'text' : 'password'
                        )
                    }
                >
                    {inputType === 'password' ? (
                        <AiOutlineEye size={24} />
                    ) : (
                        <AiOutlineEyeInvisible size={24} />
                    )}
                </div>
            )}
        </div>
    );
});

export default TextField;
