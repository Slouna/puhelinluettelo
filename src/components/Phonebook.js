import axios from "axios"
import { useEffect } from "react"
import personService from '../services/persons'

const DelButton = (id) => {
    /// update pitää hoitaa vielä poiston jälkeen
   const confirmationCheck = () => {
       console.log(id)
    if (window.confirm(`Delete ${id.id}`)) {
        personService.deletePerson(id)
        .then(response => personService.getAll())
        .then(response => console.log("Deleted"))
        
    }}
    return(
        <button type="button" onClick={confirmationCheck} >delete</button>
    )

  }



const Phonebook = ({person}) => {
    return (
        <div>
        <li>{person.name} {person.number} {<DelButton id= {person.name}/>}</li>
        
        </div>

    )
}
export default Phonebook