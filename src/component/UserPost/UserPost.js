const UserPost = ({singlePost}) =>{
const { userId ,title, body } = singlePost
    return(
        <div>

             {title}
            {body}
            <hr/>
        </div>
    )
}

export{UserPost}