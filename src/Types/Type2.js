import React from 'react';
import '../Enneagram/Enneagram.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Type2 extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 3000,
    });
  }
  render() {
    return (
      <a href name="type_2">
        <div className="type_2" data-aos="fade-up">
          <div className="padding_wrapper type_grid">
            <div className="left_block">
              <h2>Type 2</h2>
              <p className="about_type" data-aos="fade-right">
                THE HELPER
              </p>
              <div className="enneagram_description">
                The Caring, Interpersonal Type: Demonstrative, Generous,
                People-Pleasing, and Possessive
              </div>
              <div>
                <p>
                  Twos are empathetic, sincere, and warm-hearted. They are
                  friendly, generous, and self-sacrificing, but can also be
                  sentimental, flattering, and people-pleasing. They are
                  well-meaning and driven to be close to others, but can slip
                  into doing things for others in order to be needed. They
                  typically have problems with possessiveness and with
                  acknowledging their own needs.
                </p>
              </div>
              <p>
                <strong>Enneagram Two with a One-Wing:</strong> "Servant"
              </p>
              <p>
                <strong>Enneagram Two with a Three-Wing:</strong> "The
                Host/Hostess"
              </p>
            </div>
            <div className="right_block_blank">
              <div className="flip_container_grid">
                <div
                  className="flip_container"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="flip_card">
                    <div className="front">
                      <p>
                        Unselfish and altruistic, they have unconditional love
                        for others
                      </p>
                    </div>
                    <div className="back">
                      <p>
                        <strong>At their Best</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="flip_container"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="flip_card">
                    <div className="front">
                      <p>Of being unwanted, unworthy of being loved</p>
                    </div>
                    <div className="back">
                      <p>
                        <strong>Basic Fear</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="flip_container"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="flip_card">
                    <div className="front">
                      <p>To feel loved</p>
                    </div>
                    <div className="back">
                      <p>
                        <strong>Basic Desire</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="flip_container"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="flip_card">
                    <div className="front">
                      <p>
                        Want to be loved, to express their feelings for others,
                        to be needed and appreciated, to get others to respond
                        to them, to vindicate their claims about themselves.
                      </p>
                    </div>
                    <div className="back">
                      <p>
                        <strong>Key Motivations</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  }
}

export default Type2;
