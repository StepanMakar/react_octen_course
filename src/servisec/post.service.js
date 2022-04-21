import {axiosService} from "./axios.services";
import {urls} from '../Constatnts/index'

const postService = {
    getAll: () => axiosService.get(urls.posts),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`),
}

export {
    postService
}