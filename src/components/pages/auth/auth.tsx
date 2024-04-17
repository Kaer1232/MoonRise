import { Box, Button, Card } from "@mui/material";
import React, { SyntheticEvent, useEffect, useState } from "react";
import "./AuthStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { IUserData } from "../../../type";

const Auth: React.FC = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [userData, setUserData] = useState<IUserData>({
    email: "",
    password: "",
  } as IUserData);
  const handleLogin=(e:SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userData.email, userData.password);
  }
  const handleClick = () => {
    const container = document.getElementById("container");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");

    const handleRegisterClick = () => {
      if (container) {
        container.classList.add("active");
      }
    };

    const handleLoginClick = () => {
      if (container) {
        container.classList.remove("active");
      }
    };

    if (registerBtn) {
      registerBtn.addEventListener("click", handleRegisterClick);
    }

    if (loginBtn) {
      loginBtn.addEventListener("click", handleLoginClick);
    }

    setButtonClicked(true);
  };

  useEffect(() => {
    const container = document.getElementById("container");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");

    const handleRegisterClick = () => {
      if (container) {
        container.classList.add("active");
      }
    };

    const handleLoginClick = () => {
      if (container) {
        container.classList.remove("active");
      }
    };

    if (registerBtn) {
      registerBtn.addEventListener("click", handleRegisterClick);
    }

    if (loginBtn) {
      loginBtn.addEventListener("click", handleLoginClick);
    }
  }, []);

  return (
    <Card className="container" id="container">
      <Box className="form-container sign-up">
        <form action="">
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faYoutube} bounce />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faYoutube} bounce />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faYoutube} bounce />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faYoutube} bounce />
            </a>
          </div>
          <input type="email" placeholder="Email" value={userData.email}
          onChange={e => setUserData({...userData, email: e.target.value})}/>
          <input type="password" placeholder="Password" value={userData.password}
          onChange={e => setUserData({...userData, password: e.target.value})}/>
          <Button>ssss</Button>
        </form>
      </Box>
      <Box className="form-container sign-in">
        <form action="">
        <h1>Войти</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faYoutube} bounce />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faYoutube} bounce />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faYoutube} bounce />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faYoutube} bounce />
            </a>
          </div>

          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <Button id="hidden" className="login">
            Войти
          </Button>
        <Box className="toggle-container">
          <Box className="toggle">
            <Box className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <Button className="hidden" id="login">
              Зарегистрироваться
              </Button>
            </Box>
            <Box className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all of site features</p>
              <Button className="hidden" id="register" onClick={handleClick}>
                Создать Аккаунт
              </Button>
            </Box>
          </Box>
        </Box>
        </form>

      </Box>
    </Card>
  );
};

export default Auth;