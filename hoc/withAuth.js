import {useGetUser} from "../actions/user";
import Redirect from "../components/shared/Redirect";
import {isAuthorized} from "../utils/auth0";

const withAuth = (Component) => role => {
    return props => {
        const {data,loading} = useGetUser()
        if(!data){
            return <Redirect ssr toUrl={'/api/auth/login'}/>
        } else {
            // if(!isAuthorized(data,role)){
            //     return <Redirect ssr toUrl={'/api/auth/login'}/>
            // }
            return <Component user={data} loading={loading} {...props}/>

        }
    }
}

export default withAuth;