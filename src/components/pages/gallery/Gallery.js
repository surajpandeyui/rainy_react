import React, { Fragment } from 'react';


const Gallery = () => {
	return (
		<Fragment>
			<div className="container-fluid banner enternal">
		    	<div className="hero-image enthroimg">
		    		<img src="images/BannerSS.png">
				  <div className="hero-text rnyfltrs">
				    <h1>SYSTEMS & SOLUTIONS</h1>
				  </div>
				</div>
		    </div>

		    <div className="container-fluid">
		        
		        <div className="container">
		        <div className="row">
		        <div className="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
		            <h1 className="gallery-title">Gallery</h1>
		        </div>

		        <div className="col-md-12" align="center">
		            <button className="btn btn-default filter-button" data-filter="all">All</button>
		            <button className="btn btn-default filter-button" data-filter="hdpe">Groundwater Recharging</button>
		            <button className="btn btn-default filter-button" data-filter="sprinkle">Gov.t Building & Institutions</button>
		            <button className="btn btn-default filter-button" data-filter="spray">Schools</button>
		            <button className="btn btn-default filter-button" data-filter="irrigation">Apartments & Houses</button>
		            <button className="btn btn-default filter-button" data-filter="irrigation">Industries</button>
		            <button className="btn btn-default filter-button" data-filter="irrigation">With Dignitires</button>
		        </div>
		        <br/>



		            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
		                <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
		            </div>

		            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle">
		                <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
		            </div>

		            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
		                <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
		            </div>

		            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
		                <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
		            </div>

		            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter spray">
		                <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
		            </div>

		            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
		                <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
		            </div>

		            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter spray">
		                <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
		            </div>

		            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
		                <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
		            </div>

		            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
		                <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
		            </div>

		            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
		                <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
		            </div>

		            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter spray">
		                <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
		            </div>

		            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle">
		                <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
		            </div>
		        </div>
		    </div>

		    </div>
		</Fragment>
	);
};

export default Gallery;
