import Image from 'next/image';
import React from 'react';
import { BsPencil, BsPencilSquare, BsQuestionSquare } from 'react-icons/bs';

type Props = {};

const PostInput = (props: Props) => {
    return (
        <div className="flex flex-col rounded-sm bg-white p-4 pb-1 shadow">
            <div className="flex items-center gap-x-2">
                <Image
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                    width={28}
                    height={28}
                    alt="profile"
                    className="hidden rounded-full md:block"
                />
                <input
                    type="text"
                    placeholder="Apa yang ingin Anda tanyakan atau bagikan?"
                    className="w-full rounded-full border bg-gray-100 py-1.5 px-3 text-15 text-gray-dark outline-none"
                />
            </div>
            <div
                className="post-input-box mt-2 items-center justify-evenly
            "
            >
                <button className="flex items-center justify-center gap-x-2 rounded-full px-2 py-1 duration-200 hover:bg-gray-100">
                    <BsQuestionSquare className="text-gray-600" />
                    <span className="text-sm font-medium text-gray-600">
                        Tanya
                    </span>
                </button>
                <div className="h-4 w-[1px] bg-gray-400"></div>
                <button className="flex items-center justify-center gap-x-2 rounded-full px-2 py-1 duration-200 hover:bg-gray-100">
                    <BsPencilSquare className="text-gray-600" />
                    <span className="text-sm font-medium text-gray-600">
                        Jawab
                    </span>
                </button>
                <div className="h-4 w-[1px] bg-gray-400"></div>
                <button className="flex items-center justify-center gap-x-2 rounded-full px-2 py-1 duration-200 hover:bg-gray-100">
                    <BsPencil className="text-gray-600" />
                    <span className="text-sm font-medium text-gray-600">
                        Kiriman
                    </span>
                </button>
            </div>
        </div>
    );
};

export default PostInput;
