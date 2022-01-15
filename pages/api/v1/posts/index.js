import axios from "axios";

export default async (req,res)=>{
    let posts = []
    try {
        const apiRes = await axios.get("https://jsonplaceholder.typicode.com/posts")
        posts = apiRes.data
        res.status(200).json(posts.slice(0,10))
    }catch (e){
        console.log(e.message)
        res.status(e.status || 400).json({message:'Api Error'})
    }
}