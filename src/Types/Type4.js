import React from 'react';
import '../Enneagram/Enneagram.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Type4 extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 3000,
    });
  }
  render() {
    return (
      <a href name="type_4">
        <div className="type_4" data-aos="fade-up">
          <div className="padding_wrapper type_grid">
            <div className="left_block">
              <h2>Type 4</h2>
              <p className="about_type" data-aos="fade-right">
                THE INDIVIDUALIST
              </p>
              <div className="enneagram_description">
                The Sensitive, Withdrawn Type: Expressive, Dramatic,
                Self-Absorbed, and Temperamental
              </div>
              <div>
                <p>
                  Fours are self-aware, sensitive, and reserved. They are
                  emotionally honest, creative, and personal, but can also be
                  moody and self-conscious. Withholding themselves from others
                  due to feeling vulnerable and defective, they can also feel
                  disdainful and exempt from ordinary ways of living. They
                  typically have problems with melancholy, self-indulgence, and
                  self-pity.
                </p>
                <p>
                  <strong>Enneagram Four with a Three-Wing:</strong> "The
                  Aristocrat"
                </p>
                <p>
                  <strong>Enneagram Four with a Five-Wing:</strong> "The
                  Bohemian"
                </p>
              </div>
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
                        Inspired and highly creative, they are able to renew
                        themselves and transform their experiences.
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
                      <p>That they have no identity or personal significance</p>
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
                      <p>
                        To find themselves and their significance (to create an
                        identity)
                      </p>
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
                        Express themselves and their individuality, to create
                        and surround themselves with beauty, protect their
                        self-image, take care of emotional needs before
                        attending to anything else.
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

export default Type4;
