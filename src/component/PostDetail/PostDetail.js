

const PostDetail = ({post}) => {
    const { id, userId, title, body} = post
    return(
        <div>

            <div>{id}</div>
            <div>{title}</div>
            <div>{userId}</div>
            <div>{body}</div>



        </div>
    )
}
export {PostDetail}