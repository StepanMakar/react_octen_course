import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {usersServices} from "../../servisec";
import {UserDetail} from "../../component";

const SingleUser = () => {
    const{id}=useParams()
    const{state:user}=useLocation()



    return(
        <div>
            {user && <UserDetail user={user}/>}
        </div>
    )
}

export {SingleUser}