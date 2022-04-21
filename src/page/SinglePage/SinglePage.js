import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../servisec";
import {PostDetail} from "../../component";

const SinglePage = () => {
    const {state} = useLocation() //заміняє юс стейт і юс ефект, передаючи через стейт(в нього ми поклали інфу про пост) який ми прописали в лінці і витягнули через хук юс локейшн. Канє лише коли переходити по лінкам const {state: post} = useLocation() працює без юс ефекту і стейту але по лінках
    const[post, setPost]=useState(state)

    const {id} = useParams()
     useEffect(() =>{
         if(!state){
             postService.getById(id).then(({data}) => setPost(data))
         }else {
             setPost(state)
         }

     },[id,state])
    return (

        <div>
            {post && <PostDetail post={post}/>}
        </div>
    )

}
export {SinglePage}
