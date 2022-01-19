import {useGetUser} from "../actions/user";
import Redirect from "../components/shared/Redirect";

const withAuth = (Component) => (role) => {
    return props => {
        const {data,loading} = useGetUser()

        if(!data){
            return <Redirect ssr toUrl={'/api/auth/login'}/>
        } else {
            return <Component user={data} loading={loading} {...props}/>

        }
    }
}

export default withAuth;