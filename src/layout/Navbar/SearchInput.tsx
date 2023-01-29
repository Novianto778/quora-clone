import React from 'react';
import { FiSearch } from 'react-icons/fi';

type Props = {};

const SearchInput = (props: Props) => {
    return (
        <div className="relative hidden lg:flex">
            <div className="absolute left-2 flex h-full items-center">
                <FiSearch size={14} className="text-gray-light" />
            </div>
            <input
                placeholder="Cari Quora"
                className="flex h-full min-w-[300px] items-center rounded-sm border py-1.5 pl-7 text-xs outline-none duration-200 placeholder:text-xs hover:border-blue-400"
            />
        </div>
    );
};

export default SearchInput;
