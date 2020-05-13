

import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
      
      <footer>
        <div className="row">
          <div className="twelve columns">
          <ul className="social-links">
                <li><a target="_blank" href="https://www.linkedin.com/in/rachitagrawal07/"><i className="fa fa-linkedin" /></a></li>
                <li><a target="_blank" href="https://github.com/Agrawal-Rachit"><i className="fa fa-github" /></a></li>
                <li><a target="_blank" href="mailto:agrawal.rac@husky.neu.edu"><i className="fa fa-envelope" /></a></li>
                <li><a target="_blank" href="https://join.skype.com/invite/Y9fEj6TaD3ma"><i className="fa fa-skype" /></a></li>
              </ul>
            <ul className="copyright">
              <li>© Copyright Rachit Agrawal</li>   
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
   
     </React.Fragment>
    );
  }
}
