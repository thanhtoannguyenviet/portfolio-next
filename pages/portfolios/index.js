import BaseLayout from "../../components/layouts/BaseLayout";
import axios from "axios";
import Link from "next/link";
import BasePage from "../../components/BasePage";
import {useEffect, useState} from "react";
import {useGetData} from "../../actions";
import PortfoliosApi from "../../lib/api/portfolios";
import PortfolioCard from "../../components/PortfolioCard";
import {Col, Row} from "react-bootstrap";
import {useRouter} from "next/router";

export default function Portfolios({portfolios}) {
    const {data, error, loading} = useGetData()
    const router = useRouter()
    return (
        <BaseLayout>
            <BasePage header="Portfolio" className="portfolio-page">
                {loading && <p>Loading ...</p>}

                <Row>
                    {portfolios.map(post =>
                        <Col key={post._id} md="4" onClick={()=>{
                            router.push('portfolios/[id]',`portfolios/${post._id}`)
                        }}>
                            <PortfolioCard portfolio={post}/>
                        </Col>
                    )
                    }
                </Row>
                {error &&
                <div className="alert alert-danger}">{error.message}</div>

                }
            </BasePage>
        </BaseLayout>
    )
}

export async function getStaticProps() {
    const rs = await new PortfoliosApi().getAll()
    const portfolios = rs.data
    return {
        props: {portfolios}
    }
}