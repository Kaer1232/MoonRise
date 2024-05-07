import { Alert, Box, Button, Card, TextField } from "@mui/material";
import React, {useState, SyntheticEvent, useEffect } from "react";
import "./AuthStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faWhatsapp, faGooglePlusG, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { IUserData } from "../../../type";
import { Email } from "@mui/icons-material";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../providers/useAuth";
import { useNavigate } from "react-router-dom";


const Auth: React.FC = () => {
  const {ga, user} = useAuth()
  const [buttonClicked, setButtonClicked] = useState(false);
  const [isRegForm, setIsRegForm] = useState(false);
  const history = useNavigate()
  const [userData, setUserData] = useState<IUserData>({
    email: "",
    password: "",
  } as IUserData);
  const [error, setError] = useState('');

  const handleLogin= async (e:SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isRegForm) {
      try {
        await createUserWithEmailAndPassword(ga, userData.email, userData.password)
        console.log("Register");
        setIsRegForm(false)
        history('/profile')}
      catch(error:any){
      error.message && setError(error?.message)
      }
    }
    else {
      try {
        await signInWithEmailAndPassword(ga, userData.email, userData.password)
        console.log("Register");
        setIsRegForm(false)
        history('/')}
      catch(error:any){
      error.message && setError(error?.message)
      }
      console.log("auth");
    }
    console.log(userData.email, userData.password);

    setUserData(
      {
        email: "",
        password: ""
      }
    )
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

  return (
    <>
    {error && <Alert severity="error">{error}</Alert>}
    <Card className="container" id="container">
      <Box className="form-container sign-up">
        <form onSubmit={handleLogin} action="">
          <h1 className="center">Добро пожаловать!</h1>
          <div className="social-icons">
            <a href="#" title="Link" className="icon">
              <FontAwesomeIcon icon={faXTwitter} bounce />
            </a>
            <a href="#" title="Link" className="icon">
              <FontAwesomeIcon icon={faGooglePlusG} bounce />
            </a>
            <a href="#" title="Link" className="icon">
              <FontAwesomeIcon icon={faWhatsapp} bounce />
            </a>
            <a href="#" title="Link" className="icon">
              <FontAwesomeIcon icon={faYoutube} bounce />
            </a>
          </div>
          <TextField InputProps={{ disableUnderline: true }} type="email" placeholder="Email" value={userData.email}
          onChange={e => setUserData({...userData, email: e.target.value})}/>
          <TextField type="password" placeholder="Password" value={userData.password}
          onChange={e => setUserData({...userData, password: e.target.value})}/>
          <Button type='submit' 
          onClick={() => setIsRegForm(true)}>Зарегистрироваться</Button>
        </form>
      </Box>
      <Box className="form-container sign-in">
        <form onSubmit={handleLogin} action="">
        <h1>Добро пожаловать!</h1>
        <div className="social-icons">
            <a href="#" title="Link" className="icon">
              <FontAwesomeIcon icon={faXTwitter} bounce />
            </a>
            <a href="#" title="Link" className="icon">
              <FontAwesomeIcon icon={faGooglePlusG} bounce />
            </a>
            <a href="#" title="Link" className="icon">
              <FontAwesomeIcon icon={faWhatsapp} bounce />
            </a>
            <a href="#" title="Link" className="icon">
              <FontAwesomeIcon icon={faYoutube} bounce />
            </a>
          </div>

          <span>и</span>
          <TextField type="email" placeholder="Email" value={userData.email}
          onChange={e => setUserData({...userData, email: e.target.value})}/>
          <TextField type="password" placeholder="Password" value={userData.password}
          onChange={e => setUserData({...userData, password: e.target.value})}/>
          <Button type='submit' id="hidden" className="login" onClick={() => setIsRegForm(false)}>
            Войти
          </Button>
        <Box className="toggle-container">
          <Box className="toggle">
            <Box className="toggle-panel toggle-left">
              <h1></h1>
              <p>Зарегистрируйтесь, указав свои личные данные, чтобы пользоваться всеми функциями сайта</p>
              <Button className="hidden" id="login">
              У меня уже есть аккаунт
              </Button>
            </Box>
            <Box className="toggle-panel toggle-right">
              <h1>Привет, друг!</h1>
              <p>Введите свои личные данные, чтобы войти в свой аккаунт</p>
              <Button className="hidden" id="register" onClick={handleClick}>
                Нет аккаунта?
              </Button>
            </Box>
          </Box>
        </Box>
        </form>
      </Box>
    </Card>
    </>
  );
};

export default Auth;