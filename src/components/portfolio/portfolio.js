import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
     <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>
              {/* portfolio-wrapper */}
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01" title>
                      <img alt="" src="images/Book1.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>New Chapter Book Store</h5>
                          <p>Web Design Project</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-02" title>
                      <img alt="" src="images/Homeless.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Homeless People Management Systems</h5>
                          <p>Java Swing Project</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-06" title>
                      <img alt="" src="images/gift1.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Red Moments Gift Gallery</h5>
                          <p>Spring MVC,Hibernate Project</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-05" title>
                      <img alt="" src="images/wanderlust.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Wanderlust Travel website</h5>
                          <p>UI/UX Project</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-03" title>
                      <img alt="" src="images/Bike.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Bike Search And Rental Prediction</h5>
                          <p>Data Science Project</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-04" title>
                      <img alt="" src="images/Movie1.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Movie Rental Database</h5>
                          <p>Database Management Systems </p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
              </div> {/* portfolio-wrapper end */}
            </div> {/* twelve columns end */}
            {/* Modal Popup
            --------------------------------------------------------------- */}

             <div id="modal-01" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/Book2.jpg" alt="" />
              <div className="description-box">
                <h4>Online Book Store</h4>
                <p>Developed a MERN Stack Ecommerce Web application which keeps the tracks of various books,order history 
                  and tracking information for users</p>
                <span className="categories"><i className="fa fa-tag" />Web Design Project</span>
              </div>
              <div className="link-box">
                <a target="_blank" href="https://github.com/Agrawal-Rachit/WebDesignOnlineBookStore">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-01 End */}



            <div id="modal-02" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/Homeless2.jpg" alt="" />
              <div className="description-box">
                <h4>Homeless People Management Sysetem</h4>
                <p>An application which allows the Government authorities to take care of the facilities 
                  and medical attentions in order to allocate shelter for homeless people. Made use of Java 8 
                  along with the Twilio cloud services for two factor authentications, while user login, and google maps 
                  API to locate the homeless person.</p>
                <span className="categories"><i className="fa fa-tag" />Java Swing Project</span>
              </div>
              <div className="link-box">
                <a target="_blank" href="https://github.com/Agrawal-Rachit/Java-Swing-HomelessShelter">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-02 End */}
            
            <div id="modal-03" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/Bike2.jpg" alt="" />
              <div className="description-box">
                <h4>Data Science Engineering Method and tools
                </h4>
                <p>Bike-sharing is a short-distance bike rental service that allows customers to pick up a bike at one station,
                   use it for transportation as needed, and return it to another station. </p>
                <span className="categories"><i className="fa fa-tag" />Data Science Project</span>
              </div>
              <div className="link-box">
                <a target="_blank" href="https://github.com/Agrawal-Rachit/DataScience-BikeSearchAndRentalPrediction">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-03 End */}
            
            <div id="modal-04" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/Movie2.jpg" alt="" />
              <div className="description-box">
                <h4>Database Management Systems</h4>
                <p>The movie rental database records the instances of a customer while renting a movie and registering a payment
                   for the same. New customers can be created using customer id and the customer history is created which is
                    related to other entities like his order, movie category and rating. It enables to keep track of and create 
                    reports of video rental…</p>
                <span className="categories"><i className="fa fa-tag" />Database Project</span>
              </div>
              <div className="link-box">
                <a target="_blank" href="https://github.com/Agrawal-Rachit/MovieRentalDatabaseProject">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-04 End */}
           
            <div id="modal-05" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/wanderlust1.jpg" alt="" />
              <div className="description-box">
                <h4>User Experience And User Design</h4>
                <p>Created prototypes for an interactive internet travel website utilizing user research methods like Card Sorting,
                   Usability Testing and User Interviews
                   Modelled workflows, personas, interaction flows, wireframes, low fidelity mock-ups, navigational flows, and
                   high-fidelity prototypes</p>
                <span className="categories"><i className="fa fa-tag" />User Experience Project</span>
              </div>
              <div className="link-box">
                <a target="_blank" href="https://github.com/Agrawal-Rachit/UI-UX-Wanterlust-Travel-Website">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-05 End */}

            <div id="modal-06" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/gift2.jpg" alt="" />
              <div className="description-box">
                <h4>Web Development Tools And Methods</h4>
                <p>Build a full stack Ecommerce web app using JSP, Spring MVC and Hibernate that permit clients to buy gifts 
                  on the web
                  Leveraged Interceptors, XSS filters and Hibernate annotations-based mapping for enhanced database 
                  interaction with MySQL for data storage and loading</p>
                <span className="categories"><i className="fa fa-tag" />Web Tools Project</span>
              </div>
              <div className="link-box">
                <a target="_blank" href="https://github.com/Agrawal-Rachit/WebTools-RedMoments">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-06 End */}

          </div> {/* row End */}
        </section>
   
     </React.Fragment>
    );
  }
}
