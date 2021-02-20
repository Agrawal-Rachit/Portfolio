

import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Works</a></li>
              <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="social">
                <li><a target="_blank" href="https://www.linkedin.com/in/rachitagrawal07/"><i className="fa fa-linkedin" /></a></li>
                <li><a target="_blank" href="https://github.com/Agrawal-Rachit"><i className="fa fa-github" /></a></li>
                <li><a target="_blank" href="mailto:agrawal.rac@northeastern.edu"><i className="fa fa-envelope" /></a></li>
               <li><a target="_blank" href="https://join.skype.com/invite/Y9fEj6TaD3ma"><i className="fa fa-skype" /></a></li>
               </span>
            </ul> 
          </nav> 
          <div className="row banner">
            <div className="banner-text">
             
              <h1 className="responsive-headline">Rachit Agrawal</h1>
              <hr />
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
          </p>
        </header>
     </React.Fragment>
    );
  }
}
