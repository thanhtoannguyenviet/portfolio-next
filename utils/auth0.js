import { initAuth0 } from '@auth0/nextjs-auth0';

const auth0 = initAuth0({
    baseURL: process.env.AUTH0_BASE_URI,
    issuerBaseURL: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENTID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    secret: process.env.AUTH0_COOKIE_SECRET,
});
export default auth0

export const authorizeUser = async (req,res) => {
    const session = await auth0.getSession(req,res);
    if(!session|| !session.user){
        res.writeHead(302,{
            Location: '/api/v1/login'
        })
        res.end()
        return {props:{}}
    }
    return{
        props: {user: session.user}
    }
}

export const withAuth = (getData) => async({req,res}) =>{
    const session = await auth0.getSession(req,res);
    if(!session|| !session.user){
        res.writeHead(302,{
            Location: '/api/v1/login'
        })
        res.end()
        return {props:{}}
    }
    const data = getData ? await getData({req,res},session.user) : {}
    return{
        props: {user: session.user,...data}
    }
}