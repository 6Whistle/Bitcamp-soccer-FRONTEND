import { instance } from "config/axios-config"

export const getOnPositionKey = ['repoData']
export const getOnPosition = async () => {
        const { data } = await instance().get(`/search`, { params : { "q": "player", "oq": "position" } })
    return data;
}


export const getOnPositionNotNullKey = ['getOnPositionNotNull']
export const getOnPositionNotNull = async () =>{
    const { data } = await instance().get('/search', {params : {q:'player', oq:''}});
    return data
}

export const getOnPositionAndTeamIdKey = ['getOnPositionAndTeamId']
export const getOnPositionAndTeamId = async () =>{
    const { data } = await instance().get('/search', {params : {q:'player', oq:''}});
    return data
}

export const getOnPositionAndTeamId2Key = ['getOnPositionAndTeamId2']
export const getOnPositionAndTeamId2 = async () =>{
    const { data } = await instance().get('/search', {params : {q:'player', oq:''}});
    return data
}

export const getOnPositionAndTeamId7Key = ['getOnPositionAndTeamId7']
export const getOnPositionAndTeamId7 = async () =>{
    const { data } = await instance().get('/search', {params : {q:'player', oq:''}});
    return data
}

export const getOnHeightAndWeightKey = ['getOnHeightAndWeight']
export const getOnHeightAndWeight = async () =>{
    const { data } = await instance().get('/search', {params : {q:'player', oq:''}});
    return data
}

export const getOnPositionAndTeamId10Key = ['getOnPositionAndTeamId10']
export const getOnPositionAndTeamId10 = async () =>{
    const { data } = await instance().get('/search', {params : {q:'player', oq:''}});
    return data
}

export const getOnCountAllKey = ['getOnCountAll']
export const getOnCountAll = async () =>{
    const { data } = await instance().get('/search', {params : {q:'player', oq:''}});
    return data
}

export const getOnPositionAndTeamId20Key = ['getOnPositionAndTeamId20']
export const getOnPositionAndTeamId20 = async () =>{
    const { data } = await instance().get('/search', {params : {q:'player', oq:''}});
    return data
}

export const getOnPositionAndTeamId21Key = ['getOnPositionAndTeamId21']
export const getOnPositionAndTeamId21 = async () =>{
    const { data } = await instance().get('/search', {params : {q:'player', oq:''}});
    return data
}

export const getOnPositionAndTeamIdAndHeightKey = ['getOnPositionAndTeamIdAndHeight']
export const getOnPositionAndTeamIdAndHeight = async () =>{
    const { data } = await instance().get('/search', {params : {q:'player', oq:''}});
    return data
}

export const getOnPositionAndTeamIdAndHeight2Key = ['getOnPositionAndTeamIdAndHeight2']
export const getOnPositionAndTeamIdAndHeight2 = async () =>{
    const { data } = await instance().get('/search', {params : {q:'player', oq:''}});
    return data
}

export const getOnPositionAndHeightAndTeamIdKey = ['getOnPositionAndHeightAndTeamId']
export const getOnPositionAndHeightAndTeamId = async () =>{
    const { data } = await instance().get('/search', {params : {q:'player', oq:''}});
    return data
}
