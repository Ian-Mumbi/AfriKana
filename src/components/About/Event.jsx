import React from "react"
import { formatDate } from "../../utils/dateFormat"

const Event = ({ event }) => {
  return (
    <React.Fragment>
      <h3 className="heading-tertiary u-margin-bottom-small">{event.title}</h3>
      <p className="paragraph">{formatDate(event.date)}</p>
    </React.Fragment>
  )
}

export default Event
