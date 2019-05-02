import React from 'react';
import '../Enneagram/Enneagram.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Type6 extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 3000,
    });
  }
  render() {
    return (
      <a href name="type_6">
        <div className="type_6" data-aos="fade-up">
          <div className="padding_wrapper type_grid">
            <div className="left_block">
              <h2>Type 6</h2>
              <p className="about_type" data-aos="fade-right">
                THE LOYALIST
              </p>
              <div className="enneagram_description">
                The Committed, Security-Oriented Type: Engaging, Responsible,
                Anxious, and Suspicious
              </div>
              <div>
                <p>
                  The committed, security-oriented type. Sixes are reliable,
                  hard-working, responsible, and trustworthy. Excellent
                  "troubleshooters," they foresee problems and foster
                  cooperation, but can also become defensive, evasive, and
                  anxious—running on stress while complaining about it. They can
                  be cautious and indecisive, but also reactive, defiant and
                  rebellious. They typically have problems with self-doubt and
                  suspicion.
                </p>
                <p>
                  <strong>Enneagram Six with a Five-Wing:</strong> "The
                  Defender"
                </p>
                <p>
                  <strong>Enneagram Six with a Seven-Wing:</strong> "The Buddy"
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
                        Internally stable and self-reliant, courageously
                        championing themselves and others.
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
                      <p>Of being without support and guidance</p>
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
                      <p>To have security and support</p>
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
                        Want to have security, to feel supported by others, to
                        have certitude and reassurance, to test the attitudes of
                        others toward them, to fight against anxiety and
                        insecurity.
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

export default Type6;
