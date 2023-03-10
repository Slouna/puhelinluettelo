import { useState } from 'react'
import Phonebook from './components/Phonebook2-6'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 'Arto Hellas'}
  ]) 
  const [newName, setNewName] = useState('')
  
  

  const addContact = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      id: newName
    }

    persons.find(persons => persons.id === newName)
    ? alert(`${newName} is already added to phonebook`)
    : setPersons(persons.concat(personObject))

    setNewName('')
    
  }

  const handleNewPerson = (event) => {
    
    setNewName(event.target.value)
    
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
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {persons.map(person => 
        <Phonebook key={person.id} person={person} /> 
        )}
          
    </div>
    
    
  )

}

export default App