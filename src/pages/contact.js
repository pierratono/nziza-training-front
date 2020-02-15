import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div>
  <section id="page-banner" className="pt-105 pb-130 bg_cover" data-overlay={8} style={{backgroundImage: 'url(images/page-banner-6.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-banner-cont">
            <h2>Contact</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Contact</li>
              </ol>
            </nav>
          </div>  {/* page banner cont */}
        </div>
      </div> {/* row */}
    </div> {/* container */}
  </section>
  {/*====== PAGE BANNER PART ENDS ======*/}
  {/*====== CONTACT PART START ======*/}
  <section id="contact-page" className="pt-90 pb-120 gray-bg">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="contact-from">
            <div className="section-title">
              <h5>Contact Us</h5>
              <h2>Keep in touch</h2>
            </div> {/* section title */}
            <div className="main-form pt-45">
              <form id="contact-form" action="#" method="post" data-toggle="validator">
                <div className="row">
                  <div className="col-md-6">
                    <div className="singel-form form-group">
                      <input name="name" type="text" placeholder="Your name" data-error="Name is required." required="required" />
                      <div className="help-block with-errors" />
                    </div> {/* singel form */}
                  </div>
                  <div className="col-md-6">
                    <div className="singel-form form-group">
                      <input name="email" type="email" placeholder="Email" data-error="Valid email is required." required="required" />
                      <div className="help-block with-errors" />
                    </div> {/* singel form */}
                  </div>
                  <div className="col-md-6">
                    <div className="singel-form form-group">
                      <input name="subject" type="text" placeholder="Subject" data-error="Subject is required." required="required" />
                      <div className="help-block with-errors" />
                    </div> {/* singel form */} 
                  </div>
                  <div className="col-md-6">
                    <div className="singel-form form-group">
                      <input name="phone" type="text" placeholder="Phone" data-error="Phone is required." required="required" />
                      <div className="help-block with-errors" />
                    </div> {/* singel form */}
                  </div>
                  <div className="col-md-12">
                    <div className="singel-form form-group">
                      <textarea name="messege" placeholder="Messege" data-error="Please,leave us a message." required="required" defaultValue={""} />
                      <div className="help-block with-errors" />
                    </div> {/* singel form */}
                  </div>
                  <p className="form-message" />
                  <div className="col-md-12">
                    <div className="singel-form">
                      <button type="submit" className="main-btn">Send</button>
                    </div> {/* singel form */}
                  </div> 
                </div> {/* row */}
              </form>
            </div> {/* main form */}
          </div> {/*  contact from */}
        </div>
        <div className="col-lg-4">
          <div className="contact-address">
            <div className="contact-heading">
              <h5>Address</h5>
              <p>Lorem ipsum</p>
            </div>
            <ul>
              <li>
                <div className="singel-address">
                  <div className="icon">
                    <i className="fa fa-home" />
                  </div>
                  <div className="cont">
                    <p>Lorem ipsum</p>
                  </div>
                </div> {/* singel address */}
              </li>
              <li>
                <div className="singel-address">
                  <div className="icon">
                    <i className="fa fa-phone" />
                  </div>
                  <div className="cont">
                    <p>+ 07X XXX XXX</p>
                    <p>+ 07X XXX XXX</p>
                  </div>
                </div> {/* singel address */}
              </li>
              <li>
                <div className="singel-address">
                  <div className="icon">
                    <i className="fa fa-envelope-o" />
                  </div>
                  <div className="cont">
                    <p>education@nzizatraining.ac.rw</p>
                  </div>
                </div> {/* singel address */}
              </li>
              <li>
                <div className="singel-address">
                  <div className="icon">
                    <i className="fa fa-globe" />
                  </div>
                  <div className="cont">
                    <p>www.nzizatraining.ac.rw</p>
                  </div>
                </div> {/* singel address */}
              </li>
            </ul>
          </div> {/* contact address */}
        </div>
      </div> {/* row */}
    </div> {/* container */}
  </section>
  <div className="map map-big">
    <div id="contact-map" />
  </div>
</div>


  </Layout>
)

export default ContactPage
