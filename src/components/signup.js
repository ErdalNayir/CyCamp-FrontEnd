import React from "react";
import "../styles/registerstyle.css";

import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  return (
    <div className="Container">
      <div className="registerContainer">
        <div className="headerContainer">
          <h1 className="registerHeader">Kayıt Ol</h1>
        </div>
        <hr id="divider" />
        <form>
          <div className="registerElementContainer">
            <input
              className="registerInput"
              type="text"
              placeholder="Ad"
              name="user_name"
              required
            />
            <input
              className="registerInput"
              type="text"
              placeholder="Soyad"
              name="user_surname"
              required
            />
          </div>
          <div className="registerElementContainer">
            <input
              type="email"
              className="registerEmail"
              placeholder="E-posta"
              name="reg_email"
              required
            />
          </div>
          <div className="registerElementContainer">
            <input
              type="date"
              className="registerDate"
              placeholder="Doğum tarihi"
              name="reg_date"
              required
            />
          </div>
          <div className="registerGenderContainer">
            <div className="radioGenderMale">
              <label for="erkek">Erkek</label>
              <input
                type="radio"
                id="erkek"
                name="fav_language"
                value="Erkek"
                required
              />
            </div>
            <div className="radioGenderFemale">
              <label for="kadin">Kadın</label>
              <input
                className="radioGender"
                type="radio"
                id="kadin"
                name="fav_language"
                value="Kadın"
                required
              />
            </div>
          </div>

          <div className="registerElementContainer">
            <input
              className="registerInput"
              type="password"
              placeholder="Şifrenizi girin"
              name="password_one"
              required
            />
            <input
              className="registerInput"
              type="password"
              placeholder="Tekrar şifrenizi girin"
              name="password_two"
              required
            />
          </div>
          <div className="registerElementContainer">
            <input
              type="checkbox"
              className="userAgreement"
              name="userAgreement"
              value="beMember"
              required
            />
            <label for="userAgreement">
              Kullanıcı sözleşmesini kabul ediyorum
            </label>
            <br />
          </div>

          <div className="registerBttnContainer">
            <button
              className="doneRegisterBtton"
              type="submit"
              name="registerPage"
              onClick={() => navigate("/homepage")}
            >
              Kayıt Ol
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
