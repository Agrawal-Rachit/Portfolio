

import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
       
       <section id="resume">
          {/* Education
        ----------------------------------------------- */}
          <div className="row education">
            <div className="three columns header-col">
              <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Northeastern University, Boston, MA</h3>
                  <p className="info">Master in Information Systems <span>•</span> <em className="date">Currently Enrolled</em></p>
                  <p>
                  Relevant Courses - Application Engineering Development (Java),Cloud Computing, 
                  Web Design And User Experience Engineering, Data Science Engineering Methods,
                   Database Management And Database Design
                  </p>
                </div>
              </div> {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>RGPV University, Bhopal MP, India</h3>
                  <p className="info">Bachelor of Engineering in Computer Science Engineering 
                  <span>•</span> <em className="date">June 2019</em></p>
                  <p>
                  Relevant courses- Data Structures, Analysis of Algorithms,Web Design And User Experience Engineering,
                   Software Engineering                                                                                 
                  </p>
                </div>
              </div> {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Education */}
          {/* Work
        ----------------------------------------------- */}
          <div className="row work">
            <div className="three columns header-col">
              <h1><span>Internship</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Comp tel Consultancy Jabalpur, MP, India</h3>
                  <p className="info">Software Engineer Intern (Web Development)        
                  <span>•</span> <em className="date">August 2017 – December 2017</em></p>
                  <p>
                  	Developed a Web client application to consume the API using AngularJS, HTML5, CSS<br></br>
	Designed the user experience for an internal website with localizations<br></br>
	Proposed and implemented new site content architecture and navigation scheme for company website redesign
                  </p>
                </div>
              </div> {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Work */}
          {/* Skills
        ----------------------------------------------- */}
          <div className="row skill">
            <div className="three columns header-col">
              <h1><span>Skills</span></h1>
            </div>
              <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                 <b> <p>Technical Skills:</p></b>
                <div className="five columns">
                <b><p>Programming Languages:</p></b>
                </div>
                <div className="seven columns">
                  <p>C, C++, JAVA, Python (NumPy, Pandas, SciPy)</p>
                  </div>
                  <div className="five columns">
                  <b><p>Web Technologies:</p></b>
                </div>
                <div className="seven columns">
                  <p className="date">HTML, CSS, JavaScript, AngularJS, Bootstrap,
                   Nodejs, ReactJS, ES6+, AJAX, JQuery</p>
                  </div>
                  <div className="five columns">
                  <b><p>Tools:</p></b>
                </div>
                <div className="seven columns">
                 <p className="date">NetBeans, Visual Studio Code, Toad Modeler </p>
                  </div>
                  <div className="five columns">
                  <b><p>Database:</p></b>
                </div>
                <div className="seven columns">
                  <p className="date">MYSQL, MongoDB, Oracle, MS SQL Server</p>
                  </div>
                  <div className="five columns">
                  <b><p>Project Management Tools:  </p></b>
                </div>
                <div className="seven columns">
                  <p className="date">Bitbucket, Tableau, Power BI, Unity</p>
                  </div>
                
                  </div>
                  </div>
            </div> {/* main-col end */}
      
            {/* </div> main-col end */}
          </div> {/* End skills */}
        </section>
    
     </React.Fragment>
    );
  }
}
