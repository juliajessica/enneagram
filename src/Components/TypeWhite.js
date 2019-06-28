import React from 'react';
import '../Pages/Header.css';
import { string } from 'prop-types';

import AOS from 'aos';
import 'aos/dist/aos.css';

class TypeWhite extends React.Component {
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
              <h2>{this.props.numberType}</h2>
              <p className="about_type" data-aos="fade-right">
              {this.props.type}
              </p>
              <div className="enneagram_description">
                {this.props.description}
              </div>
              <div>
                <p>
                 {this.props.fullDescription}
                </p>
                <p>
                  <strong>Enneagram {this.props.number} with a {this.props.firstWingNumberType}:</strong> {this.props.firstWingType}
                </p>
                <p>
                  <strong>Enneagram {this.props.number} with a {this.props.secondWingNumberType}:</strong> {this.props.secondWingType}
                </p>
              </div>
            </div>
            <div className="right_block_blank">
              <div className="flip_container_grid">
                {this.props.flipCard1}
                {this.props.flipCard2}
                {this.props.flipCard3}
                {this.props.flipCard4}
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  }
}

TypeWhite.propTypes = {
  numberType: string,
  type: string,
  description: string,
  fullDescription: string,
  number: string,
  firstWingNumberType: string, 
  firstWingType: string,
  secondWingNumberType: string,
  secondtWingType: string,
  flipCard1: string,
  flipCard2: string,
  flipCard3: string,
  flipCard4: string
}

export default TypeWhite;
