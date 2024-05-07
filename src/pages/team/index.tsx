import PlayerList from 'app/team/module/team-list';
import { NextPage } from 'next';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

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