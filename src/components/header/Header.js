import React, { Fragment } from 'react';


const Header = () => {
	return (
		<Fragment>
			<div className="container-fluid test main-header">
		        <input type="checkbox" className="menu-toggle" id="menu-toggle" />
		        <div className="mobile-bar">
		            <label for="menu-toggle" className="menu-icon">
		                <span></span>
		            </label>
		        </div>

		        <div className="container">

			        <header className="header">
			        	<a className="navbar-brand" href="home.html" style={{padding: '0px'}}>
			            	<img
			            	src="../../assets/images/logo/logo.png"
			            	alt="logo" />
			        	</a>
			            <nav>
			                <ul>
			                    <li><a href="home.html">Home</a></li>
			                    <li><a href="#" className="dropdown-toggle" data-toggle="dropdown">About Us</a>
		                            <div className="dropdown-menu dropdown-menu-tip-nw">
		                                <a href="our-journey.html" className="dropdown-item">Our Journey</a>
		                                <a href="in-the-media.html" className="dropdown-item">In The Media</a>
		                                <a href="our-team.html" className="dropdown-item">Our Team</a>
		                            </div>
		                        </li>
			                    <li><a href="#">Technology</a></li>
			                    <li><a href="#" className="dropdown-toggle" data-toggle="dropdown">Products</a>
		                            <div className="dropdown-menu dropdown-menu-tip-nw">
		                                <a href="#" className="dropdown-item">Rainy Filters</a>
		                                <a href="#" className="dropdown-item">Groundwater Recharge</a>
		                                <a href="#" className="dropdown-item">Systems & Solutions</a>
		                            </div>
		                        </li>
			                    <li><a href="#">Gallery</a></li>
			                    <li><a href="#" className="dropdown-toggle diffcolormenu" data-toggle="dropdown">Contact us</a>
		                            <div className="dropdown-menu dropdown-menu-tip-nw">
		                                <a href="#" className="dropdown-item">Enquire</a>
		                                <a href="#" className="dropdown-item">Dealers</a>
		                                <a href="#" className="dropdown-item">Downloads</a>
		                            </div>
		                        </li>

			                </ul>
			            </nav>
			        </header>
		        </div>
		    </div>
		</Fragment>
	);
};

export default Header;
