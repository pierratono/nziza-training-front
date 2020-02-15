import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const WorksPage = () => (

    <Layout>
        <SEO title="Works" />
        <section id="page-banner" className="pt-105 pb-110 bg_cover" data-overlay={8} style={{ backgroundImage: 'url(images/page-banner-3.jpg)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-banner-cont">
                            <h2>Works</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Works</li>
                                </ol>
                            </nav>
                        </div>  {/* page banner cont */}
                    </div>
                </div> {/* row */}
            </div> {/* container */}
        </section>

        <section id="event-page" className="pt-90 pb-120 gray-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="singel-event-list mt-30">
                            <div className="event-thum">
                                <img src="images/event/e-1.jpg" alt="Event" />
                            </div>
                            <div className="event-cont">
                                <span><i className="fa fa-calendar" /> 2 December 2018</span>
                                <a href="events-singel.html"><h4>Tech Summit</h4></a>
                                <span><i className="fa fa-clock-o" /> 10:00 Am - 3:00 Pm</span>
                                <span><i className="fa fa-map-marker" /> Rc Auditorim</span>
                                <p>Nam nec tellus a odio tincidunt auctor a ornare odionon mauris itae erat conuat</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="singel-event-list mt-30">
                            <div className="event-thum">
                                <img src="images/event/e-2.jpg" alt="Event" />
                            </div>
                            <div className="event-cont">
                                <span><i className="fa fa-calendar" /> 2 December 2018</span>
                                <a href="events-singel.html"><h4>Tech Summit</h4></a>
                                <span><i className="fa fa-clock-o" /> 10:00 Am - 3:00 Pm</span>
                                <span><i className="fa fa-map-marker" /> Rc Auditorim</span>
                                <p>Nam nec tellus a odio tincidunt auctor a ornare odionon mauris itae erat conuat</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="singel-event-list mt-30">
                            <div className="event-thum">
                                <img src="images/event/e-3.jpg" alt="Event" />
                            </div>
                            <div className="event-cont">
                                <span><i className="fa fa-calendar" /> 2 December 2018</span>
                                <a href="events-singel.html"><h4>Tech Summit</h4></a>
                                <span><i className="fa fa-clock-o" /> 10:00 Am - 3:00 Pm</span>
                                <span><i className="fa fa-map-marker" /> Rc Auditorim</span>
                                <p>Nam nec tellus a odio tincidunt auctor a ornare odionon mauris itae erat conuat</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="singel-event-list mt-30">
                            <div className="event-thum">
                                <img src="images/event/e-4.jpg" alt="Event" />
                            </div>
                            <div className="event-cont">
                                <span><i className="fa fa-calendar" /> 2 December 2018</span>
                                <a href="events-singel.html"><h4>Tech Summit</h4></a>
                                <span><i className="fa fa-clock-o" /> 10:00 Am - 3:00 Pm</span>
                                <span><i className="fa fa-map-marker" /> Rc Auditorim</span>
                                <p>Nam nec tellus a odio tincidunt auctor a ornare odionon mauris itae erat conuat</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="singel-event-list mt-30">
                            <div className="event-thum">
                                <img src="images/event/e-1.jpg" alt="Event" />
                            </div>
                            <div className="event-cont">
                                <span><i className="fa fa-calendar" /> 2 December 2018</span>
                                <a href="events-singel.html"><h4>Tech Summit</h4></a>
                                <span><i className="fa fa-clock-o" /> 10:00 Am - 3:00 Pm</span>
                                <span><i className="fa fa-map-marker" /> Rc Auditorim</span>
                                <p>Nam nec tellus a odio tincidunt auctor a ornare odionon mauris itae erat conuat</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="singel-event-list mt-30">
                            <div className="event-thum">
                                <img src="images/event/e-2.jpg" alt="Event" />
                            </div>
                            <div className="event-cont">
                                <span><i className="fa fa-calendar" /> 2 December 2018</span>
                                <a href="events-singel.html"><h4>Tech Summit</h4></a>
                                <span><i className="fa fa-clock-o" /> 10:00 Am - 3:00 Pm</span>
                                <span><i className="fa fa-map-marker" /> Rc Auditorim</span>
                                <p>Nam nec tellus a odio tincidunt auctor a ornare odionon mauris itae erat conuat</p>
                            </div>
                        </div>
                    </div>
                </div> {/* row */}
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="courses-pagination mt-50">
                            <ul className="pagination justify-content-center">
                                <li className="page-item">
                                    <a href="#" aria-label="Previous">
                                        <i className="fa fa-angle-left" />
                                    </a>
                                </li>
                                <li className="page-item"><a className="active" href="#">1</a></li>
                                <li className="page-item"><a href="#">2</a></li>
                                <li className="page-item"><a href="#">3</a></li>
                                <li className="page-item">
                                    <a href="#" aria-label="Next">
                                        <i className="fa fa-angle-right" />
                                    </a>
                                </li>
                            </ul>
                        </nav>  {/* courses pagination */}
                    </div>
                </div>  {/* row */}
            </div> {/* container */}
        </section>


    </Layout>

)

export default WorksPage