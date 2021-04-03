import React from "react"
import img1 from "./charity-1.jpg"
import img2 from "./charity-3.jpg"
import img9 from "./charity-10.jpg"
import img10 from "./charity-11.jpg"
import img15 from "./charity-16.jpg"
import img16 from "./charity-17.jpg"

const Gallery = () => {
  const images = [img1, img2, img9, img10, img15, img16]
  return (
    <React.Fragment key="img">
      {images.map(img => (
        <img src={img} alt={"Charity Photos"} />
      ))}
    </React.Fragment>
  )
}

export default Gallery
