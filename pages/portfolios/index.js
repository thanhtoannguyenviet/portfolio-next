import BaseLayout from "../../components/layouts/BaseLayout";
import axios from "axios";
import Link from "next/link";
import BasePage from "../../components/BasePage";
import {useEffect, useState} from "react";
import {useGetData} from "../../actions";
import PortfoliosApi from "../../lib/api/portfolios";
import PortfolioCard from "../../components/PortfolioCard";
import {Button, Col, Row} from "react-bootstrap";
import {useRouter} from "next/router";
import {useGetUser} from "../../actions/user";
import {useDeletePortfolios} from "../../actions/portfolios";

export default function Portfolios({portfolios: initialPortfolios}) {
    const { data: dataU, loading } = useGetUser();
    const [deletePortfolio,{data,error}] = useDeletePortfolios()
    const router = useRouter()
    const [portfolios,setPortfolios] = useState(initialPortfolios)
    const _deletePortfolio = async (e,portfolioId) => {
        e.stopPropagation()
        const isConfirm = confirm('Are you sure you want to delete this portfolio')
        if(isConfirm){
            await deletePortfolio(portfolioId)
            setPortfolios(portfolios.filter((portfolio)=> portfolio._id !== portfolioId))
        }

    }
    return (
        <BaseLayout>
            <BasePage header="Portfolio" className="portfolio-page">
                {loading && <p>Loading ...</p>}

                <Row>
                    {portfolios.map(post =>
                        <Col key={post._id} md="4"
                             onClick={()=>{router.push('portfolios/[id]',`portfolios/${post._id}`)}}
                        >
                            <PortfolioCard portfolio={post}>
                                {dataU &&<>
                                    <Button variant="warning" className="mr-2"
                                        onClick={(e)=>{
                                            e.stopPropagation()
                                            router.push('/portfolios/[id]/edit', `/portfolios/${post._id}/edit`)
                                        }}
                                    >Edit</Button>
                                    <Button variant="danger"
                                        onClick={(e)=>_deletePortfolio(e,post._id)}
                                    >Delete</Button>
                                </>}
                            </PortfolioCard>
                        </Col>
                    )
                    }
                </Row>
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