import React from 'react';
import '../scss/molecules/_ref.scss';

class ReferencesBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <section className="ref">
        <div className="container">
          <h1 className="ref-container-title">References</h1>
          <div className="row ref-row">
            <div className="col">
              <a href="https://attorno.be" target="_blank" className="ref-item">
                <div className="ref-media">
                  <img src="design/img/projects/attorno.jpg" />
                </div>
                <div className="ref-body">
                  <h2 className="ref-title">Attorno</h2>
                  <p className="ref-text">
                    Overheerlijke pizza met krokante dunne bodem, bereid in onze
                    authentieke mobiele houtoven.
                  </p>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                href="https://knap-geknipt.thebrownfox.be/"
                target="_blank"
                className="ref-item"
              >
                <div className="ref-media">
                  <img src="design/img/projects/knap-geknipt.jpg" />
                </div>
                <div className="ref-body">
                  <h2 className="ref-title">Knap geknipt</h2>
                  <p className="ref-text">Uw kapper voor haar &amp; make-up</p>
                </div>
              </a>
            </div>
          </div>
          <div className="row ref-row">
            <div className="col">
              <a
                href="https://khc-dragons.thebrownfox.be/"
                target="_blank"
                className="ref-item"
              >
                <div className="ref-media">
                  <img src="design/img/projects/khc-dragons.jpg" />
                </div>
                <div className="ref-body">
                  <h2 className="ref-title">KHC Dragons</h2>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                href="https://delegation.be/"
                target="_blank"
                className="ref-item"
              >
                <div className="ref-media">
                  <img src="design/img/projects/delegation.jpg" />
                </div>
                <div className="ref-body">
                  <h2 className="ref-title">Delegation</h2>
                  <p className="ref-text">
                    Een spraakmakend evenement begint bij uitstekend licht en
                    geluid.
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="row ref-row">
            <div className="col">
              <a
                href="https://watnu.legal"
                target="_blank"
                className="ref-item"
              >
                <div className="ref-media">
                  <img src="design/img/projects/watnu-legal.jpg" />
                </div>
                <div className="ref-body">
                  <h2 className="ref-title">Watnu Legal</h2>
                  <p className="ref-text">
                    Watnu.legal. Uw antwoord op alle juridische vragen
                  </p>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                href="http://www.huisartsenpraktijk-tspoor.be"
                target="_blank"
                className="ref-item"
              >
                <div className="ref-media">
                  <img src="design/img/projects/tspoor.jpg" />
                </div>
                <div className="ref-body">
                  <h2 className="ref-title">Huisartsenpraktijk 't Spoor</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ReferencesBlock;
