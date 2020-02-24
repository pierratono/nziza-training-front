import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from "../components/seo"

import ReactTextCollapse from 'react-text-collapse'
import ReactMarkdown from "react-markdown"

const TEXT_COLLAPSE_OPTIONS = {
    collapse: false, // default state when component rendered
    collapseText: '... read more', // text to show when collapsed
    expandText: 'read less', // text to show when expanded
    minHeight: 110, // component height when closed
    maxHeight: 250, // expanded to
    textStyle: { // pass the css for the collapseText and expandText here
        color: "#007c9c",
        fontSize: "16px"
    }
}

const CourseTemplate = ({ data }) => (
    <Layout>
        <SEO title={data.strapiCourses.title} />
        <section id="page-banner" className="pt-105 pb-110 bg_cover" data-overlay={8} style={{ backgroundImage: 'url(images/page-banner-2.jpg)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-banner-cont">
                            <h2>{data.strapiCourses.title}</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    {/* <li className="breadcrumb-item"><Link to="courses">Courses</Link></li> */}
                                    <li className="breadcrumb-item active" aria-current="page">{data.strapiCourses.title}</li>
                                </ol>
                            </nav>
                        </div>  {/* page banner cont */}
                    </div>
                </div> {/* row */}
            </div> {/* container */}
        </section>

        <section id="corses-singel" className="pt-90 pb-120 gray-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="corses-singel-left mt-30">
                            <div className="title">
                                <h3>{data.strapiCourses.title}</h3><Link to="register" className="main-btn">Register Now</Link>
                            </div> {/* title */}
                            <div className="corses-singel-image pt-50">
                                <img src="images/course/cu-1.jpg" alt="Courses" />
                            </div> {/* corses singel image */}
                            <div className="corses-tab mt-30">
                                <ul className="nav nav-justified" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="active" id="overview-tab" data-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a id="curriculam-tab" data-toggle="tab" href="#curriculam" role="tab" aria-controls="curriculam" aria-selected="false">Curriculam</a>
                                    </li> */}
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                                        <div className="overview-description">
                                            <div className="singel-description pt-40">
                                                <h6>Course Summery</h6>
                                                <ReactMarkdown source={data.strapiCourses.description}/>
                                            </div>
                                            <div className="singel-description pt-40">
                                                <h6>Requrements</h6>
                                                <p>{data.strapiCourses.note}</p>
                                            </div>
                                        </div> {/* overview description */}
                                    </div>
                                    <div className="tab-pane fade" id="curriculam" role="tabpanel" aria-labelledby="curriculam-tab">
                                        <div className="curriculam-cont">
                                            <div className="title">
                                                <h6>{data.strapiCourses.title}</h6>
                                            </div>
                                            <div className="accordion" id="accordionExample">
                                                <div className="card">
                                                    <div className="card-header" id="headingOne">
                                                        <a href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            <ul>
                                                                <li><i className="fa fa-file-o" /></li>
                                                                <li><span className="lecture">Lecture 1.1</span></li>
                                                                <li><span className="head">What is javascirpt</span></li>
                                                                <li><span className="time d-none d-md-block"><i className="fa fa-clock-o" /> <span> 00.30.00</span></span></li>
                                                            </ul>
                                                        </a>
                                                    </div>
                                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="headingTow">
                                                        <a href="#" data-toggle="collapse" className="collapsed" data-target="#collapseTow" aria-expanded="true" aria-controls="collapseTow">
                                                            <ul>
                                                                <li><i className="fa fa-file-o" /></li>
                                                                <li><span className="lecture">Lecture 1.2</span></li>
                                                                <li><span className="head">What is javascirpt</span></li>
                                                                <li><span className="time d-none d-md-block"><i className="fa fa-clock-o" /> <span> 00.30.00</span></span></li>
                                                            </ul>
                                                        </a>
                                                    </div>
                                                    <div id="collapseTow" className="collapse" aria-labelledby="headingTow" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="headingThree">
                                                        <a href="#" data-toggle="collapse" className="collapsed" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            <ul>
                                                                <li><i className="fa fa-file-o" /></li>
                                                                <li><span className="lecture">Lecture 1.3</span></li>
                                                                <li><span className="head">What is javascirpt</span></li>
                                                                <li><span className="time d-none d-md-block"><i className="fa fa-clock-o" /> <span> 00.30.00</span></span></li>
                                                            </ul>
                                                        </a>
                                                    </div>
                                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="headingFore">
                                                        <a href="#" data-toggle="collapse" className="collapsed" data-target="#collapseFore" aria-expanded="false" aria-controls="collapseFore">
                                                            <ul>
                                                                <li><i className="fa fa-file-o" /></li>
                                                                <li><span className="lecture">Lecture 1.4</span></li>
                                                                <li><span className="head">What is javascirpt</span></li>
                                                                <li><span className="time d-none d-md-block"><i className="fa fa-clock-o" /> <span> 00.30.00</span></span></li>
                                                            </ul>
                                                        </a>
                                                    </div>
                                                    <div id="collapseFore" className="collapse" aria-labelledby="headingFore" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="headingFive">
                                                        <a href="#" data-toggle="collapse" className="collapsed" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                            <ul>
                                                                <li><i className="fa fa-file-o" /></li>
                                                                <li><span className="lecture">Lecture 1.5</span></li>
                                                                <li><span className="head">What is javascirpt</span></li>
                                                                <li><span className="time d-none d-md-block"><i className="fa fa-clock-o" /> <span> 00.30.00</span></span></li>
                                                            </ul>
                                                        </a>
                                                    </div>
                                                    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="headingSix">
                                                        <a href="#" data-toggle="collapse" className="collapsed" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                            <ul>
                                                                <li><i className="fa fa-file-o" /></li>
                                                                <li><span className="lecture">Lecture 1.6</span></li>
                                                                <li><span className="head">What is javascirpt</span></li>
                                                                <li><span className="time d-none d-md-block"><i className="fa fa-clock-o" /> <span> 00.30.00</span></span></li>
                                                            </ul>
                                                        </a>
                                                    </div>
                                                    <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="headingSeven">
                                                        <a href="#" data-toggle="collapse" className="collapsed" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                            <ul>
                                                                <li><i className="fa fa-file-o" /></li>
                                                                <li><span className="lecture">Lecture 1.7</span></li>
                                                                <li><span className="head">What is javascirpt</span></li>
                                                                <li><span className="time d-none d-md-block"><i className="fa fa-clock-o" /> <span> 00.30.00</span></span></li>
                                                            </ul>
                                                        </a>
                                                    </div>
                                                    <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> {/* curriculam cont */}
                                    </div>
                                 </div> {/* tab content */}
                            </div>
                        </div> {/* corses singel left */}
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-12 col-md-6">
                                <div className="course-features mt-30">
                                    <h4>Course Features </h4>
                                    {/* <ul>
                                        <li><i className="fa fa-clock-o" />Duaration : <span>10 Hours</span></li>
                                        <li><i className="fa fa-clone" />Leactures : <span>09</span></li>
                                        <li><i className="fa fa-beer" />Quizzes :  <span>05</span></li>
                                        <li><i className="fa fa-user-o" />Students :  <span>100</span></li>
                                    </ul> */}
                                    <div className="price-button pt-10">
                                        <span>Price : <b>{data.strapiCourses.price} USD</b></span><br/>
                                        
                                    </div>
                                </div> {/* course features */}
                            </div>
                            <div className="col-lg-12 col-md-6">
                                <div className="You-makelike mt-30">
                                    <h4>Course Gallery</h4>
                                    <div className="singel-makelike mt-20">
                                        <div className="image">
                                            <img src="images/your-make/y-1.jpg" alt="Image" />
                                        </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div> {/* row */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="releted-courses pt-95">
                            <div className="title">
                                <h3>Releted Courses</h3>
                            </div>
                            <div className="row">
                                {data.allStrapiCourses.nodes.map(course => (
                                    <div key={course.id} className="col-lg-4">
                                        <div className="singel-course" key={course.id}>
                                            <div className="thum">
                                                <div className="image">
                                                    <img src="images/course/cu-1.jpg" alt="Course" />
                                                </div>

                                            </div>
                                            <p className="pl-30 pt-20" style={{ color: "#9b2000", fontWeight: "bold" }}>{course.price} USD</p>
                                            <div className="cont">
                                                <Link to={`/${course.id}`}><h5>{course.title}</h5></Link>
                                                <div className="course-teacher">
                                                    <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
                                                        <p>{course.brief}</p>
                                                    </ReactTextCollapse>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}</div> {/* row */}
                        </div> {/* releted courses */}
                    </div>
                </div> {/* row */}
            </div> {/* container */}
        </section>


       
        {/* <p>by <Link to={`/authors/User_${data.strapiCourses.author.id}`}>{data.strapiCourses.author.username}</Link></p> */}

    </Layout>
)

export default CourseTemplate

export const query = graphql`
  query CourseTemplateAndIndexQuery($id: String!) {
    strapiCourses(id: {eq: $id}) {
      title
      description
      price
      note
    }
     allStrapiCourses {
    nodes {
      id
      title
      brief
      price
      cover {
        publicURL
      }
    }
  }
  }`

