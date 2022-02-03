import BaseLayout from "../../components/layouts/BaseLayout";
import BasePage from "../../components/BasePage";
import PortfolioForm from "../../components/PortfolioForm";
import {Col, Row} from "react-bootstrap";
import {useState} from "react";
import {useCreatePortfolios} from "../../actions/portfolios";

export default function PortfolioNew({user, loading: userLoading}) {
    const [createPortfolio,{data,loading,error}] = useCreatePortfolios()
    const _createPortfolio = (data) => {
        createPortfolio(data)
    }

    return (
        <BaseLayout user={user} loading={userLoading}>
            <BasePage header="Creat Portfolio">
                <Row>
                    <Col md="8">
                        <PortfolioForm onSubmit={_createPortfolio} ></PortfolioForm>
                    </Col>
            </Row>
        </BasePage>
</BaseLayout>
)
}