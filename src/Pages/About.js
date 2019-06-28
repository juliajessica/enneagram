import React from 'react';
import './Header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { Link } from 'react-router-dom';

class About extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
  }
  render() {
    return (
      <div className="about">
        <div className="about_padding_wrapper">
          <p className="about_subtitle" data-aos="fade-up">
            Know the 9 Personality Types
          </p>
          <div className="enneagram_description">
            The Enneagram is an archetypal framework that offers in-depth
            insight to individuals, groups and collectives. Consisting of{' '}
            <i>three centures</i> of intelligence, nine main Enneagram types, 18
            wings, three subtypes and Triadic styles, the Enneagram offers a
            rich map to personal development. It does not box in people, but
            rather opens a pathway to self-discovery and greater personal
            awareness.
          </div>
          <div className="about_types">
            <a href="#type_1">
              <p>Type 1</p>
            </a>
            <a href="#type_2">
              <p>Type 2</p>
            </a>
            <a href="#type_3">
              <p>Type 3</p>
            </a>
            <a href="#type_4">
              <p>Type 4</p>
            </a>
          </div>
          <div className="about_types">
            <a href="#type_5">
              <p>Type 5</p>
            </a>
            <a href="#type_6">
              <p>Type 6</p>
            </a>
            <a href="#type_7">
              <p>Type 7</p>
            </a>
            <a href="#type_8">
              <p>Type 8</p>
            </a>
          </div>
          <div className="about_types">
            <a href="#type_9">
              <p>Type 9</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
