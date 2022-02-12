import BaseLayout from "../../../components/layouts/BaseLayout";
import {useRouter} from "next/router";
import axios from "axios";
import BasePage from "../../../components/BasePage";
import {useGetData, useGetDataById} from "../../../actions";
import PortfoliosApi from "../../../lib/api/portfolios";

export default function Dashboard({user,loading}){
    return(
        <BaseLayout user={user} loading={loading}>
            <BasePage header="DASHBOARD">
               <h1>Hello</h1>
            </BasePage>
        </BaseLayout>
    )
}
