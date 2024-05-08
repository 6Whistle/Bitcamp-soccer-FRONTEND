import { instance } from "config/axios-config";

export const getStadiumNamesByDateRangeKey = ['getScheduleByDateDsl']

export const getStadiumNamesByDateRange = async () => {

    const fetchData = {c: 'schedule',q: '22',page:1,limit:5 ,sort:['stadium','asc']}
        const { data } = await instance().get(`/search`, { params : fetchData,paramsSerializer:{indexes : null,} })
    return data;
    }


