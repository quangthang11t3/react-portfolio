import React, { Component } from "react";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";
import phpIcon from "@iconify/icons-logos/php";
import wpIcon from "@iconify/icons-logos/wordpress";
import jsIcon from "@iconify/icons-logos/javascript";
import mysqlIcon from "@iconify/icons-logos/mysql";
import htmlIcon from "@iconify/icons-logos/html-5";
import cssIcon from "@iconify/icons-logos/css-3";
import laravelIcon from "@iconify/icons-logos/laravel";
import ScrollAnimation from 'react-animate-on-scroll';
// import languageHtml5 from '@iconify-icons/mdi/language-html5';


class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <ScrollAnimation animateIn="fadeInUp">
            <h1 className="txt-bold" style={{ color: "black" }}>
              <span>{sectionName}</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp">
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <div>
                    <Icon
                      icon={htmlIcon}
                      style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                    />
                    <Icon
                      icon={cssIcon}
                      style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                    />
                    <Icon
                      icon={jsIcon}
                      style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                    />
                  </div>
                    <Icon
                      icon={vueIcon}
                      style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                    />
                    <Icon
                      icon={reactIcon}
                      style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                    />
                    <Icon
                      icon={angularIcon}
                      style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                    />
                  <div>
                    <Icon
                      icon={phpIcon}
                      style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                    />
                    <Icon
                      icon={mysqlIcon}
                      style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                    />
                  </div>
                  <div>
                    <Icon
                      icon={laravelIcon}
                      style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                    />
                    <Icon
                      icon={wpIcon}
                      style={{ fontSize: "200%", margin: "9% 5% 0 5%" }}
                    />
                  </div>
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} </span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
          </ScrollAnimation>
        </div>
      </section>
    );
  }
}

export default About;