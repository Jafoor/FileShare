import React, {useEffect, useState} from "react";
import Layout from "../Layout";
import FileBase64 from 'react-file-base64';
import { useDispatch, useSelector } from "react-redux";
import { updatePost, getPost } from "../../state/Post/action";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";

const UpdatePost = ({ }) => {

    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const dispatch = useDispatch();
    const { id } = useParams();
    const { data, status } = useSelector( (state) => state.post);
    const clear = () => {
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(updatePost(postData, id));
        clear();
      };

    useEffect( () => {
        if(!data){
        dispatch(getPost(id));
        setInitialValue();
        };
    }, [data, id]);

    const setInitialValue = ( () => {
        setPostData(...data[0]);
    })
    if(status == 'loading'){
        return(
            <Layout>
                <Loader/>
            </Layout>
        )
    }
 else if(data && status == "idle"){
    
    return (
        <Layout>
            <form autoComplete="off" method="POST" onSubmit={handleSubmit}>
                <div className="flex items-center justify-center p-12">
                    <div className="mx-auto w-full max-w-[550px]">
                        <div className="mb-6">
                            <label for="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Creator</label>
                            <input name="creator" type="text" id="base-input" value={data[0].creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        </div>
                        <div className="mb-6">
                            <label for="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                            <input name="title" type="text" id="base-input" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        </div>
                        <div className="mb-6">
                            <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Message</label>
                            <input name="message" type="text" id="large-input" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        </div>
                        <div className="mb-6">
                            <label for="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tags</label>
                            <input name="tags" type="text" id="base-input" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        </div>
                        <div className="mb-6">
                            <label for="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Base input</label>
                            <FileBase64 type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                        </div>
    
                        <button type="submit" class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Submit </button>
                        <button class="bg-red-500 ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={clear}> Clear </button>
                    </div>
                    
                </div>
            </form>
        </Layout>
      );
 }

};

export default UpdatePost;