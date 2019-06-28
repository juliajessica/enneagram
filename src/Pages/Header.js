import React from 'react';
import './Header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { withRouter } from 'react-router-dom';

class Header extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 3000,
    });
  }
  render() {
    return (
      <div className="enneagram">
        <div className="enneagram_intro">
          <h1 className="enneagram_title" data-aos="fade-right">
            ENNEAGRAM
          </h1>
          <div className="enneagram_subTitle">Whats Your Type?</div>
          <div className="ennegram_chart" />
        </div>
      </div>
    );
  }
}

export default Header;
