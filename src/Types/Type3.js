import React from 'react';
import '../Enneagram/Enneagram.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Type3 extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 3000,
    });
  }
  render() {
    return (
      <a href name="type_3">
        <div className="type_3" data-aos="fade-up">
          <div className="padding_wrapper type_grid">
            <div className="left_block bg_color_yellow">
              <h2>Type 3</h2>
              <p className="about_type" data-aos="fade-right">
                THE ACHIEVER
              </p>
              <div className="enneagram_description">
                The Success-Oriented, Pragmatic Type: Adaptive, Excelling,
                Driven, and Image-Conscious
              </div>
              <div>
                <p>
                  Threes are self-assured, attractive, and charming. Ambitious,
                  competent, and energetic, they can also be status-conscious
                  and highly driven for advancement. They are diplomatic and
                  poised, but can also be overly concerned with their image and
                  what others think of them. They typically have problems with
                  workaholism and competitiveness.
                </p>
              </div>
              <p>
                <strong>Enneagram Three with a Two-Wing:</strong> "The Charmer"
              </p>
              <p>
                <strong>Enneagram Three with a Four-Wing:</strong> "The
                Professional"
              </p>
            </div>
            <div className="right_block">
              <div
                className="flip_container_grid"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className="flip_container">
                  <div className="flip_card">
                    <div className="front">
                      <p className="testing">
                        Self-accepting, authentic, everything they seem to
                        be—role models who inspire others.
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
                      <p>Of being worthless</p>
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
                      <p>To feel valuable and worthwhile</p>
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
                        Want to be affirmed, to distinguish themselves from
                        others, to have attention, to be admired, and to impress
                        others.
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

export default Type3;
