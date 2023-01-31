import React from 'react';
import { BsArrowRepeat } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';
import { TbArrowBigDownLine, TbArrowBigUpLine } from 'react-icons/tb';

type Props = {};

const PostAction = (props: Props) => {
    return (
        <div>
            <div className="flex items-center gap-x-1 p-2 pb-1">
                <div className="flex">
                    <div className="flex items-center gap-x-1 rounded-full rounded-r-none bg-gray-lighter px-4 py-2 duration-300 hover:bg-gray-light">
                        <TbArrowBigUpLine
                            className="text-quora-blue"
                            size={24}
                        />
                        <p className="text-15 font-medium text-gray-dark">
                            1.2k
                        </p>
                    </div>
                    <div className="w-[0.5px] bg-gray-light"></div>
                    <div className="flex items-center gap-x-1 rounded-full rounded-l-none bg-gray-lighter px-4 py-2 duration-300 hover:bg-gray-light">
                        <TbArrowBigDownLine
                            className="text-gray-dark"
                            size={24}
                        />
                        {/* <p className="text-15 font-medium text-gray-dark">
                            1.2k
                        </p> */}
                    </div>
                </div>
                <div className="flex items-center gap-x-2 rounded-full px-4 py-2 duration-300 hover:bg-gray-light">
                    <FaRegComment size={20} className="text-gray-dark" />
                    <p className="text-15 font-medium text-gray-dark">39</p>
                </div>
                <div className="flex items-center gap-x-2 rounded-full px-4 py-2 duration-300 hover:bg-gray-light">
                    <BsArrowRepeat size={20} className="text-gray-dark" />
                    <p className="text-15 font-medium text-gray-dark">2</p>
                </div>
            </div>
        </div>
    );
};

export default PostAction;
