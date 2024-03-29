

import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>

      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/Rachit.png" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              Motivated, hard working and ingenious Software Engineer actively seeking full time opportunities from summer 2021, Graduate
               student pursuing Master of Science in Information Systems at Northeastern University with an aptitude for challenges
                and a drive to efficiently manage workloads with high performance while also meeting strenuous deadlines
            </p>

          </div> {/* end .main-col */}
        </div>
      </section>
     </React.Fragment>
    );
  }
}
