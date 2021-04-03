import React from "react"
import { Component } from "react"
import FeatureBox from "./FeatureBox"
import featuresStyles from "./features.module.scss"

class Features extends Component {
  state = {
    data: [
      {
        title: "Togetherness",
        body: "We believe that united we can so do much more good.",
      },
      {
        title: "Faith",
        body:
          "We have faith that our actions may be able to impact people's lives in some positive way.",
      },
      {
        title: "Hope",
        body:
          "We hope to inspire the the youth to be responsible and be the changes they want to see in their societies.",
      },
      {
        title: "LOve",
        body:
          "Love for others and God gives us the determination we need to bring smiles to people's faces with the hope for a better tomorrow",
      },
    ],
  }
  render() {
    return (
      <section className={featuresStyles.section_features}>
        <div className="row">
          {this.state.data.map(d => {
            return (
              <div className="col-1-of-4" key={d.title}>
                <FeatureBox data={d} />
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}

export default Features
