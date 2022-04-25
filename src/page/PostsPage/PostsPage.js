import {useEffect, useState} from "react";
import {postService} from "../../servisec";
import {Post} from "../../component";
import {Outlet, useParams} from "react-router-dom";
import css from './postPage.module.css'


const PostsPage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() =>{
        postService.getAll().then(({data}) => setPosts(data))
        },
        [])

    return (
        <div className={css.post}>
            <div>{posts.map((post) => <Post key={post.id} post={post}/>)}</div>
<div><Outlet/></div>
        </div>
    )

}
export {PostsPage}
