import { useSession } from 'next-auth/react';
import React from 'react';

type Props = {};

const AdminPage = (props: Props) => {
    const { data: session, status } = useSession();
    return <div>AdminPage</div>;
};

export default AdminPage;
