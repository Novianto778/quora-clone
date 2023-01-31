import Image from 'next/image';
import React from 'react';

type Props = {
    onFullMode: () => void;
};

const PreviewContentMode = ({ onFullMode }: Props) => {
    return (
        <>
            <div className="relative px-4 py-4">
                <p className="clip-text text-13 text-black">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Blanditiis, quam! Provident possimus facilis, consequatur,
                    voluptatum molestias non quisquam esse doloremque ad animi
                    pariatur. Quibusdam nisi placeat illo, error ratione
                    mollitia?
                </p>
                <div className="absolute right-2 bottom-4">
                    <span className="inline-block h-4 w-8 translate-y-1 bg-white opacity-80"></span>
                    <span
                        onClick={onFullMode}
                        className="relative z-10 inline-block cursor-pointer bg-white text-13 text-quora-blue hover:underline"
                    >
                        (lanjut)
                    </span>
                </div>
            </div>
            <div className="relative flex w-full justify-center pt-[100%]">
                <Image
                    src="https://picsum.photos/id/237/300/300"
                    alt="post image"
                    fill
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </div>
        </>
    );
};

export default PreviewContentMode;
