import axios from 'axios'
import baseURL from "../Constatnts/urls";


export const axiosService = axios.create({baseURL} );

