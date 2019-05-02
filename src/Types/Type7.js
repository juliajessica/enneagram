import React from 'react';
import '../Enneagram/Enneagram.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Type7 extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 3000,
    });
  }
  render() {
    return (
      <a href name="type_7">
        <div className="type_7" data-aos="fade-up">
          <div className="padding_wrapper type_grid">
            <div className="left_block bg_color_yellow">
              <h2>Type 7</h2>
              <p className="about_type" data-aos="fade-right">
                THE ENTHUSIAST
              </p>
              <div className="enneagram_description">
                The Busy, Fun-Loving Type: Spontaneous, Versatile, Distractible,
                and Scattered
              </div>
              <div>
                <p>
                  Sevens are extroverted, optimistic, versatile, and
                  spontaneous. Playful, high-spirited, and practical, they can
                  also misapply their many talents, becoming over-extended,
                  scattered, and undisciplined. They constantly seek new and
                  exciting experiences, but can become distracted and exhausted
                  by staying on the go. They typically have problems with
                  impatience and impulsiveness.
                </p>
                <p>
                  <strong>Enneagram Seven with a Six-Wing:</strong> "The
                  Entertainer"
                </p>
                <p>
                  <strong>Enneagram Seven with a Eight-Wing:</strong> "The
                  Realist"
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
                        They focus their talents on worthwhile goals, becoming
                        appreciative, joyous, and satisfied.
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
                      <p>Of being deprived and in pain</p>
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
                        To be satisfied and content—to have their needs
                        fulfilled
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
                        Want to maintain their freedom and happiness, to avoid
                        missing out on worthwhile experiences, to keep
                        themselves excited and occupied, to avoid and discharge
                        pain.
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

export default Type7;
