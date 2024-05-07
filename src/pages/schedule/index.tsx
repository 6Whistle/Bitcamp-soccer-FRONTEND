import ScheduleList from 'app/schedule/module/schedule-list';
import { NextPage } from 'next';


// export interface Props {
//     data: { title: string }
// };
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'


const SchedulePage: NextPage = ({ data }: any) => {
    return <ScheduleList />;
}

export async function getServerSideProps() {

    const queryClient = new QueryClient()
    const result = await fetch('https://api.github.com/repos/TanStack/query')
        .then((res) => res.json())


    return {
        props: {
            data: { title: result },
        },

    };


}


export default SchedulePage;
