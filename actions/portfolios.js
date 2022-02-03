import axios from "axios";
import {useState} from "react";

function createPortfolios(data){
    axios.post('/api/v1/portfolios',data)
}

export function useCreatePortfolios(){
    const [requestState,setRequestState] = useState({
        error: null,
        data: null,
        loading: false
    })
    const createPortfolioHandler = async (...data) => {
        setRequestState({error: null, data: null,loading: true})
        try{
            const json = await createPortfolios(...data)
            setRequestState({error: null, data: jsoon.data,loading: false})
        }
        catch (e){
            const mess = (e.response && e.response.message) || 'Oops,something went wrong...'
            setRequestState({error: mess, data: null,loading: false})
        }
    }
    return [createPortfolioHandler,{...requestState}]
}