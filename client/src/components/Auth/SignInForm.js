import React, { useState } from "react";
import axios from "axios";
import { RiEye2Line, RiEyeOffFill } from "react-icons/ri";
import useStyles from "./styles";
const SignInForm = () => {
    const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

  const handleLogin = (event) => {
    event.preventDefault();

    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          localStorage.setItem("jwt", res.data.token)
          window.location = '/ReseauSocialV2';
        }
      })
      .catch((err) => {
        console.log(err)
      });
  };

  return (
    <form action="" onSubmit={handleLogin} id="sign-up-form">
      <label htmlFor="email">Email</label>
      <br />
      <input
        type="text"
        name="email"
        id="email"
        placeholder="jeanclenche@mespieds.fr"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <div className="email error"></div>
      <br />
      <label htmlFor="password">Mot de passe</label>
      <br />
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        id="password"
        placeholder="•••••••••"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      {showPassword ? <RiEyeOffFill toggle="#password" className={classes.eyeIcon} onClick={() => handleShowPassword()}/> : <RiEye2Line toggle="#password" className={classes.eyeIcon} onClick={() => handleShowPassword()}/>}
      <div className="password error"></div>
      <br />
      <input type="submit" value="Connexion" />
    </form>
  );
};

export default SignInForm;