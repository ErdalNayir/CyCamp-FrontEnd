import React, { Component } from "react";
import "../styles/loginstyle.css";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { loginUser } from "../services/userServices";

export default function Login() {
  const navigate = useNavigate();
  const [serviceData, setServiceData] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    Aos.init({ duration: 3000 });
    Aos.refresh();
  }, []);

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
    console.log(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const requestData = {
      username: username,
      passwordHass: password,
    };

    loginUser(requestData).then((res) => setServiceData(res));

    console.log(serviceData);

    if (serviceData) {
      setServiceData(false);
      console.log("Başarılı");
    } else {
      console.log("başarısız");
    }
  };

  return (
    <div className="Container">
      <div className="mainContainer">
        <div className="textContainer" data-aos="fade-right">
          <img
            src={require("../assets/images/loginLogo.png")}
            style={{ height: "200px" }}
          />
        </div>
        <div className="formContainer">
          <form>
            <input
              type="text"
              className="inputEmail"
              placeholder="Kullanıcı adı"
              name="username"
              value={username}
              onChange={handleChangeUsername}
              required
            />
            <input
              type="password"
              className="inputPassword"
              placeholder="Şifre"
              name="password"
              value={password}
              onChange={handleChangePassword}
              required
            />
            <button
              onClick={handleLogin}
              className="loginButton"
              type="submit"
              name="loginPage"
            >
              Giriş Yap
            </button>
          </form>
          <a
            className="forgetPassword"
            onClick={() => {
              navigate("/forgetpass");
            }}
          >
            Şifremi Unuttum
          </a>
          <hr id="divider" />
          <button
            className="registerButton"
            onClick={() => navigate("/homepage")}
          >
            Yeni Hesap Oluştur
          </button>
        </div>
      </div>
    </div>
  );
}
