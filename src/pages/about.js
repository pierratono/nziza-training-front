import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (

    <Layout>
        <SEO title="About" />
        <section id="page-banner" className="pt-105 pb-110 bg_cover" data-overlay={8} style={{ backgroundImage: 'url(images/page-banner-1.jpg)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-banner-cont">
                            <h2>About Us</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">About Us</li>
                                </ol>
                            </nav>
                        </div>  {/* page banner cont */}
                    </div>
                </div> {/* row */}
            </div> {/* container */}
        </section>

        <section id="about-page" className="pt-70 pb-110">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="section-title mt-50">
                            <h5>About us</h5>
                            
                        </div> {/* section title */}
                        <div className="about-cont">
                            <p>The programs at Nziza Training Academy are career-oriented in design - current, flexible, and useful. Taught
by leaders in their fields, keeping themselves updated, to keep the lessons on track with the cutting-edge
developments in the world of CAD technology.</p>
                        </div>
                    </div> {/* about cont */}
                    <div className="col-lg-7">
                        <div className="about-image mt-50">
                            <img src="images/about/about-2.jpg" alt="About" />
                        </div>  {/* about imag */}
                    </div>
                </div> {/* row */}
               <div className="row">
                    <div className="col-lg-5">
                        <div className="about-image mt-50">
                            <img src="images/about/about-2.jpg" alt="About" />
                        </div>  {/* about imag */}
                    </div>
                    <div className="col-lg-7">
                        <div className="section-title mt-50">
                            <h5>Growing the Next Generation of Engineers AND Architects.</h5>
                          
                        </div> {/* section title */}
                        <div className="about-cont">
                            <p>Nziza Training Academy (NTA) has been training Professionals since October 2018 and is passionate about
helping people succeed in an industry.</p>

                            <p>Our trainees are given a strong foundation in engineering through practical training and gaining
international recognized certificates. The centers’ excellent facilities and experienced staff train
professionals in Architecture, Structural Engineering and Construction Management.</p>
                        </div>
                    </div> {/* about cont */}
                   
                </div> {/* row */}
                <div className="row">
                    <div className="col-lg-7">
                        <div className="section-title mt-50">
                            <h5>Working on designing a better world</h5>
                           
                        </div> {/* section title */}
                        <div className="about-cont">
                            <p>We are Nziza Training Academy (NTA), and we inspire, inform and influence the global engineering and
architecture community to design a better world. As a diverse home across engineering and technology, we
share the knowledge that helps make better sense of the world in order to solve the challenges that
matter. It is why we are uniquely placed to champion skills development.</p>
                        </div>
                    </div> {/* about cont */}
                    <div className="col-lg-5">
                        <div className="about-image mt-50">
                            <img src="images/about/about-2.jpg" alt="About" />
                        </div>  {/* about imag */}
                    </div>
                   

                </div> {/* row */}

            </div> {/* container */}
        </section>

        <section id="event-part" className="pt-120">
            <div className="container">
                <div className="event-bg bg_cover" style={{ backgroundImage: 'url(images/bg-3.jpg)' }}>
                    <div className="row">
                        <div className="col-lg-5 offset-lg-6 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                            <div className="event-2 pt-90 pb-70">
                                <div className="event-title">
                                    <h3>Our Values</h3>
                                </div> {/* event title */}
                                <ul>
                                    <li>
                                        <div className="singel-event">
                                           
                                            <h3>Integrity</h3>
                                            <p style={{color:"white"}}>Operate professionally and ethically to gain trust thru giving real world competency to professionals.</p>
                                           
                                        </div>
                                        <div className="singel-event">

                                           <h3>Excellence</h3>
                                            <p style={{ color: "white" }}>Work towards the highest level of service and satisfaction thru using agile methods and seek innovative solutions to add value.</p>

                                        </div>
                                        <div className="singel-event">

                                            <h3>Teamwork</h3>
                                            <p style={{ color: "white" }}>Encourage staff and pro-trainees to work together thru recognizing the value of talented individuals working in teams and being collaborative and partner with other world-class organizations.</p>

                                        </div>
                                    </li>
                                </ul>
                            </div> {/* event 2 */}
                        </div>
                    </div> {/* row */}
                </div>
            </div> {/* container */}
        </section>



    </Layout>
)

export default AboutPage