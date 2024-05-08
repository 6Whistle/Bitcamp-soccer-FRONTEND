import { instance } from "config/axios-config"

export const getOnPositionKey = ['getOnPosition']
export const getOnPosition = async () => {
    const fetchData = {c: 'player',q: '2-dsl',page:1,size:5 ,sort:['position,asc']}
        const { data } = await instance().get(`/search`, { params : fetchData,paramsSerializer:{indexes : null,} })
    return data;
}

export const getOnPositionNotNullKey = ['getOnPositionNotNull']
export const getOnPositionNotNull = async () =>{
    const { data } = await instance().get('/search', {params : {c:'player',q:'3', oq:''}});
    return data
}

export const getOnPositionAndTeamIdKey = ['getOnPositionAndTeamId']
export const getOnPositionAndTeamId = async () =>{
    const { data } = await instance().get('/search', {params : {c:'player',q:'4', oq:''}});
    return data
}

export const getOnPositionAndTeamId2Key = ['getOnPositionAndTeamId2']
export const getOnPositionAndTeamId2 = async () =>{
    const { data } = await instance().get('/search', {params : {c:'player',q:'4-1', oq:''}});
    return data
}

export const getOnPositionAndTeamId7Key = ['getOnPositionAndTeamId7']
export const getOnPositionAndTeamId7 = async () =>{
    const { data } = await instance().get('/search', {params : {c:'player',q:'5', oq:''}});
    return data
}

export const getOnHeightAndWeightKey = ['getOnHeightAndWeight']
export const getOnHeightAndWeight = async () =>{
    const { data } = await instance().get('/search', {params : {c:'player',q:'5-1', oq:''}});
    return data
}

export const getOnPositionAndTeamId10Key = ['getOnPositionAndTeamId10']
export const getOnPositionAndTeamId10 = async () =>{
    const { data } = await instance().get('/search', {params : {c:'player',q:'6', oq:''}});
    return data
}

export const getPositionAndeRegionKey = ['getPositionAndeRegion']
export const getPositionAndeRegion = async () =>{
    const { data } = await instance().get('/search', {params : {c:'player',q:'7', oq:''}});
    return data
}

export const getOnCountAllKey = ['getOnCountAll']
export const getOnCountAll = async () =>{
    const { data } = await instance().get('/search', {params : {c:'player',q:'8', oq:''}});
    return data
}

export const getOnPositionAndTeamId20Key = ['getOnPositionAndTeamId20']
export const getOnPositionAndTeamId20 = async () =>{
    const { data } = await instance().get('/search', {params : {c:'player',q:'9', oq:''}});
    return data
}

export const getOnPositionAndTeamId21Key = ['getOnPositionAndTeamId21']
export const getOnPositionAndTeamId21 = async () =>{
    const { data } = await instance().get('/search', {params : {c:'player',q:'10', oq:''}});
    return data
}

export const getOnPositionAndTeamIdAndHeightKey = ['getOnPositionAndTeamIdAndHeight']
export const getOnPositionAndTeamIdAndHeight = async () =>{
    const { data } = await instance().get('/search', {params : {c:'player',q:'18', oq:''}});
    return data
}

export const getOnPositionAndTeamIdAndHeight2Key = ['getOnPositionAndTeamIdAndHeight2']
export const getOnPositionAndTeamIdAndHeight2 = async () =>{
    const { data } = await instance().get('/search', {params : {c:'player',q:'20', oq:''}});
    return data
}

export const getOnPositionAndHeightAndTeamIdKey = ['getOnPositionAndHeightAndTeamId']
export const getOnPositionAndHeightAndTeamId = async () =>{
    const { data } = await instance().get('/search', {params : {c:'player',q:'21', oq:''}});
    return data
}

export const getHeightAndTeamIdKey = ['getHeightAndTeamId']
export const getHeightAndTeamId = async () =>{
    const { data } = await instance().get('/search', {params : {c:'player',q:'22', oq:''}});
    return data
}
