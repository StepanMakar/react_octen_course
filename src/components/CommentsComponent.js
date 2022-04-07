export default function CommentsComponents(props) {
    let {item:{id, name, email,body}} = props;
    return(
        <div>

            <h3>{id} {name}</h3>
            <h4>{email}</h4>
            <p>{body}</p>

        </div>
    )
}