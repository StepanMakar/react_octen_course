import axios from 'axios'
import baseURL from "../const/links";


export const axiosService = axios.create({baseURL} );