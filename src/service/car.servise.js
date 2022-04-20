import {axiosService} from "./axios";
import {urls} from "../constans";

const carService = {
    getAll: () => axiosService.get(urls.cars), // Витягуєм інфу з сервера
    getById: (id) => axiosService.get(`${urls.cars}/${id}`),
    create: (car) => axiosService.post(urls.cars, car),        // Записуєм інфу на сервер
    deleteById: (id, newCar) => axiosService.delete(`${urls.cars}/${id}`, newCar),
    updateById: (id) => axiosService.put(`${urls.cars}/${id}`)
}

export {
    carService
}
// CRUD
// Create
// Reed
// Update
// Delete