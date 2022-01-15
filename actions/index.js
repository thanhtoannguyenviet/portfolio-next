import useSWR from "swr"

const fetcher = (url)=> fetch(url).then(res=> {
    const rs = res.json()
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

// import {useEffect, useState} from "react";
//
// const useGetData = (url) =>{
//     const [data,setData] = useState([])
//     const [error,setError] = useState()
//     const [loading,setLoading] = useState(true)
//     useEffect(()=>{
//         async function fetchData(){
//             const res = await fetch(url)
//             const rs = await res.json()
//             if(res.status !== 200){
//                 setError(rs)
//             }else{
//                 setData(rs)
//             }
//             setLoading(false)
//         }
//         url && fetchData()
//     },[url])
//     return {data,error,loading}
// }
// export default useGetData