import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TeamPage = () => (

   <Layout>
       <SEO title="Team"/>
        <section id="page-banner" className="pt-105 pb-110 bg_cover" data-overlay={8} style={{ backgroundImage: 'url(images/page-banner-3.jpg)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-banner-cont">
                            <h2>Team</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Team</li>
                                </ol>
                            </nav>
                        </div>  {/* page banner cont */}
                    </div>
                </div> {/* row */}
            </div> {/* container */}
        </section>

        <section id="teachers-page" className="pt-90 pb-120 gray-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="singel-teachers mt-30 text-center">
                            <div className="image">
                                <img src="images/teachers/t-1.jpg" alt="team" />
                            </div>
                            <div className="cont">
                                <a href="#"><h6>Lorem</h6></a>
                                <span>Ipsum</span>
                            </div>
                        </div> {/* singel teachers */}
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

export default TeamPage