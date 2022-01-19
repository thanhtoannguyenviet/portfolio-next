import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import auth0, {authorizeUser,withAuth} from "../utils/auth0";

const SecretSSR = ({user,title}) => {
    return(
        <BaseLayout user={user} loading={false}>
            <BasePage>
                <h1>Hello {user?.name}</h1>
                <h2>{title}</h2>
            </BasePage>
        </BaseLayout>

    )
}
// export const getServerSideProps = async ({req,res}) => {
//     const user = await authorizeUser(req,res);
//     return {
//         props: {user}
//     }
// }
const getTitle = () =>{
    return new Promise((res)=>{
        setTimeout(()=>{
            res({title:'My New Title!'})
        },500)
    })
}
export const getServerSideProps = withAuth( async ({req,res},user) =>{
    const title = await getTitle();
    return title
})

export default SecretSSR;