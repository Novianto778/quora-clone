import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import RuangList from './RuangList';

type Props = {};

const RuangSidebar = (props: Props) => {
    return (
        <>
            <div className="custom-scrollbar fixed h-[80vh] w-full max-w-[inherit] overflow-auto pr-1">
                <button className="flex w-full items-center gap-x-2 rounded bg-gray-light px-2 py-1.5 duration-300 hover:bg-gray-200">
                    <AiOutlinePlus className="rounded-full bg-gray-200 p-0.5 text-gray-600" />
                    <span className="text-sm text-gray-600">Buat Ruang</span>
                </button>
                <div className="mt-4 flex flex-col gap-y-4">
                    {[...new Array(10)].map((_, i) => (
                        <RuangList
                            key={i}
                            url="/space/richdadmindset"
                            imageUrl="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                            name="Rich Dad Mindset"
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default RuangSidebar;
