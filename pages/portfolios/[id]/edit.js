import BaseLayout from "../../../components/layouts/BaseLayout";
import {useRouter} from "next/router";
import BasePage from "../../../components/BasePage";
import PortfolioForm from "../../../components/PortfolioForm";
import {Row, Col} from "react-bootstrap";
import {useGetPortfolios, useUpdatePortfolios} from "../../../actions/portfolios";
import {toast} from "react-toastify";

export default function PortfolioEdit({user}){
    const router = useRouter()

    const [updatePortfolio,{data,error,loading}] =  useUpdatePortfolios()
    const {data: initialData} =  useGetPortfolios(router.query.id)
    //useGetData(router.query.id?`/api/v1/posts/${router.query.id}`:null)
    const _updatePortfolio = async (data) => {
        try{
            await updatePortfolio(router.query.id, data);
            toast.success('Portfolio has been updated!')
        }catch (e) {
            toast.error('Error : '+e)
        }

    }
    return(
        <BaseLayout user={user} loading={false}>
            <BasePage header="Portfolio Edit">
                <Row>
                    <Col md="8">
                        {initialData && <PortfolioForm
                            initialData = {initialData}
                            onSubmit={_updatePortfolio}
                        />}
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}


// export default withAuth(PortfolioEdit)();