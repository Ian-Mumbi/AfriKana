import React from "react"

const FeatureBox = props => {
  const { title, body } = props.data
  return (
    <div className="feature-box">
      <h3 className="heading-tertiary u-margin-bottom-small">{title}</h3>
      <p className="feature-box__text">{body}</p>
    </div>
  )
}

export default FeatureBox
