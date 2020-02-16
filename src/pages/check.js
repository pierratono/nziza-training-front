import React from "react"
import{Link} from "gatsby"
import SEO from "../components/seo"
import Logo from "../images/logo.png"

const CheckPage = () => (

   <>
        <SEO title="Certificate" />
    <header id="header-part">
        <div className="navigation navigation-2 navigation-3">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-lg-12 col-md-5 col-sm-3 col-9">
                        <nav className="navbar navbar-expand-lg">
                                <Link to="/"> <img src={Logo} alt="Logo" /></Link>
                          </nav> {/* nav */}
                    </div>
                </div> {/* row */}
            </div> {/* container */}
        </div>
    </header>

        <section id="slider-part-3" className="bg_cover" style={{ backgroundImage: 'url(images/slider/s-3.jpg)',height:"20%" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="slider-cont-3 text-center" style={{ borderRadius: "10px" }}>
                            <h2>Search for graduated trainees</h2>
                           
                            <div className="slider-search mt-45">
                                <form action="#">
                                    <div className="row no-gutters">
                                       
                                        <div className="col-sm-9" style={{ borderRadius: "10px 0px 0px 10px" }}>
                                            <input type="text" style={{ borderRadius: "10px 0px 0px 10px" }} placeholder="Traineer ID" />
                                        </div>
                                        <div className="col-sm-3">
                                            <button type="button" className="main-btn">Search Now</button>
                                        </div>
                                    </div> {/* row */}
                                </form>
                            </div>
                        </div> {/* slider cont3 */}
                    </div>
                </div> {/* row */}
                </div> {/* container */}
        </section>

    </>

   

)

export default CheckPage