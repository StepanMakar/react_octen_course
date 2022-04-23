import {useEffect, useState} from "react";
import {usersServices} from "../../servisec";
import {Outlet} from "react-router-dom";
import {User} from "../../component";

const UsersPage = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        usersServices.getAll().then(({data}) => setUsers(data))
    },[])
    return (
        <div >
            <div>
                {users.map((user) => <User key={user.id} user={user}/>)}
            </div>
            <div><Outlet/></div>
        </div>
    )

}
export {UsersPage}
