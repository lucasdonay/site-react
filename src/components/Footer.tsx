import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.scss";
import { Instagram } from "@mui/icons-material";

function Footer() {
  return (
    <footer>
      <div>
        <a
          href="https://github.com/lucasdonay"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/lucasdonay/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://www.instagram.com/donays/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
