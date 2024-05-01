import { instance } from "config/axios-config";

export const findStadiumNamesByDateRangeKey = ['getScheduleByDate']

export const findStadiumNamesByDateRange = async () => {
    const { data } = await instance().get('/search',
    {params:{c:'schedule',q:'22',oq:''}});

     return data
    }


