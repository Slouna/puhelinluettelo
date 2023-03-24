import axios from "axios"
import { useEffect } from "react"
import personService from '../services/persons'

const DelButton = ({person}) => {
    /// update pitää hoitaa vielä poiston jälkeen
   const confirmationCheck = () => {
       console.log(person)
    if (window.confirm(`Delete ${person.name}`)) {
        personService.deletePerson(person)
        .then(response => personService.getAll())
        .then(console.log("deleted"))
        
    }}
    return(
        <button type="button" onClick={confirmationCheck} >delete</button>
    )

  }



const Phonebook = ({persons, onDeletePerson}) => {
    return (
        persons.map(person => <Person key={person.id} person={person} onDeletePerson={onDeletePerson} />)
      )
    }
const Person = ({ person, onDeletePerson }) => {
    return (
      <li>{person.name} {person.number} <button onClick={() => onDeletePerson(person)}>delete</button></li>
    )
  }
export default Phonebook