import axios from "axios";

class PortfoliosApi{
    constructor(accessToken) {
        this.config ={}
        if(accessToken){
            this.config.headers = {
                authorization: `Bearer ${accessToken}`
            }
        }
        this.apiUrl = process.env.PORTFOLIO_API_URL + '/portfolios'
    }
    getAll(){
        return axios.get(this.apiUrl)
    }
    getById(id){
        return axios.get(`${this.apiUrl}/${id}`)
    }
    createPortfolios(data){
        return axios.post(`${this.apiUrl}`,data, this.config)
    }
    updatePortfolio(id,data){
        return axios.patch(`${this.apiUrl}/${id}`,data,this.config)
    }
    delete(id){
        return axios.delete(`${this.apiUrl}/${id}`,this.config)
    }
}
export default PortfoliosApi