import React, { Component } from "react"
import Navigation from "../components/navElement"

class Element extends Component {
  state = {
    titles: ["william & ian", "titanic tutorial", "archive", "about"],
  }
  render() {
    return <Navigation titles={this.state.titles} />
  }
}

export default Element
