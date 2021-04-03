import React from "react"
import navigationStyles from "./navElement.module.scss"

const Navigation = ({ titles }) => (
  <ul className={navigationStyles.container}>
    {titles.map(title => (
      <li key={title} className={navigationStyles.items}>
        {title}
      </li>
    ))}
  </ul>
)

export default Navigation
