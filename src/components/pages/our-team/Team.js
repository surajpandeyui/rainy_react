import React, { Fragment } from 'react';
import 'Home.css';


const Team = () => {
  return (
    <Fragment>
      <div className="container-fluid banner enternal">
        <div className="hero-image enthroimg">
            <img src="images/Image 48.png" />
            <div className="hero-text entteamtxt">
              <h1>OUR EXECUTIVE TEAM</h1>
            </div>
          </div>
      </div>
      <div className="container-fluid groundwater_bg team">
        <div className="container">
          <h2 className="team-heading">EXPERIENCED AND PROFESSIONAL TEAM</h2>
              <p className="team-para">Lorum ipsum dolor sit amet, conseteture sadipscing elitr, set diam nonumy. Lorum ipsum dolor sit amet, conseteture sadipscing elitr, set diam nonumy Lorum ipsum dolor sit amet, conseteture sadipscing elitr, set diam nonumy</p>
          </div>    
      
      
      <div className="container team-row-sec">
          <div className="row team-row">
              <div className="col-md-6">
                  <div>
                      <img src="images/Group 1195.png"b/>
                  </div>
                  <div>
                      <h4 className="team-title">Manoj Baptist</h4>
                      <p className="team-desc">Director</p>
                      <p><i className="fa fa-mobile" aria-hidden="true"></i> +91 94480 76595</p>
                      <p><i className="fa fa-envelope-o" aria-hidden="true"></i> rainharvesting@gmail.com</p>
                  </div>
              </div>
              <div className="col-md-6">
                  <div>
                      <img src="images/Group 1196.png" />
                  </div>
                  <div>
                      <h4 className="team-title">Micheal Baptist</h4>
                      <p className="team-desc">Co-Founder & Director</p>
                      <p><i className="fa fa-mobile" aria-hidden="true"></i> +91 94480 76595</p>
                      <p><i className="fa fa-envelope-o" aria-hidden="true"></i> rainharvesting@gmail.com</p>
                  </div>
              </div>
          </div>

           <div className="row team-row" style={{marginTop: '60px', marginTop: '60px'}]>
              <div className="col-md-6">
                  <div>
                      <img src="images/Group 1197.png" />
                  </div>
                  <div>
                      <h4 className="team-title">Vijayraj Shishodia</h4>
                      <p className="team-desc">Co-Founder & Director</p>
                      <p><i className="fa fa-mobile" aria-hidden="true"></i> +91 94480 76595</p>
                      <p><i className="fa fa-envelope-o" aria-hidden="true"></i> rainharvesting@gmail.com</p>
                  </div>
              </div>
              <div className="col-md-6">
                  <div>
                      <img src="images/Group 1196.png" />
                  </div>
                  <div>
                      <h4 className="team-title">Sunil Baptist</h4>
                      <p className="team-desc">Co-Founder & Director</p>
                      <p><i className="fa fa-mobile" aria-hidden="true"></i> +91 94480 76595</p>
                      <p><i className="fa fa-envelope-o" aria-hidden="true"></i> rainharvesting@gmail.com</p>
                  </div>
              </div>
          </div>
      </div>
  </div>

  <div className="container-fluid sawar">
          <h1>SOCIAL AWARENESS</h1>
      </div>
    </Fragment>
  );
};

export default Team;
