import React from 'react';
import '../Enneagram/Enneagram.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Type9 extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 3000,
    });
  }
  render() {
    return (
      <a href name="type_9">
        <div className="type_9" data-aos="fade-up">
          <div className="padding_wrapper type_grid">
            <div className="left_block bg_color_yellow">
              <h2>Type 9</h2>
              <p className="about_type" data-aos="fade-right">
                THE PEACEMAKER
              </p>
              <div className="enneagram_description">
                The Easygoing, Self-Effacing Type: Receptive, Reassuring,
                Agreeable, and Complacent
              </div>
              <div>
                <p>
                  Nines are accepting , trusting, and stable. They are usually
                  creative, optimistic, and supportive, but can also be too
                  willing to go along with others to keep the peace. They want
                  everything to go smoothly and be without conflict, but they
                  can also tend to be complacent, simplifying problems and
                  minimizing anything upsetting. They typically have problems
                  with inertia and stubbornness
                </p>
                <p>
                  <strong>Enneagram Nine with a Eight-Wing:</strong> "The
                  Referee"
                </p>
                <p>
                  <strong>Enneagram Nine with a One-Wing:</strong> "The Dreamer"
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
                        Indomitable and all-embracing, they are able to bring
                        people together and heal conflicts.
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
                      <p>Of loss and separation</p>
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
                      <p>To have inner stability "peace of mind"</p>
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
                        Want to create harmony in their environment, to avoid
                        conflicts and tension, to preserve things as they are,
                        to resist whatever would upset or disturb them.
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

export default Type9;
