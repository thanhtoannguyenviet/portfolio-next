import useSWR from "swr"
import axios from "axios";
import {useState} from "react";

export const fetcher = (url)=> fetch(url).then(async res=> {
    const rs = await res.json()
    if (res.status!== 200){
        return Promise.reject(rs)
    }else{
        return rs;
    }
})

export const useGetData = () => {
    const {data,error,...rest} = useSWR('/api/v1/posts',fetcher)
    return {data,error,loading:!data && !error,...rest}
}
export const useGetDataById = (id) => {
    const {data,error,...rest} = useSWR('/api/v1/posts/'+id,fetcher)
    return {data,error,loading:!data && !error,...rest}
}
export function useApiHandler(apiCall) {
    const [reqState, setReqState] = useState({
        error: null,
        data: null,
        loading: false
    });

    const handler = async (...data) => {
        setReqState({error: null, data: null, loading: true});
        try {
            const json = await apiCall(...data);
            setReqState({error: null, data: json.data, loading: false});
            return json.data;
        } catch(e) {
            const message = (e.response && e.response.data) || 'Ooops, something went wrong...';
            setReqState({error: message, data: null, loading: false});
            return Promise.reject(message);
        }
    }

    return [handler, {...reqState}]
}