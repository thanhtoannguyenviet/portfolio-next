import BaseLayout from "../../../components/layouts/BaseLayout";
import {useRouter} from "next/router";
import BasePage from "../../../components/BasePage";
import dynamic from "next/dynamic";
import {Fragment, useState, useEffect} from "react";
let Editor = dynamic(()=>import("../../../components/Editor"),{ ssr:false})
export default function BlogEditor({user,loading}){
    const [imageArray, setImageArray] = useState([]) /* to keep track of uploaded image */
    let [editorInstance, setEditorInstance] = useState({}) /* to get the instance of editor.Js */
    const [editorData, setData] = useState(null) /* to store editorjs data from server or other source and show it in editor.js */
    const router = useRouter()
    useEffect(async () => {
        const {id} = router.query

        if (id) {
            /* Get article from server or other source */
            await getArticleDetails(id)
        }
    }, [])

    const getArticleDetails = async (id) => {
        const res = await ArticleAPI.getArticle(id)
        const resData = res.data.data

        /* parse string json to JSON */
        const editorData = JSON.parse(resData.description)

        for (const block of editorData.blocks) {
            if (block.type === 'image') {
                /* Get the image path and save it in image array for later comparison */
                addImages(block.data.file.url)
            }
        }

        setData(editorData)
    }

    /* add image to imageArray */
    function addImages(img) {
        imageArray.push(img)
    }

    /* remove image from imageArray */
    function removeImage(img) {
        const array = imageArray.filter(image => image !== img)
        setImageArray(array)
    }

    const handleInstance = (instance) => {
        setEditorInstance(instance)
    }

    const saveArticle = async (e) => {
        e.preventDefault()

        /* get the editor.js content and save it to server */
        const savedData = await editorInstance.save();

        const data = {
            description: JSON.stringify(savedData),
        }

        /* Clear all the unused images from server */
        await clearEditorLeftoverImages()

        /* Save article to server */
        createArticle(data)
    }

    /* This method will get the current images that are used by editor js,
    and images that stored in imageArray. It will compare and call server request to
    remove unused image */
    const clearEditorLeftoverImages = async () => {
        /* Get editorJs images */
        const currentImages = []
        document.querySelectorAll('.image-tool__image-picture')
            .forEach((x) => currentImages.push(x.src.includes("/images/") && x.src))

        if (imageArray.length > currentImages.length) {
            /* image deleted */
            for (const img of imageArray) {
                if (!currentImages.includes(img)) {
                    try {
                        /* delete image from backend */
                        await API.deleteImage({imagePath: img})
                        /* remove from array */
                        removeImage(img)
                    } catch (err) {
                        console.log(err.message)
                    }
                }
            }
        }
    }

    return(
        <BaseLayout user={user} loading={loading}>
            <BasePage header=" Blogs Editor">
                <Fragment>
                    <button onClick={saveArticle}> Save</button>
                    {Editor && <Editor handleInstance={handleInstance}
                                       data={editorData}
                                       imageArray={imageArray} />}
                </Fragment>
            </BasePage>
        </BaseLayout>
    )
}
