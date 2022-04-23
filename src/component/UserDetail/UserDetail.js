const UserDetail = ({user}) =>{
    const{id, name, username, email} = user
    return(
        <div>
            {id}. <h2>{name}</h2>
            <h3>{username}</h3>
            <h3>{email}</h3>
        </div>
    )

}

export {UserDetail}