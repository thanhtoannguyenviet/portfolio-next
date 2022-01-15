import BaseLayout from "../../components/layouts/BaseLayout";
import axios from "axios";
import Link from "next/link";
import BasePage from "../../components/BasePage";
import {useEffect, useState} from "react";
import useGetData from "../../actions";
export default function Portfolios() {
    const {data,error,loading} = useGetData('/api/v1/posts')
    const renderPosts = (posts) => {
        return posts.map(post =>
            <li key={post.id}>
                <Link href={`/portfolios/${post.id}`}>
                    <a>{post.title}</a>
                </Link>

            </li>)
    }

    return (
        <BaseLayout>

            <BasePage>
            <h1>Hi, Im Portfolios</h1>
                {loading && <p>Loading ...</p>}
            { data &&
                <ul>{renderPosts(data)}</ul>
            }
            { error &&
                <div className="alert alert-danger}">{error.message}</div>

            }
            </BasePage>
        </BaseLayout>
    )
}

// Portfolios.getInitialProps = async () =>{
//     let posts = []
//     try {
//         const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
//         posts = res.data
//     }catch (e){
//         console.log(e.message)
//     }
//     return {posts: posts.slice(0,10)}
// }
