import React from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import img_expert from "../images/all-icon/expert.png"
import img_almuni from "../images/all-icon/man.png"
import img_courses from "../images/all-icon/book.png"
import f_1 from "../images/all-icon/f-1.png"
import f_2 from "../images/all-icon/f-2.png"
import f_3 from "../images/all-icon/f-3.png"
import back from "../images/bg-1.jpg"


export default () => (
  <Layout>
    <SEO title="Home" />

    <section id="slider-part-3" className="bg_cover" style={{ backgroundImage: 'url(images/slider/s-3.jpg)' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">

          </div>
        </div> {/* row */}
        <div className="slider-feature pt-30 d-none d-md-block">

        </div> {/* slider feature */}
      </div> {/* container */}
    </section>

    <section id="category-3" className="category-2-items pt-50 pb-80 gray-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12" style={{}}>
            <div className=" mt-30" style={{
              backgroundColor: "#fff", borderRadius: '20px', height: 'auto', padding: 16,
              boxShadow: '14px 14px 21px -12px rgba(0,0,0,0.25)'
            }}>
              <h5>Welcome to Nziza Training Academy</h5><br />
              <p>An Industry-Based Training Institution for Engineers, Architects and Project Managers.</p>
              <br />

              <p>We have developed the training content that you need to become a leading candidate in your job market,
              or to unlock knowledge and potential at your current organization. Are you an engineer or architect? Smile,
you have come to the right place!</p>
              <br />

              <p>If you are a professional or college graduate, I am sure you know that currently technology is sheltering
              most industries under its giant umbrella. It has become obligatory for professionals to be skilled in the
              latest, trending technology. Although our technical colleges of today are providing quality education, to
              graduates, it is crucial to master the relevant CAD tools to work as fruitful employees in almost any industry
and that is what we bring to you.</p>
              <br />

              <p>The role of Nziza training academy has never been more challenging. Quality skills need continuous
              improvement as much as do the products they support. This is where university graduates and
professionals meet to learn skills that directly transform lives and immediately generate higher incomes.</p>
              <br />

              <p>All our programs are hands-on training with small venue sizes and highly qualified instructors. Each course is
specifically designed to enhance your industry-based skills and prepare you for next success.</p>
              <br />

              <p>Here, we will help you to combine what you studied in a traditional education system with real world, useful
              software. We offer a tiered and high-quality training curriculum that delivers a comprehensive suite of tools
and a deep understanding of professional principles.</p>
              <br />
            </div> {/* singel slider feature */}
          </div>
        </div> {/* row */}
      </div> {/* container */}
    </section>

    <section id="category-3" className="category-2-items pt-50 pb-80 gray-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="singel-slider-feature justify-content-center mt-30">
              <div className="icon">
                <img src={img_almuni} alt="icon" />
              </div>
              <div className="cont">
                <h3>4</h3>
                <span>Graduated Intakes</span>
              </div>
            </div> {/* singel slider feature */}
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="singel-slider-feature justify-content-center mt-30">
              <div className="icon">
                <img src={img_courses} alt="icon" />
              </div>
              <div className="cont">
                <h3>3</h3>
                <span>Available Courses</span>
              </div>
            </div> {/* singel slider feature */}
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="singel-slider-feature justify-content-center mt-30">
              <div className="icon">
                <img src={img_expert} alt="icon" />
              </div>
              <div className="cont">
                <h3>3</h3>
                <span>Training Venues</span>
              </div>
            </div> {/* singel slider feature */}
          </div>
        </div> {/* row */}
      </div> {/* container */}
    </section>

    <section id="about-part" className="pt-65">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-title mt-50">
              <h5>About us</h5>
              {/* <h4>Welcome to Nziza Training Academy </h4> */}
            </div> {/* section title */}
            <div className="about-cont">

              <p>The programs at Nziza Training Academy are career-oriented in design - current, flexible, and useful. Taught
    by leaders in their fields, keeping themselves updated, to keep the lessons on track with the cutting-edge
developments in the world of CAD technology.</p>
              {/* <a href="#" className="main-btn mt-55">Learn More</a> */}
            </div>
          </div> {/* about cont */}
          <div className="col-lg-6 offset-lg-1">
            <div className="about-event mt-50">
              <div className="event-title">
                <h3>Announcement</h3>
              </div> {/* event title */}
              <ul>
                <li>
                  <div className="singel-event">
                    <span><i className="fa fa-calendar" /> Date</span>
                    <a href="#"><h4>Lorem ipsum</h4></a>
                    <span><i className="fa fa-clock-o" /> If deadline</span>
                    <span><i className="fa fa-user" /> Postedby</span>
                  </div>
                </li>
              </ul>
            </div> {/* about event */}
          </div>
        </div> {/* row */}
      </div> {/* container */}
      <div className="about-bg">
        <img src="images/about/bg-1.png" alt="About" />
      </div>
    </section>

    
    <section id="mission-page" className="pt-70 pb-110" style={{ paddingTop: '0' }}>
      <div className="container">
        <div className="about-items pt-60">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="about-singel-items mt-30">
                <span>01</span>
                <h4>We focus on your career</h4>

                <p>Our programs are focused, preparing professionals for a specific job with specific skills, allowing the
university graduates to get back in the workplace quickly.</p>

                <p>Our instructors work with their trainees every step of the way, delivering courses that are practical and
                goal-oriented. Trainees are guided through every chapter of every program, and the instructors are always
available for suggestions and support.</p>

                <p>Short course programs ensure that each student receives the attention and skills they require to fulfill their
personal and professional needs and that is what we excellently do. Try us today!</p>

              </div> {/* about singel */}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="about-singel-items mt-30">
                <span>02</span>
                <h4>Our Mission</h4>
                <blockquote>To deliver the highest quality skills development curriculum with innovative technology for the
benefit of society locally and globally.</blockquote>
                <blockquote>To support a United Nations goal of quality education thru collaborating with world level technology
organizations.</blockquote>
                <blockquote>To nurture trainees to become culturally and ethically productive Professionals with bright future.</blockquote>          </div> {/* about singel */}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="about-singel-items mt-30">
                <span>03</span>
                <h4>Our vission</h4>
                <blockquote>To provide Continuous market orientated trainings on trending technology.</blockquote>
                <blockquote>To stop developing governments from importing skilled people to deliver every big project raises in a country by releasing expertly trained local professionals.</blockquote>
                <blockquote>To be recognized as an international leader in skills development sector.</blockquote>
              </div> {/* about singel */}
            </div>
          </div> {/* row */}
        </div> {/* about items */}
      </div> {/* container */}
    </section>

    <section id="category-3" className="category-2-items pt-50 pb-80 gray-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12" style={{}}>
            <div className=" mt-30" style={{
              backgroundColor: "#fff", borderRadius: '20px', height: 'auto', padding: 16,
              boxShadow: '14px 14px 21px -12px rgba(0,0,0,0.25)'
            }}>
              <p>No more going on interviews with shaky hands and sweaty faces. Gain the confidence you have always
 wanted, and surprise your employers with the indispensable skills you learned from our program. Jobs are
 not scarce. What is scarce are qualified people with the right skill set to land the high-income jobs and
challenging careers out in the marketplace. Enroll today; put yourself on the path to a brighter future.</p>
              <br />

              <p>NTA hires trainers not only based on their degrees and education but also their record of accomplishment
of delivering projects successfully. Many lecturers with advanced degrees without real project management
and delivery skills are found in traditional colleges, which is the main reason for unemployment among
graduates. These graduates are not prepared for the challenges ahead of them. Nevertheless, as NTA
graduate, you will be fully trained to meet and conquer all the challenges presented to you.</p>
              <br />

              <p>Nziza Training Academy is here to prepare you with high-level expertise in trending technologies of
architecture and engineering that will help you to dominate the current working environment.</p>
              <br />

              <p>Having a strong interface with the industry pooled with our experience, Nziza Training Academy (NTA)
looks at the industry from the cliff top where it can effectively guide an individual in his/her professional
rummage around.</p>




              <br />
            </div> {/* singel slider feature */}
          </div>
        </div> {/* row */}
      </div> {/* container */}
    </section>

    <section id="video-feature" className="bg_cover pt-60 pb-110" style={{ backgroundImage: 'back' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-last order-lg-first">
            <div className="video text-lg-left text-center pt-50">
              {/* <a className="Video-popup" href="https://www.youtube.com/watch?v=bRRtdzJH1oE"><i className="fa fa-play" /></a> */}
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 order-first order-lg-last">
            <div className="feature pt-10">
              <div className="feature-title">
                <h3>OUR TRAINING STRUCTURE</h3>
                <h5 style={{ color:"#c7c7c7"}}>Every course has three parts:</h5>
              </div>
              <ul>
                <li>
                  <div className="singel-feature">
                    <div className="icon">
                      <img src={f_1} alt="icon" />
                    </div>
                    <div className="cont">
                      <h4>Indoor Training</h4>
                      <p>This is fixed three months training period; each trainee will attend class to learn how to link manual design
and calculations taught in college with useful CAD trending technologies in every course we offer. This
training provides an in-depth concentration on project delivery, doing exercises, and assignments.</p>
                    </div>
                  </div> {/* singel feature */}
                </li>
                <li>
                  <div className="singel-feature">
                    <div className="icon">
                      <img src={f_2} alt="icon" />
                    </div>
                    <div className="cont">
                      <h4>Project design study</h4>
                      <p>This is where each trainee accepts a real-life project as a case study in three months that can be extended
due to kind of a project. S/he studies it from scratch under the supervision of experienced trainers.
Completing this project confirms that s/he has attained the competency we promise and turns what was
learned in the training portion of the course has been transformed into real practices.</p>
                    </div>
                  </div> {/* singel feature */}
                </li>
                <li>
                  <div className="singel-feature">
                    <div className="icon">
                      <img src={f_3} alt="icon" />
                    </div>
                    <div className="cont">
                      <h4>Expert Seminar</h4>
                      <p>We know that Rwanda or developing countries in general import many knowledgeable people to run most
of the projects raise. As An Industry-Based Training Institution working in skills development sector, we did
not like that idea of governments to import skills to do the work. That is why in every year we organize one-
week expert training seminar in every course we train. It is for importing world-level experts to highly train
our local professionals instead of importing them to lead projects raise in our country and keep our local
citizens lowly paid or unemployed.</p>
                    </div>
                  </div> {/* singel feature */}
                </li>
              </ul>
            </div> {/* feature */}
          </div>
        </div> {/* row */}
      </div> {/* container */}
      <div className=" feature-bg" /> {/* feature bg */}
    </section>

    <section id="course-part" className="pt-115 pb-120 gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title pb-45">
              <h5>Our course</h5>
              <h2>Latest courses </h2>
            </div> {/* section title */}
          </div>
        </div> {/* row */}
        <div className="row course-slied mt-30">
          <div className="col-lg-4">
            <div className="singel-course">
              <div className="thum">
                <div className="image">
                  <img src="images/course/cu-1.jpg" alt="Course" />
                </div>
                <div className="price">
                  <span>### RWF</span>
                </div>
              </div>
              <div className="cont">

                <a href="courses-singel.html"><h4>Lorem ipsum</h4></a>
                <div className="course-teacher">
                  <p>Gravida nibh vel velit auctor aliquetn auci elit cons solliazcitudirem sem quibibendum sem nibhutis.</p>

                </div>
              </div>
            </div> {/* singel course */}
          </div>
        </div> {/* course slied */}
      </div> {/* container */}
    </section>

    <section id="teachers-part" className="pt-70 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-title mt-50">
              <h5>Professional Team</h5>
              <h2>Meet Our team</h2>
            </div> {/* section title */}
            <div className="teachers-cont">
              <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt  mauris. <br /> <br /> auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt  mauris</p>
              <a href="#" className="main-btn mt-55">Career with us</a>
            </div> {/* team cont */}
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="teachers mt-20">
              <div className="row">
                <div className="col-sm-6">
                  <div className="singel-teachers mt-30 text-center">
                    <div className="image">
                      <img src="images/teachers/t-1.jpg" alt="Teachers" />
                    </div>
                    <div className="cont">
                      <a href="#"><h6>Lorem</h6></a>
                      <span>Dolor</span>
                    </div>
                  </div> {/* singel team */}
                </div>
                <div className="col-sm-6">
                  <div className="singel-teachers mt-30 text-center">
                    <div className="image">
                      <img src="images/teachers/t-2.jpg" alt="team" />
                    </div>
                    <div className="cont">
                      <a href="#"><h6>Lorem</h6></a>
                      <span>Dolor</span>
                    </div>
                  </div> {/* singel team */}
                </div>
                <div className="col-sm-6">
                  <div className="singel-teachers mt-30 text-center">
                    <div className="image">
                      <img src="#" alt="team" />
                    </div>
                    <div className="cont">
                      <a href="#"><h6>Lorem</h6></a>
                      <span>Dolor</span>
                    </div>
                  </div> {/* singel team */}
                </div>
                <div className="col-sm-6">
                  <div className="singel-teachers mt-30 text-center">
                    <div className="image">
                      <img src="images/teachers/t-4.jpg" alt="Team" />
                    </div>
                    <div className="cont">
                      <a href="#"><h6>Lorem</h6></a>
                      <span>Dolor</span>
                    </div>
                  </div> {/* singel team */}
                </div>
              </div> {/* row */}
            </div> {/* team */}
          </div>
        </div> {/* row */}
      </div> {/* container */}
    </section>

    <section id="testimonial" className="bg_cover pt-115 pb-115" data-overlay={8} style={{ backgroundImage: 'url(images/bg-2.jpg)' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title pb-40">
              <h5>Testimonial</h5>
              <h2>WHAT OFFICIALS SAY!</h2>
            </div> {/* section title */}
          </div>
        </div> {/* row */}
        <div className="row testimonial-slied mt-40">
          <div className="col-lg-6">
            <div className="singel-testimonial">
              <div className="testimonial-thum">
                <img src="images/testimonial/t-1.jpg" alt="Testimonial" />
                <div className="quote">
                  <i className="fa fa-quote-right" />
                </div>
              </div>
              <div className="testimonial-cont">
                <p>Aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet sem nibh id elit sollicitudirem </p>
                <h6>Lorem ipsum</h6>
                <span>Lorem ipsum</span>
              </div>
            </div> {/* singel testimonial */}
          </div>

        </div> {/* testimonial slied */}
      </div> {/* container */}
    </section>

    <section id="news-part" className="pt-115 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title pb-50">
              <h5>Latest News</h5>
              <h2>From the news</h2>
            </div> {/* section title */}
          </div>
        </div> {/* row */}
        <div className="row">
          <div className="col-lg-6">
            <div className="singel-news mt-30">
              <div className="news-thum pb-25">
                <img src="images/news/n-1.jpg" alt="News" />
              </div>
              <div className="news-cont">
                <ul>
                  <li><a href="#"><i className="fa fa-calendar" />Date </a></li>
                  <li><a href="#"> <span>By</span> Admin</a></li>
                </ul>
                <a href="blog-singel.html"><h3>Lorem ipsum</h3></a>
                <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt .</p>
              </div>
            </div> {/* singel news */}
          </div>
          <div className="col-lg-6">
            <div className="singel-news news-list">
              <div className="row">
                <div className="col-sm-4">
                  <div className="news-thum mt-30">
                    <img src="images/news/ns-1.jpg" alt="News" />
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="news-cont mt-30">
                    <ul>
                      <li><a href="#"><i className="fa fa-calendar" />Date </a></li>
                      <li><a href="#"> <span>By</span> Admin</a></li>
                    </ul>
                    <a href="blog-singel.html"><h3>Lorem ipsum</h3></a>
                    <p>Gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons  vel.</p>
                  </div>
                </div>
              </div> {/* row */}
            </div> {/* singel news */}

          </div>
        </div> {/* row */}
      </div> {/* container */}
    </section>

    <div id="patnar-logo" className="pt-40 pb-80 gray-bg">
      <div className="container">
        <h2>Our Partners</h2>
        <div className="row patnar-slided">
          <div className="col-lg-4">
            <div className="singel-patnar text-center mt-40">
              <img src="images/patnar-logo/p-1.png" alt="Logo" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="singel-patnar text-center mt-40">
              <img src="images/patnar-logo/p-2.png" alt="Logo" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="singel-patnar text-center mt-40">
              <img src="images/patnar-logo/p-3.png" alt="Logo" />
            </div>
          </div>
        </div> {/* row */}
      </div> {/* container */}
    </div>

  </Layout>



)
