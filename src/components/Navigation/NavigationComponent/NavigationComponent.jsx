import React, { Component } from "react"
import { Link } from "gatsby"
import navStyles from "./NavigationComponent.module.scss"

class NavigationComponent extends Component {
  state = {
    showNav: false,
  }

  handleToggleNavigation = () => {
    this.setState({ showNav: !this.state.showNav })
  }

  render() {
    const { showNav } = this.state
    const { navItems } = this.props
    return (
      <div className={navStyles.navigation}>
        <div className={navStyles.button} onClick={this.handleToggleNavigation}>
          MENU
        </div>

        <div
          className={
            navStyles.background + " " + (!showNav ? navStyles.onClick : "")
          }
        >
          &nbsp;
        </div>

        <nav className={navStyles.nav}>
          <ul className={navStyles.list}>
            {navItems.map((navItem, i) => (
              <li className={navStyles.item} key={navItem + i}>
                <Link to={navItem.path} className={navStyles.link}>
                  {navItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavigationComponent
