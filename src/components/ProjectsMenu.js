import React, { Component } from "react";
import projects from "../data/projectsData";
import classNames from "classnames";
import "../styles/projectMenu.css";

export default class ProjectsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: 1,
    };
  }

  handleProjectClick = (project) => {
    this.setState({
      activeProject: project,
    });
  };

  readerContent = (projects) => {
    return (
      <>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-sub-container-${index + 1} carousel`}
          >
            {project.length > 1 &&
              project.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <h2 className="project-title">{item.title}</h2>
                  <img
                    className="carousel-item"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="carousel-text">{item.description}</div>
                </div>
              ))}

            {!project.length && (
              <>
                <div className="no-carousel">
                  <h3>{project.title}</h3>
                  <img src={project.image} alt={project.title} />
                  <div>{project.description}</div>
                </div>
              </>
            )}
          </div>
        ))}
      </>
    );
  };

  render() {
    const { activeProject } = this.state;
    const projectItems = ["DATA", "BACKEND", "FRONTEND"];

    return (
      <div className="project-menu">
        <div className="project-items-container">
          {projectItems.map((item, index) => (
            <div
              key={index}
              className={classNames("project-item", {
                activeProject: activeProject === index + 1,
              })}
              onClick={() => this.handleProjectClick(index + 1)}
            >
              <h2 className="title">{item} </h2>
            </div>
          ))}
        </div>
        <div className="project-sub-container">
          {this.readerContent([projects[activeProject]])}
        </div>
      </div>
    );
  }
}
