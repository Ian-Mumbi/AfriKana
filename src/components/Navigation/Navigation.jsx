import React from "react"
import { Component } from "react"
import { Link } from "gatsby"

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
          onClick={this.props.onShowList}
        />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          {this.props.showList && (
            <ul className="navigation__list">
              <li className="navigation__item">
                <Link to="/about" className="navigation__link">
                  About Us
                </Link>
              </li>
              <li className="navigation__item">
                <Link to="/executive-summary" className="navigation__link">
                  Executive summary
                </Link>
              </li>
              <li className="navigation__item">
                <Link to="/vision" className="navigation__link">
                  Vision
                </Link>
              </li>
              <li className="navigation__item">
                <Link to="/mission" className="navigation__link">
                  Mission
                </Link>
              </li>
              <li className="navigation__item">
                <Link to="/contact" className="navigation__link">
                  Contact Us
                </Link>
              </li>
            </ul>
          )}
        </nav>
        )
      </div>
    )
  }
}

export default Navigation
