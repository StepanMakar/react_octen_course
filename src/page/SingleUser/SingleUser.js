import {useEffect, useState} from "react";
import {Outlet, useLocation, useParams} from "react-router-dom";
import {usersServices} from "../../servisec";
import {UserDetail} from "../../component";

const SingleUser = () => {
    const{state}=useLocation()
    const [user, setUser] = useState()
    const{UserId}=useParams()
    useEffect(()=>{
        if (!state) {
            usersServices.getById(UserId).then(({data})=> setUser(data))
        } else{
            setUser(state)
        }
    },[UserId,state])




    return(
        <div>
            <div>{user && <UserDetail   user={user}/>}</div>
            <Outlet/>
        </div>

    )
}

export {SingleUser}