import React, { Component } from "react";
import "../styles/forgottenpassword.css";

export default class Forgettenpassword extends Component {
  render() {
    return (
      <div className="Container">
        <div className="panelDesign">
          <div className="littleContainer">
            <h3>Hesabınızı Kurtarın</h3>
          </div>
          <hr />
          <div>
            <div className="requestText">
              <h5>
                Doğrulama kodu için hesabınıza bağlı e-posta adresini giriniz
              </h5>
            </div>
            <form>
              <div className="emailPlace">
                <input
                  type="email"
                  className="inputs"
                  placeholder="Email adresini giriniz"
                  name="money"
                  required
                />
              </div>
              <hr />
              <div className="buttonPlace">
                <button
                  className="confirmButton"
                  type="submit"
                  name="confirmButton"
                >
                  Kod gönder
                </button>
                <button
                  className="cancelButton"
                  type="submit"
                  name="cancelButton"
                >
                  İptal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
