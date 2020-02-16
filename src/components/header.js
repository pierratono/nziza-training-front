import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "../images/logo.png"
import ic_map from "../images/all-icon/map.png"
import ic_email from "../images/all-icon/email.png"
import ic_support from "../images/all-icon/support.png"

const Header = ({ siteTitle }) => (
  <header id="header-part">
  <div className="header-top d-none d-lg-block">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="header-contact text-lg-center text-center">
            <ul>
              <li><img src={ic_map} alt="icon" /><span> Musanze - Huye - Kigali</span></li>
              <li><img src={ic_email} alt="icon" /><span>education@nzizatraining.ac.rw</span></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="header-social text-lg-right text-center">
            <ul>
              <li><a href="https://www.facebook.com/nzizatrainingacademy" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook-f" /></a></li>
              <li><a href="https://twitter.com/AcademyNziza" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter" /></a></li>
              <li><a href="https://www.instagram.com/nziza_training" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram" /></a></li>
              <li><a href="https://www.linkedin.com/company/academynziza" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin" /></a></li>
            </ul>
          </div>
        </div>
      </div> {/* row */}
    </div> {/* container */}
  </div> {/* header top */}
  <div className="header-logo-support pt-30 pb-30">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4">
          <div className="logo">
            <a href="index-2.html">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
        </div>
        <div className="col-lg-8 col-md-8">
          <div className="support-button float-right d-none d-md-block">
            <div className="support float-left">
              <div className="icon">
                <img src={ic_support} alt="icon" />
              </div>
              <div className="cont">
                <p>Need Help? call us now</p>
                <span style={{fontSize:'18sp'}}>+250 785 568 718</span>
              </div>
            </div>
            <div className="button float-left">
                <Link className="main-btn" to="check">Register Now</Link>
            </div>
          </div>
        </div>
      </div> {/* row */}
    </div> {/* container */}
  </div> {/* header logo support */}
  <div className="navigation">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-md-10 col-sm-9 col-8">
          <nav className="navbar navbar-expand-lg">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
            
              

              <li className="nav-item">
                <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="about">About</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="team">Team</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="why">Why Nta</Link>
                </li>
                <li className="nav-item">
                  <Link to="works">Works</Link>
                </li>
                <li className="nav-item">
                    <Link to="check">Check Certificate</Link>
                </li>
                <li className="nav-item">
                  <Link to="news">News</Link>
                </li>
                <li className="nav-item">
                  <Link to="contact">Contact</Link>
                </li>
              </ul>
            </div>
          </nav> {/* nav */}
        </div>
      </div> {/* row */}
    </div> {/* container */}
  </div>
</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Nziza Training Academy`,
}

export default Header
