import React from 'react';
import '../Enneagram/Enneagram.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Type8 extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 3000,
    });
  }
  render() {
    return (
      <a href name="type_8">
        <div className="type_8" data-aos="fade-up">
          <div className="padding_wrapper type_grid">
            <div className="left_block">
              <h2>Type 8</h2>
              <p className="about_type" data-aos="fade-right">
                THE CHALLENGER
              </p>
              <div className="enneagram_description">
                The Powerful, Dominating Type: Self-Confident, Decisive,
                Willful, and Confrontational
              </div>
              <div>
                <p>
                  Eights are self-confident, strong, and assertive. Protective,
                  resourceful, straight-talking, and decisive, but can also be
                  ego-centric and domineering. Eights feel they must control
                  their environment, especially people, sometimes becoming
                  confrontational and intimidating. Eights typically have
                  problems with their tempers and with allowing themselves to be
                  vulnerable.
                </p>
                <p>
                  <strong>Enneagram Eight with a Seven-Wing:</strong> "The
                  Maverick"
                </p>
                <p>
                  <strong>Enneagram Eight with a Nine-Wing:</strong> "The Bear"
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
                        Self- mastering, they use their strength to improve
                        others' lives, becoming heroic, magnanimous, and
                        inspiring.
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
                      <p>Of being harmed or controlled by others</p>
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
                        To protect themselves (to be in control of their own
                        life and destiny)
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
                        Want to be self-reliant, to prove their strength and
                        resist weakness, to be important in their world, to
                        dominate the environment, and to stay in control of
                        their situation.
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

export default Type8;
