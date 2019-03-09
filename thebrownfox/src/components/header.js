import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import '../scss/molecules/_header.scss';

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="container">
      <div className="header-container">
        <div className="header-brand">
          <Link to="/">
            <img src="/design/img/logo-thebrownfox.svg" alt={siteTitle} />
          </Link>
        </div>
        <nav className="header-nav">
          <Link
            to="/what-i-do"
            className="header-nav-link"
            activeClassName="active"
          >
            What I do
          </Link>
          <Link
            to="/references"
            className="header-nav-link"
            activeClassName="active"
          >
            References
          </Link>
          <Link to="/" className="header-nav-link" activeClassName="active">
            Contact
          </Link>
          {/* <Link to="/" className="header-nav-link" activeClassName="active">
            Articles
          </Link> */}
          <a
            href="https://blog.thebrownfox.be"
            target="_blank"
            className="header-nav-link"
          >
            Articles
          </a>
        </nav>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
