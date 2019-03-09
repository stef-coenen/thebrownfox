import React from 'react';
import '../scss/molecules/_trusted.scss';

class TrustedBy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <section className="trusted">
        <div className="container">
          <h2 className="text-center trusted-title">Trusted By</h2>
          <div className="row trusted-companies">
            <div className="trusted-company">
              <a href="https://www.wiver.be" target="_blank" rel="noopener">
                <img src="/design/img/partners/wiver.png" alt="Wiver" />
              </a>
            </div>
            <div className="trusted-company">
              <a href="https://www.sidewalk.be" target="_blank" rel="noopener">
                <img src="/design/img/partners/sidewalk.png" alt="Sidewalk" />
              </a>
            </div>
            <div className="trusted-company">
              <a href="https://www.attorno.be" target="_blank" rel="noopener">
                <img src="/design/img/partners/attorno.png" alt="Attorno" />
              </a>
            </div>
            <div className="trusted-company">
              <a
                href="https://huisartsenpraktijk-tspoor.be"
                target="_blank"
                rel="noopener"
              >
                <img src="/design/img/partners/Spoor.png" alt="Spoor" />
              </a>
            </div>
            <div className="trusted-company">
              <a
                href="https://khc-dragons.thebrownfox.be/"
                target="_blank"
                rel="noopener"
              >
                <img
                  src="/design/img/partners/dragons.svg"
                  alt="Dragons"
                  width="250"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TrustedBy;
