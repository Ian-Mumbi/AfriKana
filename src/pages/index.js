import React from "react"
import Header from "../components/Header/Header"
import "../styles/index.scss"
import About from "../components/About/About"
import Features from "../components/Features/Features"
import Stories from "../components/Stories/Stories"
import Footer from "../components/Footer/Footer"
import Navigation from "../components/Navigation/Navigation"
import { Component } from "react"
import Helmet from "../components/Helmet/helmet"

class IndexPage extends Component {
  state = {
    showList: false,
    items: [
      { route: "/", routeName: "Home" },
      { route: "/about", routeName: "About" },
      { route: "/contact", routeName: "Contact" },
      { route: "/mission", routeName: "Mission" },
    ],
  }
  handleShowList = () => this.setState({ showList: !this.state.showList })
  render() {
    return (
      <React.Fragment>
        <Helmet title="Home" />
        <Navigation
          showList={this.state.showList}
          onShowList={this.handleShowList}
        />
        <Header />
        <main>
          <About />
          <Features />
          <Stories />
          <Footer items={this.state.items} />
        </main>
      </React.Fragment>
    )
  }
}

export default IndexPage
