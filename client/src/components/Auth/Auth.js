import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import useStyles from "./styles";
import Icon from "./icon";
import logo from "../../images/icon.png";
import { RiEye2Line, RiEyeOffFill } from "react-icons/ri";
import { Button } from "@material-ui/core";
const Auth = (props) => {
  const id = localStorage.getItem("_ID");
  const [signModal, setSignModal] = useState(props.signup);
  const [showPassword, setShowPassword] = useState(false);

  const classes = useStyles();

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleChangeModal = (event) => {
    if (event.target.id === "login") setSignModal(props.signin);
    if (event.target.id === "register") setSignModal(props.signup);
  };

  const handleChange = () => {};

  const handleSubmit = () => {};

  return id ? (
    <Redirect to="/dashboard" />
  ) : (
    <div className={classes.logContainer}>
      <div className={classes.connectionForm}>
        <div className={classes.formContainer}>
          <ul>
            <li
              onClick={handleChangeModal}
              id="register"
              className={signModal ? "active-btn" : null}
            >
              Inscription
            </li>
            <li
              onClick={handleChangeModal}
              id="login"
              className={!signModal ? "active-btn" : null}
            >
              Connexion
            </li>
          </ul>
          <form onSubmit={handleSubmit} id="sign-up-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="email"
              onChange={handleChange}
              required
            />
            <div className="email error"></div>
            {signModal ? (
              <>
                <label htmlFor="firstname">Prénom</label>
                <input
                  type="text"
                  id="firstname"
                  className="firstname"
                  onChange={handleChange}
                  required
                  minLength="2"
                />

                <label htmlFor="lastname">Nom de famille</label>

                <input
                  type="text"
                  id="lastname"
                  className="lastname"
                  onChange={handleChange}
                  required
                  minLength="2"
                />
              </>
            ) : null}
            <label htmlFor="password">Mot de passe</label>
            <div className={classes.inputShowPass}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="password"
              onChange={handleChange}
              required
            />
            {showPassword ? (
              <RiEyeOffFill
                toggle="#password"
                className={classes.eyeIcon}
                onClick={() => handleShowPassword()}
              />
            ) : (
              <RiEye2Line
                toggle="#password"
                className={classes.eyeIcon}
                onClick={() => handleShowPassword()}
              />
            )}
            </div>
            <div className="password error"></div>
            {signModal ? (
              <>
              
                <label htmlFor="password-conf">
                  Confirmation du mot de passe
                </label>
                <div className={classes.inputShowPass}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password-conf"
                  className="confirmPwd"
                  onChange={handleChange}
                />
                {showPassword ? (
                  <RiEyeOffFill
                    toggle="#password"
                    className={classes.eyeIcon}
                    onClick={() => handleShowPassword()}
                  />
                ) : (
                  <RiEye2Line
                    toggle="#password"
                    className={classes.eyeIcon}
                    onClick={() => handleShowPassword()}
                  />
                )}
                </div>
                <div className="password-confirm error"></div>
                <input type="checkbox" id="enjoy" />
                <label htmlFor="enjoy">
                  J'accepte <b>d'espionner mes collègues</b>
                </label>
                <div className="enjoy error"></div>
              </>
            ) : null}
            <div className={classes.submitContainer}>
              <GoogleLogin
                clientId="GOOGLE ID"
                icon="true"
                buttonText="Se connecter avec Google"
                className={classes.googleButton}
              />
              {signModal ? (
                <input type="submit" value="S'inscrire" />
              ) : (
                <input type="submit" value="Connexion" />
              )}
            </div>
          </form>
        </div>
      </div>
      <div className={classes.imgContainer}>
        <img
          className={classes.image}
          src={logo}
          alt=""
          height="40"
          width="40"
        />
        <h1>Unite</h1>
      </div>
    </div>
  );
};

export default Auth;
