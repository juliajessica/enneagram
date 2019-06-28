import React from 'react';
import { string } from 'prop-types';

export const FlipCard = (props) => {
  return (
    <div
      className="flip_container"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="flip_card">
        <div className="front">
          <p>
            {props.frontText}
          </p>
        </div>
        <div className="back">
          <p>
            <strong>{props.backText}</strong>
          </p>
        </div>
      </div>
    </div>
  )
};

FlipCard.propTypes = {
  frontText: string.isRequired,
  backText: string.isRequired,
}