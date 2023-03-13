import { useState, useEffect } from 'react'
import Phonebook from './components/Phonebook'
import axios from 'axios'
import personService from './services/persons'



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  
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
    ? alert(`${newName} is already added to phonebook`)
    : setPersons(persons.concat(personObject))

    personService
    .create(personObject)
    .then(response => {
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
  })
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