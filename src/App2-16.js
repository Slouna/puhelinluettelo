import { useState, useEffect } from 'react'
import Phonebook from './components/Phonebook'
import axios from 'axios'
import personService from './services/persons'


const Notification = ({ message }) => {
  if (message === null || message ==="") {
    return null
  }

  return (
    <div className="added">
      {message}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [message, setMessage] = useState('')

  
  useEffect(() => {
    personService
    .getAll()
    .then(response => {
      setPersons(response.data)
    })
  }, [])

  const addContact = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: newName,
    }

    persons.find(persons => persons.id === newName)
    ? errorMessage(newName)
    : setPersons(persons.concat(personObject))


    personService
    .create(personObject)
    .then(response => {
      setMessage(`${newName} was added successfully`)
      setTimeout(() => {
      setMessage(null)
    }, 3000)
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
  })
  }

  const errorMessage = (name) => {
    setNewName('')
    setNewNumber('')
    setMessage(`${name} already exists!`)
    setTimeout(() => {
      setMessage(null)
    }, 3000)
    
  }

  const handleNewPerson = (event) => {
    
    setNewName(event.target.value)
    
  }
  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Notification message={message}/>
      </div>
      <form onSubmit={addContact}>
        <div>
          name: <input 
          value={newName} 
          onChange={handleNewPerson}/>
        </div>
        <div>
            number: <input 
            value={newNumber}
            onChange={handleNumber}
            />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>

      {persons.map(person => 
        <Phonebook key={person.id} person={person}/> 
        )}
          
    </div>
    
    
  )

}

export default App