import BaseLayout from "../../components/layouts/BaseLayout";
import {useRouter} from "next/router";
import axios from "axios";
import BasePage from "../../components/BasePage";
import useGetData from "../../actions";

export default function PortfolioDetail(){
    const router = useRouter()
    const {data: portfolio,error,loading} = useGetData(router.query.id?`/api/v1/posts/${router.query.id}`:null)
    return(
        <BaseLayout>
            <BasePage>
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
//
// PortfolioDetail.getInitialProps = async ({query}) =>{
//     let post = {}
//     try {
//         const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
//         post = res.data
//     }catch (e) {
//         console.log(e.message)
//     }
//     return {post:post}
// }