import {useGetUser} from "../actions/user";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

import Redirect from "../components/shared/Redirect";
import withAuth from "../hoc/withAuth";
const Me = ({user,loading}) =>{
        return (
           <BaseLayout user={user} loading={loading}>
              <BasePage>
                <h1>Hello {user?.name}</h1>
              </BasePage>
           </BaseLayout>
        )
}
export default withAuth(Me)()