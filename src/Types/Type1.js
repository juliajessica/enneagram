import React from 'react';
import '../Enneagram/Enneagram.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { withRouter } from 'react-router-dom';

class Type1 extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 6000,
    });
  }
  render() {
    return (
      <a href name="type_1">
        <div className="type_1" data-aos="fade-up">
          <div className="padding_wrapper type_grid">
            <div className="left_block bg_color_yellow">
              <h2>Type 1</h2>
              <p className="about_type" data-aos="fade-right">
                THE REFORMER
              </p>
              <div className="enneagram_description">
                The Rational, Idealistic Type: Principled, Purposeful,
                Self-Controlled, and Perfectionistic
              </div>
              <div>
                <p>
                  Ones are conscientious and ethical, with a strong sense of
                  right and wrong. They are teachers, crusaders, and advocates
                  for change: always striving to improve things, but afraid of
                  making a mistake. Well-organized, orderly, and fastidious,
                  they try to maintain high standards, but can slip into being
                  critical and perfectionistic. They typically have problems
                  with resentment and impatience.
                </p>
                <p>
                  <strong>Enneagram One with a Nine-Wing:</strong> "The
                  Idealist"
                </p>
                <p>
                  <strong>Enneagram One with a Two-Wing:</strong> "The Advocate"
                </p>
              </div>
            </div>
            <div className="right_block">
              <div className="flip_container_grid">
                <div
                  className="flip_container"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="flip_card">
                    <div className="front">
                      <p>
                        Wise, discerning, realistic, and noble. Can be morally
                        heroic.
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
                      <p>Of being corrupt/evil, defective</p>
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
                      <p>To be good, to have integrity, to be balanced</p>
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
                        To be right, to strive higher and improve everything, to
                        be consistent with their ideals, to justify themselves
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

export default Type1;
