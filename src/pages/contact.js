import React from "react"
import Layout from "../components/Layout/Layout"
import Contacts from "../components/Contacts/Contacts"
import { Component } from "react"
import Helmet from "../components/Helmet/helmet"
import contactStyles from "../styles/contactPageStyles/contact.module.scss"

class Contact extends Component {
  state = {
    contacts: [
      {
        name: "Ian Murithi",
        phone: "+254 718 520383",
      },
      {
        name: "Eva",
        phone: "+254 799 863784",
      },
      {
        name: "Catherine Nyambura",
        phone: "+254 713 758566",
      },
      {
        name: "Melissa",
        phone: "+254 713 820021",
      },
      {
        name: "Phillip",
        phone: "+254 741 207679",
      },
    ],
  }
  render() {
    return (
      <Layout>
        <Helmet title="Contact" />
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Contact us</h2>
          <div className={contactStyles.container}>
            <p className="paragraph u-margin-bottom-medium">
              Our official email: foundationafrikana@gmail.com
            </p>
            <Contacts contacts={this.state.contacts} />
          </div>
        </div>
      </Layout>
    )
  }
}

export default Contact
