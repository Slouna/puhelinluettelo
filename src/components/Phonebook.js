/*
const addContact = (event) => {
    event.preventDefault()
    const personObject = {
        content: newName,
        id: contacts.length + 1
    }
    setContacts(contacts.concat(personObject))
    setNewContact('')

}
*/
const Phonebook = ({person}) => {
    return (
        <li>{person.content}</li>
    )
}
export default Phonebook 