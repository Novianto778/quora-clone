import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
    url: string;
    name: string;
    imageUrl: string;
};

const RuangList = ({ url, name, imageUrl }: Props) => {
    return (
        <Link
            href={url}
            className="flex items-start gap-x-2 px-2 py-1.5 duration-200 hover:bg-gray-200"
        >
            <Image
                src={imageUrl}
                width={20}
                height={20}
                alt="profile"
                className="rounded-lg"
            />
            <p className="text-left text-13 leading-4 text-gray-600">{name}</p>
        </Link>
    );
};

export default RuangList;
