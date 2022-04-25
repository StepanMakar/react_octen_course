import {useEffect, useState} from "react";
import {postService} from "../../servisec";
import {useParams} from "react-router-dom";
import {UserPost} from "../../component";


const PostsUserPage = () =>{

    const [singlePosts, setSinglePosts] = useState([])
    const {UserId} = useParams()
    useEffect(()=>{
        postService.getByUserId(UserId).then(({data}) => setSinglePosts(data))

    },[UserId])

    return(

        <div>
            <div>{singlePosts && singlePosts.map((singlePost) => <UserPost key={singlePost.id} singlePost={singlePost}/>)}  </div>

        </div>
    )
}
export {PostsUserPage}