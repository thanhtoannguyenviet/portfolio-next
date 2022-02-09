import BaseLayout from "../../../components/layouts/BaseLayout";
import {useRouter} from "next/router";
import axios from "axios";
import BasePage from "../../../components/BasePage";
import {useGetData, useGetDataById} from "../../../actions";
import PortfoliosApi from "../../../lib/api/portfolios";

export default function PortfolioDetail({portfolio}){
    const router = useRouter()
    const {data: dateU,error,loading} =  useGetData()
        //useGetData(router.query.id?`/api/v1/posts/${router.query.id}`:null)
    return(
        <BaseLayout user={dateU} loading={loading}>
            <BasePage header="Portfolio Detail">
                {loading && <p>Loading data...</p>}
                {error && <div className="alert alert-danger">{error.message}</div>}
                {portfolio &&
                <>
                    <h1>{portfolio.title}</h1>
                    <p>{portfolio.body}</p>
                    <h4>{portfolio.id}</h4>
                </>
                }
            </BasePage>
        </BaseLayout>
    )
}

export async function getStaticProps({params}) {
    const rs = await new PortfoliosApi().getById(params.id)
    const portfolio = rs.data
    return {
        props: {portfolio}
    }
}

export async function getStaticPaths(){
    const rs = await new PortfoliosApi().getAll()
    const portfolios = rs.data
    const paths = portfolios.map(portfolio=>{
        return {
            params: {id:portfolio._id}
        }
    })
    return {paths, fallback:true}
}