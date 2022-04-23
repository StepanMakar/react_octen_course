import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {usersServices} from "../../servisec";
import {UserDetail} from "../../component";

const SingleUser = () => {
    const{state}=useLocation()
    const [user, setUser] = useState()
    const{id}=useParams()
    useEffect(()=>{
        if (!state) {
            usersServices.getById(id).then(({data})=> setUser(data))
        } else{
            setUser(state)
        }
    },[id,state])




    return(
        <div>
            {user && <UserDetail user={user}/>}
        </div>
    )
}

export {SingleUser}