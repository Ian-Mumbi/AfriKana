import React from "react"
import ContactItem from "./ContactItem"

const Contacts = props => {
  return props.contacts.map(contact => {
    return <ContactItem contact={contact} key={contact.name + contact.email} />
  })
}

export default Contacts
