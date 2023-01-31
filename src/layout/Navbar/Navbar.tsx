import TextLogo from '@/assets/images/quora-text.svg';
import Image from 'next/image';
import Link from 'next/link';
import NavbarMenu from './NavbarMenu';
import RightMenu from './RightMenu';
import SearchInput from './SearchInput';

type Props = {};

const Navbar = (props: Props) => {
    return (
        <>
            <div className="fixed z-30 w-full bg-white shadow-sm">
                <div className="layout flex items-center justify-between">
                    <Link href="/" className="cursor-pointer">
                        <Image
                            src={TextLogo}
                            height={50}
                            alt="logo"
                            className="p-2 md:p-0"
                        />
                    </Link>
                    <NavbarMenu />
                    <SearchInput />
                    <RightMenu />
                </div>
            </div>
        </>
    );
};

export default Navbar;
