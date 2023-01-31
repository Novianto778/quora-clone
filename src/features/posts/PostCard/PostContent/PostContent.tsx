import Image from 'next/image';
import React, { useState } from 'react';
import FullContentMode from './FullContentMode';
import PreviewContentMode from './PreviewContentMode';

type Props = {
    isFullMode?: boolean;
};

const PostContent = ({ isFullMode = false }: Props) => {
    const [isFull, setIsFull] = useState(isFullMode);
    const handleFullMode = () => {
        setIsFull(true);
    };
    return (
        <>
            {isFull ? (
                <FullContentMode />
            ) : (
                <PreviewContentMode onFullMode={handleFullMode} />
            )}
        </>
    );
};

export default PostContent;
