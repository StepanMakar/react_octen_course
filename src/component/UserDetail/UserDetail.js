import {Button} from "../Button/button";

const UserDetail = ({user}) =>{
    const{id, name, username, email, address:{street, city}} = user
    return(
        <div>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Nick: {username}</div>
            <div>Email: {email}</div>
            <div>Street: {street}</div>
            <div>City: {city}</div>

            <Button to={'posts'}>Show User Post</Button>

        </div>


    )

}

export {UserDetail}