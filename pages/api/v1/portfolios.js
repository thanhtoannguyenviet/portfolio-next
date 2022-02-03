import axios from "axios";
import PortfolioForm from "../../../components/PortfolioForm";
import PortfoliosApi from "../../../lib/api/portfolios";
import auth0 from "../../../utils/auth0";

export default async (req,res) =>{
    try{
        const {accessToken} = await auth0.getSession(req,res)
        const data = req.body
        const js = await new PortfoliosApi(accessToken).createPortfolios(data)
        return res.json(js.data)
    }catch (e){
        return res.status(e.status || 400).end(e.message)
    }
}