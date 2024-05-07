import StadiumList from 'app/api/stadium/module/stadium-list';
import { NextPage } from 'next';
import { useEffect } from 'react';
import Home from 'templates/Home';

import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'
import { Title } from 'components/Heading/styles';
import { stadiumAndTeamAndSchedule, stadiumAndTeamAndScheduleKey, stadiumNameWithTeam, stadiumNameWithTeamKey } from 'app/api/stadium/service/stadium-service';


const StadiumPage: NextPage = ({ data }: any) => {

    useEffect(() => {
        console.log('useEffect data is')
        console.log(JSON.stringify(data))
    }, [])
    return <StadiumList />;
}

export async function getServerSideProps() {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(stadiumAndTeamAndScheduleKey, stadiumAndTeamAndSchedule)
    const data = queryClient.getQueriesData(stadiumAndTeamAndScheduleKey)
    console.log('my-info: stadium ssr data is')
    console.log(JSON.stringify(data))

    return {
        props: { data }
    }
}


export default StadiumPage;
