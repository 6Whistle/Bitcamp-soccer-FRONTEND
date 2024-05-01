import { instance } from "config/axios-config"

export const getHeightAvgByTeamKey = ['getHeightAvgByTeam']
export const getHeightAvgByTeam = async () => (await instance().get(`/search`, { params : { "c": "team", "q": "1", "oq": "" } })).data


export const getTeamsKey = ['getTeams']
export const getTeams = async () => (await instance().get(`/search`, { params : { "c": "team", "q": "12", "oq": "" } })).data

export const getNotSelectedPostionKey = ['getNotSelectedPostion']
export const getNotSelectedPostion = async () => (await instance().get(`/search`, { params : { "c": "team", "q": "13", "oq": "" } })).data

export const getTeamsByteamNameKey = ['getTeamsByteamName']
export const getTeamsByteamName = async () => (await instance().get(`/search`, { params : { "c": "team", "q": "19", "oq": "" } })).data

