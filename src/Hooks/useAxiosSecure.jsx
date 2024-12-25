import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
})

const useAxiosSecure = () => {
    const { handleSignOut } = useAuth()

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response
        }, error => {
            console.log(error)

            if(error.status === 401 || error.status === 403){
                // console.log('need to log out')
                handleSignOut()
                .then((res)=>{})
                .catch((err)=>{})
            }
            return Promise.reject(error)
        })
    },[])

    return axiosInstance
};

export default useAxiosSecure;