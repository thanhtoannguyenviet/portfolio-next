import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import withAuth from "../hoc/withAuth";

const Onlyadmin = ({user,loading})=>{
    return (
        <BaseLayout user={user} loading={loading}>
            <BasePage>
                <h1>Hello</h1>
            </BasePage>
        </BaseLayout>
    )
}
export default withAuth(Onlyadmin)('admin')