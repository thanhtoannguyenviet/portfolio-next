import {useEffect, useState} from "react";

const useGetData = (url) =>{
    const [data,setData] = useState([])
    const [error,setError] = useState()
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        async function fetchData(){
            const res = await fetch(url)
            const rs = await res.json()
            if(res.status !== 200){
                setError(rs)
            }else{
                setData(rs)
            }
            setLoading(false)
        }
        url && fetchData()
    },[url])
    return {data,error,loading}
}
export default useGetData