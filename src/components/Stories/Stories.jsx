import React from "react"

import videomp4 from "./video.mp4"
import videowebm from "./video.webm"

const Stories = () => {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={videomp4} type="video/mp4" />
          <source src={videowebm} type="video/webm" />
          Your browser is not supported!
        </video>
      </div>

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">A word from some of our founders.</h2>
      </div>

      <div className="row">
        <div className="story">
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              I had to try to make a difference in my community
            </h3>
            <p className="u-margin-bottom-small">
              In any little way I can I will help those in need. I knew I could
              do something with the little I had and it still have an impact in
              someone's life. I was on board to join AfriKana since we all had
              the same objective, helping.
            </p>
            <p>
              <em>Eva</em>
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="story">
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              I felt the calling to be a voice for my generation
            </h3>
            <p className="u-margin-bottom-small">
              I have seen the suffering of people within my community and I felt
              the yearning to answer their cry of help best I could.
            </p>
            <p>
              <em>Phillip</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stories
