import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
  return axios.get(baseUrl).then(response => response.data)
}

const create = newPerson => {
  return axios.post(baseUrl, newPerson).then(response => response.data)
}

// Ex. 2.14
const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`).then(response => response.data)
}

// Ex. 2.15
const update = (id, newPerson) => {
    return axios.put(`${baseUrl}/${id}`, newPerson).then(response => response.data)
}

// eslint-disable-next-line
export default { 
  getAll, 
  create,
  remove,
  update
}
