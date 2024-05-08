import axios, { AxiosInstance } from "axios"


export const instance = () => {
    const instance = axios.create({baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`})
    setInterceptor(instance)
    return instance
}

export const setInterceptor = (inputInstance:AxiosInstance) => {
    inputInstance.interceptors.request.use(
    (config) => {
        config.headers["Content-Type"] = "application/json"
        config.headers["Authorization"] = `Bearer blar~`
        return config
    }, (error) => {
        console.log("AXIOS INTERSEPTOR ERROR OCCURRED : " + error)
        return Promise.reject(error)
    })
    inputInstance.interceptors.response.use(
        (response) => {
            if(response.status === 404) console.log("AXIOS INTERSEPTOR CATCHES 404")
            return response
        }
    )

    return inputInstance
}