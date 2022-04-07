import {constants} from '../Constatnts/const'
const getPost = () => {
    return fetch (constants.apiUrl + 'posts')
        .then(value => value.json())
};
export  {getPost}