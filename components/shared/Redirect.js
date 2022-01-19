import {useRouter} from "next/router";
import {useEffect} from "react";


const Redirect = ({toUrl,ssr}) =>{
    const router = useRouter()

    useEffect(()=>{
        if (ssr){
            window.location.pathname = to;
        }
        else router.push(toUrl)
    },[])
    return null
}

export default Redirect;