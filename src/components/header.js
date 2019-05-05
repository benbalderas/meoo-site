import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return(
      <header className={this.state.hasScrolled ? 'HeaderScrolled' : ''}>
        <div className="HeaderContent">
          <Link to='/' className="Logo">MeooApp.</Link>
          <Link to='/'>Features</Link>
          <Link to='/'>Investors</Link>
          <Link to='/'><button>Download</button></Link>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
