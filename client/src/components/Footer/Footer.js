import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import logo from "../../images/icon.png";
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footerContainer}>
      <ul>
        <li>
          <Link to="./infos">Infos</Link>
        </li>
        <li>
          <Link to="./infos">Conditions générales et confidentialité</Link>
        </li>
      </ul>
      <div className={classes.footerName}>
        <img
          className={classes.image}
          src={logo}
          alt="Logo Unite"
          height="20"
          width="20"
        />
        <span>Unite</span> Corporation © 2022
      </div>
    </div>
  );
};

export default Footer;
