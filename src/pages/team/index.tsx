
import { NextPage } from 'next';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import PlayerList from 'app/api/team/module/team-list';

const TeamPage: NextPage = ({data}: {data: {title: string}}) => {
  return <PlayerList />;
}

export async function getServerSideProps(){

    const queryClient = new QueryClient();
    const result = fetch("https://localhost:8080/api/search")

    return {
        props: {
            data: { title: 'Team List'}
        }
    }
}

export default TeamPage;