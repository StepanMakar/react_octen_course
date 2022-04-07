import {constants} from '../Constatnts/const'
const getComments = () => {
    return fetch (constants.apiUrl + 'comments')
        .then(value => value.json())
};
export {getComments}