import {error} from "next/dist/build/output/log";
import auth0 from "../../../utils/auth0";

export default async function callback(req,res){
    try{
        await auth0.handleCallback(req,res,{Uri:'http://localhost:3000/'})
    }catch (e){
        console.log(e)
        res.status(e.status|| 400).end(e.message)
    }
}