import { Link, useLocation } from "react-router-dom";
import aboutMe from "../assets/talk.png";
import skills from "../assets/skills.png";
import projects from "../assets/projects.png";
import contact from "../assets/communicate.png";
import "../styles/nav.css";

export default function Nav() {
  const location = useLocation();

  const getNavPositionClass = () => {
    switch (location.pathname) {
      case "/":
        return "nav-about";
      case "/skills":
        return "nav-skills";
      case "/projects":
        return "nav-projects";
      case "/contact":
        return "nav-contact";
      default:
        return "";
    }
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "ABOUT";
      case "/skills":
        return "SKILLS";
      case "/projects":
        return "PROJECTS";
      case "/contact":
        return "CONTACT";
      default:
        return "";
    }
  };

  const navPositionClass = getNavPositionClass();
  const pageTitle = getPageTitle();

  const isCurrentPage = (navClass) => {
    return navClass === navPositionClass;
  };

  const renderNavLink = (to, imgSrc, altText, navClass) => {
    const isCurrent = isCurrentPage(navClass);
    const linkClass = isCurrent ? "nav-link current" : "nav-link";

    return (
      <Link to={to} className={linkClass}>
        <img src={imgSrc} alt={altText} />
        <span className="nav-background-icon"></span>
        {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
      </Link>
    );
  };

  return (
    <nav className={`nav ${navPositionClass}`}>
      {renderNavLink("/", aboutMe, "about icon", "nav-about")}
      {renderNavLink("/skills", skills, "skills icon", "nav-skills")}
      {renderNavLink("/projects", projects, "projects icon", "nav-projects")}
      {renderNavLink("/contact", contact, "contact icon", "nav-contact")}
    </nav>
  );
}
