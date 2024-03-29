import React from "react";
import PropTypes from "prop-types";
import avatarAbout from "../assets/avatar-about.jpeg";
import avatarSkills from "../assets/avatar-skills.png";
import "../styles/avatar.css";

const Avatar = ({ page }) => {
  const avatarClass = `avatar ${page}`;
  const spanClass = `shadow-overlay-${page}`;

  return (
    <>
      <span className={spanClass}></span>
      <img
        src={page === "about" ? avatarAbout : avatarSkills}
        className={avatarClass}
        alt="avatar"
      />
    </>
  );
};

Avatar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Avatar;
