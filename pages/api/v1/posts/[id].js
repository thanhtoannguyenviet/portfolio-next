import axios from "axios";

export default async (req,res)=>{
    try {
        const apiRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${req.query.id}`)
        const post = apiRes.data
        res.status(200).json(post)
    }catch (e){
        console.log(e.message)
        res.status(e.status || 400).json({message:'Api Error'})
    }
}