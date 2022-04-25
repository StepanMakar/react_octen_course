const UserPost = ({singlePost}) =>{
const {  title, body } = singlePost
    return(
        <div>
             {title}
            {body}
        </div>
    )
}

export{UserPost}