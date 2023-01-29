import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsPencilSquare } from 'react-icons/bs';
import { CiViewList } from 'react-icons/ci';
import { IoNotificationsOutline } from 'react-icons/io5';
import { MdHome, MdPeople } from 'react-icons/md';

type Props = {};

const NavbarMenuLink = [
    {
        name: 'Beranda',
        icon: MdHome,
        link: '/',
    },
    {
        name: 'Mengikuti',
        icon: CiViewList,
        link: '/following',
    },
    {
        name: 'Jawab',
        icon: BsPencilSquare,
        link: '/answer',
    },
    {
        name: 'Ruang',
        icon: MdPeople,
        link: '/room',
    },
    {
        name: 'Notifikasi',
        icon: IoNotificationsOutline,
        link: '/notification',
    },
];

const NavbarMenu = (props: Props) => {
    const router = useRouter();
    return (
        <>
            <div className="flex items-center gap-x-2 md:gap-x-6">
                {NavbarMenuLink.map((item, index) => {
                    const isActive = router.pathname === item.link;
                    return (
                        <Link
                            href={item.link}
                            key={index}
                            className={`group relative ${
                                isActive
                                    ? "after:absolute after:bottom-0 after:h-0.5 after:w-full after:bg-quora-primary after:content-['']"
                                    : ''
                            }`}
                        >
                            <item.icon
                                size={40}
                                className={`px-2 ${
                                    isActive
                                        ? 'text-quora-primary'
                                        : 'text-gray-800'
                                }`}
                            />
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 scale-y-0 rounded-full bg-white px-1.5 py-0.5 text-xs duration-300 group-hover:h-auto group-hover:scale-100 group-hover:delay-300">
                                {item.name}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default NavbarMenu;
