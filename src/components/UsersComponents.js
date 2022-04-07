export default function UsersComponents(props) {
    let {item:{id, name, email}} = props;
    return(
        <div>

            <h3>{id} {name}</h3>
            <p>{email}</p>

        </div>
    )
}