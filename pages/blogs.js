import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import {useGetUser} from "../actions/user";

export default function Blogs() {
    const {data,loading} = useGetUser()
    debugger
    return (
        <BaseLayout>
            <BasePage>
            <h1>Hi, Im Blogs</h1>
            </BasePage>
        </BaseLayout>
    )
}
