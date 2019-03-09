import React from 'react';
import '../scss/molecules/_introduction.scss';
import { Link } from 'gatsby';

class IntroductionBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <section className="intro">
        <div className="container-left">
          <div className="row">
            <div className="col intro-text">
              <h1>
                Front-end web development
                <br />& Consultancy
              </h1>
              <p>
                I’m a freelance front-end developer. Specialized in responsive
                Web design, modern CSS, performance optimization and front end
                architecture. Together with you I work towards a website that
                amazes your clients. And ensures the right impression of your
                brand.
              </p>
              <div className="intro-actions">
                <Link to="/what-i-do" className="btn btn-primary">
                  What I do
                </Link>
                <p>or</p>
                <Link to="/contact" className="btn btn-secondary">
                  Get in touch
                </Link>
              </div>
            </div>
            <div className="col intro-image">
              <img src="/design/img/stef_201812-black.jpg" alt="Stef Coenen" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default IntroductionBlock;
