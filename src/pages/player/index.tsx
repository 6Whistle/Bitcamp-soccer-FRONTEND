import PlayerList from 'app/api/player/module/player-list';
import { NextPage } from 'next';
import Home from 'templates/Home';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { getOnPosition, getOnPositionKey } from 'app/api/player/service/player-service';
import { useEffect } from 'react';



const PlayerPage : NextPage = ({data} :  any) => {
  useEffect(()=> {
    console.log('my-info : player page ssr data is useEffect')
  console.log(JSON.stringify(data));
  },[])
  return <PlayerList />;
}

export async function getServerSideProps() {

  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(getOnPositionKey, getOnPosition)
  const data = queryClient.getQueryData(getOnPositionKey)
  console.log('my-info : player page ssr data is')
  console.log(JSON.stringify(data));
   
  return {
    props:{ data},
  };
}

export default PlayerPage;
