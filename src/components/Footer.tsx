import React, { Component } from 'react';
import upArrow from 'assets/uparrow.png';
import './Footer.css';

class Footer extends Component {
  
 scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 };

  render() {
    return (
        <footer className="footer d-flex align-self-center" >
      <img
                alt=""
                src={upArrow}
                width="50"
                height="50"
                className="d-inline-block align-top"
                onClick={this.scrollTop} 
              />
      </footer>
    );
  }

}
export default Footer;