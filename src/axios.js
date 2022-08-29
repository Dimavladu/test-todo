import axios from "axios"

const requestAxios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/todos'
})
export default requestAxios
