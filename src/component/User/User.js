import {Button} from "../Button/button";

const User = ({user}) =>{
    const {id, name} = user

    return(
        <div>
            {id} - {name}.) <Button  to={id.toString()} state={user}>Show info</Button>
        </div>
    )
}

export {User}