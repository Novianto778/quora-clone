import TextLogo from '@/assets/images/quora-text.svg';
import IconLogo from '@/assets/images/quora-icon.svg';
import useMediaQuery from '@/shared/hooks/useMediaQuery';
import Image from 'next/image';
import Link from 'next/link';
import NavbarMenu from './NavbarMenu';
import RightMenu from './RightMenu';
import SearchInput from './SearchInput';

type Props = {};

const Navbar = (props: Props) => {
    const matches = useMediaQuery('(min-width: 768px)');
    return (
        <>
            <div className="z-30 w-full bg-white shadow-sm">
                <div className="mx-auto flex max-w-5xl items-center justify-between">
                    <Link href="/" className="cursor-pointer">
                        <Image
                            src={matches ? TextLogo : IconLogo}
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
