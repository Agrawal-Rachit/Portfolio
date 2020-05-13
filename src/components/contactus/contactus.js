

import React, { Component } from 'react';
export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
      
      <section id="contact">
        <div className="row section-head">
          <div className="nine columns header-col">
            <h1><span>Feel Free To Get in contact or for any suggestions</span></h1>
          </div>
        </div>
        <div className="row">
          <div className="eight columns">
            {/* form */}
            <form action id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="Email">Email</label>
                  <label htmlFor="Email"><a target="_blank" href="mailto:agrawal.rac@husky.neu.edu">
                    agrawal.rac@husky.neu.edu</a></label>
                </div>
                <br></br><br></br>
                <div>
                  <label htmlFor="Phone">Phone</label>
                  <label htmlFor="Phone">+1-(857)-930-5297</label>
                </div>
                <br></br><br></br>
                <div>
                  <label htmlFor="Linkedin">Linkedin</label>
                  <label htmlFor="Linkedin"><a target="_blank" href="https://www.linkedin.com/in/rachitagrawal07/">
                    www.linkedin.com/in/rachitagrawal07/</a></label>
                </div>
                <br></br><br></br>
              </fieldset>
            </form> {/* Form End */}
           
          </div>
         
        </div>
      </section> {/* Contact Section End*/}
   
     </React.Fragment>
    );
  }
}
