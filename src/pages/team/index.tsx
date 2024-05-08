import { NextPage } from 'next';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { getTeams, getTeamsKey } from 'app/api/team/service/team-service';
import TeamList from 'app/api/team/module/team-list';
import { useEffect } from 'react';

const TeamPage: NextPage = (props: any) => {
    useEffect(() => {console.log(props)}, [])
  return <TeamList />;
}

export async function getServerSideProps(){

    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(getTeamsKey, getTeams)
    const data:any = queryClient.getQueryData(getTeamsKey)
    console.log("TEAM-INFO : " + data);

    return {
        props: { data }
    }
}

export default TeamPage;