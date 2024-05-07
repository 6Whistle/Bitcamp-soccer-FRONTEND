import axios from "axios"
import { instance } from "config/axios-config";

export const stadiumNameWithTeamKey = ['stadiumNameWithTeam']
export const stadiumNameWithTeam = async () => {
    const { data } = await instance().get(`/search`, {params: {c: 'stadium', q:'11', oc: 'stadium', oq:''}});
    return data
}

export const stadiumAndTeamAndScheduleKey = ['stadiumAndTeamAndSchedule']
export const stadiumAndTeamAndSchedule = async () => {
    const fetchData = {c: 'stadium', q:'14', page:1, size:100, sort:['position', 'asc']}
    const { data } = await instance().get(`/search`, {params: fetchData, paramsSerializer: {indexes : null, }});
    return data
}

export const pohangSteelersGkKey = ['pohangSteelersGk']
export const pohangSteelersGk = async () => {
    const { data } = await instance().get(`/search`, {params: {c: 'stadium', q:'15', oc: 'stadium', oq:''}});
    return data
}

export const homeTeamWinKey = ['homeTeamWin']
export const homeTeamWin = async () => {
    const { data } = await instance().get(`/search`, {params: {c: 'stadium', q:'16', oc: 'stadium', oq:''}});
    return data
}

export const noHomeTeamKey = ['noHomeTeam']
export const noHomeTeam = async () => {
    const { data } = await instance().get(`/search`, {params: {c: 'stadium', q:'17', oc: 'stadium', oq:''}});
    return data
}