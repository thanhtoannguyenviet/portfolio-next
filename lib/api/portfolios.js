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
}
export default PortfoliosApi