import { useState } from 'react'
import Phonebook from './components/Phonebook'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 'Arto Hellas', number: 0}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  

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

    setNewName('')
    setNewNumber('')
    
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