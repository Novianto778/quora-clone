import Image from 'next/image';
import React from 'react';
import { CiGlobe } from 'react-icons/ci';
import { FiChevronDown } from 'react-icons/fi';

type Props = {};

const RightMenu = (props: Props) => {
    return (
        <div className="flex items-center gap-x-4">
            <Image
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                width={24}
                height={24}
                alt="profile"
                className="hidden rounded-full md:block"
            />
            <CiGlobe size={24} className="hidden md:block" />
            <div className="flex items-center">
                <button className="rounded-full bg-quora-primary px-4 py-1.5 text-sm text-white md:rounded-l-full md:rounded-r-none">
                    Tambah Pertanyaan
                </button>
                <button className="hidden rounded-r-full bg-quora-primary px-2 py-1.5 text-sm text-white duration-300 hover:bg-red-800 md:flex">
                    <FiChevronDown size={20} />
                </button>
            </div>
        </div>
    );
};

export default RightMenu;
