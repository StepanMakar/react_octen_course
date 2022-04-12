import {axiosService} from "./axios.service";
import {urls} from "../const";

export const usersService = {
    getAll: () => axiosService.get(urls.users)
}