import React, {useEffect, useState} from "react";
import {getComments} from "../services/CommentsServices";
import CommentsComponents from "./CommentsComponent";

export const Comments = () => {
    let [Comments, setPosts] = useState([])
    useEffect(() =>{
        getComments().then(value => setPosts(value));
    }, [])



    return (
        <div>
            {
                Comments.map(value => <CommentsComponents key={Comments.id} item={value}/>).slice(0,10)
            }
        </div>
    );
};
export default Comments;