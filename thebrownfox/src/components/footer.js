import { Link } from 'gatsby';
import React from 'react';
import '../scss/molecules/_footer.scss';

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <div className="container">
      <p>
        &copy; {new Date().getFullYear()} | The brown Fox Comm V. | BTW: BE
        0689.884.388
      </p>
    </div>
  </footer>
);

export default Footer;
