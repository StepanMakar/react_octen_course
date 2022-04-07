export default function PostsComponents(props) {
    let {item:{id, title, body}} = props;
    return(
        <div>

            <h3>{id} {title}</h3>
            <p>{body}</p>

        </div>
    )
}