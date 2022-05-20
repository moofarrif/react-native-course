import axios from "axios";

export const reqRespApi = axios.create({
  baseURL: 'https://reqres.in/api'
})
