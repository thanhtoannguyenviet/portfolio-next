import BaseLayout from "../../components/layouts/BaseLayout";
import BasePage from "../../components/BasePage";
import PortfolioForm from "../../components/PortfolioForm";
import {Col, Row} from "react-bootstrap";
import {useState} from "react";
import {useCreatePortfolios} from "../../actions/portfolios";
import Redirect from "../../components/shared/Redirect";
import withAuth from "../../hoc/withAuth";

export default function PortfolioNew({user, loading: userLoading}){
    const [createPortfolio,{data,loading,error}] = useCreatePortfolios()
        // if (data) {
        //     return <Redirect toUrl="/portfolios"/>}
    return (
        <BaseLayout user={user} loading={userLoading}>
            <BasePage header="Creat Portfolio">
                <Row>
                    <Col md="8">
                        <PortfolioForm onSubmit={createPortfolio} ></PortfolioForm>
                        {error && <div className="alert alert-danger mt-2">{error}</div>}
                    </Col>
            </Row>
        </BasePage>
</BaseLayout>
)
}
// export default withAuth(PortfolioNew)();