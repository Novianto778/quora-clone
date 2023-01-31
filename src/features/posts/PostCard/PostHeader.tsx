import Button from '@/shared/components/Button';
import Image from 'next/image';
import { BsThreeDots } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import PostHeaderDropdown from './PostHeaderDropdown';

type Props = {};

const PostHeader = (props: Props) => {
    return (
        <div className="flex items-center gap-x-2 px-4">
            <Image
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                width={36}
                height={36}
                alt="profile"
                className="hidden rounded-full md:block"
            />
            <div className="flex w-full flex-col">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <p className="text-13 font-medium text-black">
                            Nama Pengguna
                        </p>
                        <Button
                            variant="link"
                            size="sm"
                            className="text-quora-blue"
                        >
                            Ikuti
                        </Button>
                    </div>
                    <div className="flex items-center gap-x-6">
                        <PostHeaderDropdown />
                        <div
                            className="tooltip rounded-full p-2 duration-200 hover:bg-gray-light"
                            data-tip="Tidak tertarik dengan ini"
                        >
                            <IoMdClose />
                        </div>
                    </div>
                </div>
                <p className="text-13 text-gray-500">
                    Tinggal di Rumah (2002 - 2022) Rab
                </p>
            </div>
        </div>
    );
};

export default PostHeader;
