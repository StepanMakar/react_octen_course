import {axiosService} from "./axios.services";
import {urls} from "../Constatnts";

const usersServices = {
    getAll : () => axiosService.get(urls.users),
    getById: (id) => axiosService.get(`${urls.users}/${id}`)
}

export {
    usersServices
}