import React from "react"
import galleryStyles from "./gallery.module.scss"

const GalleryContainer = props => {
  return <div className={galleryStyles.container}>{props.children}</div>
}

export default GalleryContainer
