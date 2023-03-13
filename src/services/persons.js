import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
  }
  
  const create = newObject => {
    return axios.post(baseUrl, newObject)
  }
  
  const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
  }

  const deletePerson = (person) => {
    console.log(`tääl ${person}`)
      axios.delete(`${baseUrl}/${person.id}`)
      console.log("----------------")
      return axios.get(baseUrl)
      
  }
  
  export default { 
    getAll: getAll, 
    create: create, 
    update: update,
    deletePerson: deletePerson
  }