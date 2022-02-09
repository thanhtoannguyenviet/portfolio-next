import axios from "axios";
import {fetcher, useApiHandler} from "./index";
import useSWR from "swr";

const createPortfolios = (data) => axios.post('/api/v1/portfolios',data)
const updatePortfolios = (id,data) => axios.patch(`/api/v1/portfolios/${id}`,data)

export const useCreatePortfolios = () => useApiHandler(createPortfolios)
export const useUpdatePortfolios = () => useApiHandler(updatePortfolios)
export const useGetPortfolios = (id) => {
    const {data,error, ...rest} = useSWR(id? `/api/v1/portfolios/${id}`:null,fetcher)
    return {data,error, loading: !data && !error,...rest}
}