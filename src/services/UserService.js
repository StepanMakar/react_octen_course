import {constants} from '../Constatnts/const'
const getUsers = () => {
    return fetch (constants.apiUrl + 'users')
        .then(value => value.json())
};
export {getUsers}