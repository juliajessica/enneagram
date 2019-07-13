import React from 'react';
import '../Pages/Header.css';
import { string, any } from 'prop-types';

import AOS from 'aos';
import 'aos/dist/aos.css';

class TypeColor extends React.Component {

  componentDidMount() {
    AOS.init({
      duration: 3000,
    });
  }
  render() {
    return (
      <div data-aos="fade-up">
        <div className="padding_wrapper type_grid">
          <div className="type-color_left_block bg_color">
            <h2>{this.props.numberType}</h2>
            <p className="about_type" data-aos="fade-right">
              {this.props.type}
            </p>
            <div className="enneagram_fullDescription">
              <div className="enneagram_description">
                {this.props.description}
              </div>
              <p>{this.props.fullDescription}</p>
              <p><strong>Enneagram {this.props.number} with a {this.props.firstWingNumberType}:</strong> {this.props.firstWingType}</p>
              <p><strong>Enneagram {this.props.number} with a {this.props.secondWingNumberType}:</strong> {this.props.secondWingType}</p>
            </div>
          </div>
          <div className="right_block">
            <div className="flip_container_grid">
              {this.props.flipCard1}
              {this.props.flipCard2}
              {this.props.flipCard3}
              {this.props.flipCard4}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TypeColor.propTypes = {
  id: string,
  numberType: string,
  type: string,
  description: string,
  fullDescription: string,
  number: string,
  firstWingNumberType: string, 
  firstWingType: string,
  secondWingNumberType: string,
  secondWingType: string,
  flipCard1: any,
  flipCard2: any,
  flipCard3: any,
  flipCard4: any
}

export default TypeColor;
