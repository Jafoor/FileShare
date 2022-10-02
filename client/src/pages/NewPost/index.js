import React, {useState} from "react";
import Layout from "../Layout";
import FileBase64 from 'react-file-base64';
import { useDispatch } from "react-redux";
import { createPost } from "../../state/Post/action";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const NewPost = ({ }) => {

    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const dispatch = useDispatch();
    const clear = () => {
        // setCurrentId(0);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        dispatch(createPost(postData));
        clear();
        // if (currentId === 0) {
        //   dispatch(createPost(postData));
        //   clear();
        // } else {
        //   dispatch(updatePost(currentId, postData));
        //   clear();
        // }
      };

  return (
    <Layout>
        <form autoComplete="off" method="POST" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px]">
                    <div className="mb-6">
                        <label for="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Creator</label>
                        <input name="creator" type="text" id="base-input" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                    <div className="mb-6">
                        <label for="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                        <input name="title" type="text" id="base-input" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>

                    

                    <div className="mb-6">
                        <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Message</label>
                        <ReactQuill className="h-80 scroll-m-0" name="message" theme="snow" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                        {/* <input name="message" type="text" id="large-input" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/> */}
                    </div>
                    <div className="mb-6 mt-20">
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
};

export default NewPost;