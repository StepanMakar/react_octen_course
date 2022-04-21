import {axiosService} from "./axios";
import {urls} from "../constans";

 const carService = {
    getAll: () => axiosService.get(urls.cars), //  витягуємо інформацію з сервера
    getById: (id) => axiosService.get(urls.cars + '/' + id),
    create: (car) => axiosService.post(urls.cars, car), //  записуємо інформацію на сервер
    updateById: (id, newCar) => axiosService.put(`${urls.cars}/${id}`, newCar),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`) //
}

export {
    carService
}
// CRUD
// Create
// Reed
// Update
// Delete