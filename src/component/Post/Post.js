
import {Button} from "../Button/button";

const Post = ({post}) => {
    const { id, title} = post
    return(
        <div>

            {id} - {title} <Button to={id.toString()} state={post}>get details</Button>


        </div>
    )
}
export {Post}