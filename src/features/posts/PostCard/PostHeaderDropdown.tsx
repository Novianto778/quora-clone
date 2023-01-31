import React, { useEffect, useState } from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { BsBookmark, BsThreeDots } from 'react-icons/bs';
import { TbArrowBigDownLine, TbNotesOff } from 'react-icons/tb';

type Props = {};

const PostHeaderDropdown = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = React.useRef<HTMLDivElement>(null);

    return (
        <>
            <div
                className="dropdown-end dropdown tooltip select-none rounded-full p-2 duration-200 hover:bg-gray-light"
                tabIndex={0}
                data-tip="Lainnya"
                ref={dropdownRef}
                onBlur={(e) => {
                    setIsOpen(false);
                }}
                onClick={(e) => {
                    if (isOpen) {
                        setIsOpen(false);
                    } else {
                        setIsOpen(true);
                    }
                }}
            >
                <BsThreeDots />

                <ul
                    tabIndex={0}
                    className="dropdown-content menu w-52 rounded-sm bg-white py-1 shadow"
                    onBlur={(e) => {
                        dropdownRef?.current?.focus();
                    }}
                    onFocus={(e) => {
                        setIsOpen(true);
                    }}
                    style={{ display: isOpen ? 'block' : 'none' }}
                >
                    <li className="group p-0">
                        <a className="flex gap-x-1 text-black group-hover:underline">
                            <AiOutlineLink />
                            <span className="text-13">Salin tautan</span>
                        </a>
                    </li>
                    <li className="group p-0">
                        <a className="flex gap-x-1 text-black group-hover:underline">
                            <TbNotesOff />
                            <span className="text-13">
                                Tidak tertarik dengan ini
                            </span>
                        </a>
                    </li>
                    <li className="group p-0">
                        <a className="flex gap-x-1 text-black group-hover:underline">
                            <BsBookmark />
                            <span className="text-13">Simpan</span>
                        </a>
                    </li>
                    <li className="group p-0">
                        <a className="flex gap-x-1 text-black group-hover:underline">
                            <TbArrowBigDownLine />
                            <span className="text-13">
                                Dorong turun pertanyaan
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default PostHeaderDropdown;
