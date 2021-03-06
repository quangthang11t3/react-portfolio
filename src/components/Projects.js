import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import Slider from "react-slick";
import ScrollAnimation from 'react-animate-on-scroll';

var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  centerMode: true,
  autoplaySpeed: 3000,
  autoplay: true,
  dots: false
};

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className="slideItem col-lg-3 col-md-6 col-12"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div>
                  <img
                    src={projects.images[0]}
                    alt="projectImages"
                    height="200"
                    style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
                  />
                  <span className="project-date">{projects.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {projects.title}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <ScrollAnimation animateIn="fadeInUp">
              <h1 className="section-title txt-bold" style={{ color: "black" }}>
                <span>{sectionName}</span>
              </h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp">
            <div className="slideWrap">
              {projects}
            </div>
              
              {/* <div className="col-md-12 mx-auto slideWrap pc-only">
                <Slider {...settings} className="row mx-auto">{projects}</Slider>
              </div>
              <div className="col-md-12 mx-auto slideWrap sp-only">
                {projects}
              </div> */}
          </ScrollAnimation>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
        <ScrollAnimation animateIn="fadeInUp">
          <div className="viewmore">
            <span>View more on</span>
            <p><img
              height="250px"
              src="images/common/hand.png"
              alt="View more"
            /></p>
          </div> 
        </ScrollAnimation>
      </section>
    );
  }
}

export default Projects;
