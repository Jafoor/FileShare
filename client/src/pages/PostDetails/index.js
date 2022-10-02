import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getPost } from "../../state/Post/action";
import Loader from '../../components/Loader';
import Layout from "../Layout";

const PostDetails =  () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const { data, status } = useSelector( (state) => state.post);
    useEffect( () => {
        if(!data){
            dispatch(getPost(id));
        }
    },[data, id]); 

    
    if(status == 'loading'){
        return(
            <Layout>
                <Loader/>
            </Layout>
        )
    }else if(status === 'idle' && data){
        const post = data;
        return (
            <Layout>
                <section className="text-gray-600 body-font">
                  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                      <img className="object-cover object-center rounded" alt="hero" src={ post[0].selectedFile || "https://dummyimage.com/720x600"}/>
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{post[0].title}
                      </h1>
                      <p className="mb-8 leading-relaxed">{post[0].message}</p>
                      <div className="flex justify-center">
                      <svg class="w-6 h-6 text-red-600 fill-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        {/* <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
                      </div>
                    </div>
                  </div>
                </section>
            </Layout>
            
        )
    }
    
    }

export default PostDetails;
