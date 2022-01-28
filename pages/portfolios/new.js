import BaseLayout from "../../components/layouts/BaseLayout";
import BasePage from "../../components/BasePage";
import PortfolioForm from "../../components/PortfolioForm";
import {Col, Row} from "react-bootstrap";

export default function PortfolioNew({user, loading: userLoading}) {
    return (
        <BaseLayout user={user} loading={userLoading}>
            <BasePage header="Creat Portfolio">
                <Row>
                    <Col md="8">
                        <PortfolioForm></PortfolioForm>
                    </Col>
            </Row>
        </BasePage>
</BaseLayout>
)
}