import React from 'react';
import '../Enneagram/Enneagram.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Type5 extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 3000,
    });
  }
  render() {
    return (
      <a href name="type_5">
        <div className="type_5" data-aos="fade-up">
          <div className="padding_wrapper type_grid">
            <div className="left_block bg_color_yellow">
              <h2>Type 5</h2>
              <p className="about_type" data-aos="fade-right">
                THE INVESTIGATOR
              </p>
              <div className="enneagram_description">
                The Intense, Cerebral Type: Perceptive, Innovative, Secretive,
                and Isolated
              </div>
              <div>
                <p>
                  Fives are alert, insightful, and curious. They are able to
                  concentrate and focus on developing complex ideas and skills.
                  Independent, innovative, and inventive, they can also become
                  preoccupied with their thoughts and imaginary constructs. They
                  become detached, yet high-strung and intense. They typically
                  have problems with eccentricity, nihilism, and isolation
                </p>
                <p>
                  <strong>Enneagram Five with a Four-Wing:</strong> "The
                  Iconoclast"
                </p>
                <p>
                  <strong>Enneagram Five with a Six-Wing:</strong> "The Problem
                  Solver"
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
                        Visionary pioneers, often ahead of their time, and able
                        to see the world in an entirely new way.
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
                      <p>Being useless, helpless, or incapable</p>
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
                      <p>To be capable and competent</p>
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
                        Want to possess knowledge, to understand the
                        environment, to have everything figured out as a way of
                        defending the self from threats from the environment.
                      </p>
                    </div>
                    <div className="back">
                      <p>
                        <strong>Key Motivation</strong>
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

export default Type5;
