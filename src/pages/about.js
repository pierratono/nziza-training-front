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

        <section id="event-part" className="pt-20">
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
                                           
                                            <h3 style={{ color: "#9b2000" }}>Integrity</h3>
                                            <p style={{color:"white"}}>Operate professionally and ethically to gain trust thru giving real world competency to professionals.</p>
                                           
                                        </div>
                                        <div className="singel-event">

                                            <h3 style={{ color: "#9b2000"}}>Excellence</h3>
                                            <p style={{ color: "white" }}>Work towards the highest level of service and satisfaction thru using agile methods and seek innovative solutions to add value.</p>

                                        </div>
                                        <div className="singel-event">

                                            <h3 style={{ color: "#9b2000" }}>Teamwork</h3>
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

        <section id="page-banner" className="pt-105 pb-110 bg_cover" data-overlay={8} style={{ backgroundImage: 'url(images/page-banner-1.jpg)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-banner-cont">
                            <h2 >Benefits of training with us</h2>
                            <p style={{color:"white"}}>We provide custom-made training that will meet your needs as a professional. At Nziza Training Academy, we do not believe in one-size fits all. We use our vision to design short skill courses that will help one reach new heights.</p>
                        </div>  {/* page banner cont */}
                    </div>
                </div> {/* row */}
            </div> {/* container */}
        </section>

        <section id="about-page" className="pt-70 pb-110">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12">
                        <div className="happy-student mt-55">
                            <div className="happy-title">
                                <h4 style={{ color: "white" }}>Message from the CEO</h4>
                            </div>
                            <div className="student-slied">

                                <div className="singel-student">
                                    <img src="images/teachers/teacher-2/quote.png" alt="Quote" />
                                    <p>Hello ladies and gentlemen!</p>
                                    <p>With due respect, It is my mammoth honor to welcome you at Nziza Training Academy; it has been initiated
to assist the purpose of connecting the gap between academic institutions and the industry, classroom
knowledge and practical skill, qualifications and qualities through competency based training programs. We
are here to provide educational training that truly work!</p>
                                    <p>I had found the lack of proper training processes, course guidelines and skill development at most of
educational institutes in developing countries. I have found a very big and serious gap between what
universities are currently teaching from their curriculum and what is needed at jobmarket. This inspired me
to fill in the void by setting up Nziza Training Academy and support it with importing world level experts to
come local and enhanced the competency our local professionals in engineering and architecture
industries. Focusing much about international industry trending CAD technologies and we do make that
fruitful by a highly qualified, skilled and motivated team at local market.</p>
                                    <p>Nziza Training Academy commenced its journey with the futuristic vision of Rwanda as a leader in the
region. We promise to provide you a quality educational training with individual care. We visualize the
dreams of professionals and align our objectives with their career success to make them employable. We
believe that right education is the pillar of firm life, and today's education must be skill-based rather than
theoretical knowledge based. Our training programs deliver students with a strong stand to build their
careers on.</p>
                                    <p>With the computerization of business and nonbusiness processes in the present decade, the right technical
knowledge and skill set is the only career solution and that is what we are offering. Thank you very much
for your attention, meet you at any of Nziza Training Academy branches. See you there!</p>

                                    <p>I wish you the best!</p>
                                    <h6>Alexandre NZIRORERA</h6>
                                    <span>CEO - Nziza Training Academy</span>
                                </div> {/* singel student */}
                            </div> {/* student slied */}
                            <div className="student-image">
                                <img src="images/teachers/teacher-2/happy.png" alt="Image" />
                            </div>
                        </div> {/* happy student */}
                    </div>

                </div> {/* row */}
               

            </div> {/* container */}
        </section>




    </Layout>
)

export default AboutPage