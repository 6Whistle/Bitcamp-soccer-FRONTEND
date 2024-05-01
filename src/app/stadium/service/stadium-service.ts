import axios from "axios"
import { instance } from "config/axios-config";

export const stadiumNameWithTeamKey = ['stadiumNameWithTeam']
export const stadiumNameWithTeam = async () => {
    const { data } = await instance().get(`/search`, {params: {q:'stadium', oq:'nameWithTeam'}});
    return data
}

export const stadiumAndTeamAndScheduleKey = ['stadiumAndTeamAndSchedule']
export const stadiumAndTeamAndSchedule = async () => {
    const { data } = await instance().get(`/search`, {params: {q:'stadium', oq:'teamAndSchedule'}});
    return data
}

export const pohangSteelersGkKey = ['pohangSteelersGk']
export const pohangSteelersGk = async () => {
    const { data } = await instance().get(`/search`, {params: {q:'stadium', oq:'pohangSteelersGk'}});
    return data
}

export const homeTeamWinKey = ['homeTeamWin']
export const homeTeamWin = async () => {
    const { data } = await instance().get(`/search`, {params: {q:'stadium', oq:'homeTeamWin'}});
    return data
}

export const noHomeTeamKey = ['noHomeTeam']
export const noHomeTeam = async () => {
    const { data } = await instance().get(`/search`, {params: {q:'stadium', oq:'noHomeTeam'}});
    return data
}