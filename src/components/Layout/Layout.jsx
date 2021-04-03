import React from "react"
import Footer from "../Footer/Footer"
import NavSmall from "../Navigation/NavSmall"
import layoutStyles from "./Layout.module.scss"
import { Component } from "react"

class Layout extends Component {
  state = {
    items: [
      { route: "/", routeName: "Home" },
      { route: "/about", routeName: "About" },
      { route: "/contact", routeName: "Contact" },
      { route: "/mission", routeName: "Mission" },
    ],
  }
  render() {
    return (
      <React.Fragment>
        <NavSmall />
        <div className={layoutStyles.container}>
          <div className={layoutStyles.content}>{this.props.children}</div>
        </div>
        <Footer items={this.state.items} />
      </React.Fragment>
    )
  }
}

export default Layout
