import axios from 'axios'

let instanace=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
})

axios.defaults.headers.common['Authorization']='AUTH TOKEN from instance';
axios.defaults.headers.post['Content-Type']='application/json'

export default instanace