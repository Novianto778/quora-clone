import React from 'react';
import { useRouter } from 'next/router';

type Props = {
    spaceslug: string;
};

const SpacePage = ({ spaceslug }: Props) => {
    console.log(spaceslug);

    return <div className="layout">{spaceslug}</div>;
};

export default SpacePage;

export async function getServerSideProps({
    params,
}: {
    params: { spaceslug: string };
}) {
    const { spaceslug } = params;

    return {
        props: {
            spaceslug,
        },
    };
}
