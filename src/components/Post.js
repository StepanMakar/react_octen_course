import React, {useEffect, useState} from "react";
import {getPost} from "../services/PostsServices";
import PostComponents from "./PostComponent";

export const Posts = () => {
    let [Posts, setPosts] = useState([])
    useEffect(() =>{
        getPost().then(value => setPosts(value));
    }, [])



    return (
        <div>
            {
                Posts.map(value => <PostComponents key={Posts.id} item={value}/>).slice(0,10)
            }
        </div>
    );
};
export default Posts;