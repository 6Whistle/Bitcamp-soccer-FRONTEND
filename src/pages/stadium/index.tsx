import StadiumList from 'app/stadium/module/stadium-list';
import { NextPage } from 'next';
import { useEffect } from 'react';
import Home from 'templates/Home';

import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'

const StadiumPage: NextPage = ({ data }: any) => {

    useEffect(() => {
        console.log(data)
    }, [])
    return <StadiumList />;
}

export async function getServerSideProps() {
    const queryClient = new QueryClient()

    const result = await fetch('https://api.github.com/repos/TanStack/query')

    return {
        props: { data: result }
    }
}


export default StadiumPage;
