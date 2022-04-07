import React, {useEffect, useState} from "react";
import {getUsers} from "../services/UserService";
import UsersComponents from "./UsersComponents";

export const Users = () => {
    let [users, setUsers] = useState([])
    useEffect(() =>{
        getUsers().then(value => setUsers(value));
    }, [])



    return (
        <div>
            {
                users.map(value => <UsersComponents key={users.id} item={value}/>)
            }
        </div>
    );
};
export default Users;