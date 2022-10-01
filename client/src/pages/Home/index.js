import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../state/Post/action";
import Layout from "../Layout";
import Post from "../Post";
import Loader from "../../components/Loader";

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch, currentId])
    
    
    const { data, status } = useSelector((state) => state.posts);


    if(status === 'loading'){
        <Layout>
                <Loader/>
        </Layout>
    }
    else{
    return(
        <Layout>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {data.map((item) => (
                            <Post post={item} setCurrentId={setCurrentId}/>
                        ))
                        }
                    </div>
                </div>
            </section>
        </Layout>
    )
                    }
};

export default Home;