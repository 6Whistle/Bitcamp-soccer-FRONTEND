import ScheduleList from 'app/api/schedule/module/schedule-list';

import { NextPage } from 'next';

// export interface Props {
//     data: { title: string }
// };
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'
import { getStadiumNamesByDateRange, getStadiumNamesByDateRangeKey } from 'app/api/schedule/service/schedul-service';


const SchedulePage: NextPage = ({ data }: any) => {
    return <ScheduleList />;
}

export async function getServerSideProps() {

    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(getStadiumNamesByDateRangeKey, getStadiumNamesByDateRange)

    const data = queryClient.getQueryData(getStadiumNamesByDateRangeKey)

    console.log('MT-INFO : SchedulPage SSR data is ')
    
    console.log(JSON.stringify(data))
   
   
    return {
        props: { data },

    };


}


export default SchedulePage;
