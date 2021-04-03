import React from "react"

const ContactItem = props => {
  const { name, phone } = props.contact
  return (
    <div className="u-margin-right-medium">
      <p className="paragraph u-margin-bottom-small">{name}</p>
      <p className="paragraph u-margin-bottom-small">{phone}</p>
    </div>
  )
}

export default ContactItem
