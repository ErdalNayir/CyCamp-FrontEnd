import React, { Component, useEffect, useState } from "react";
import "../styles/main.css";
import CountUp from "react-countup";
import Aos from "aos";
import "aos/dist/aos.css";
import Ticker from "../helpers/ticker";
import { useNavigate } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";

export default function Landing() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
    Aos.refresh();
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <Header value={0} />
      <section className="hero">
        <div data-aos="fade-up" className="hero-container">
          <h3>
            <strong>
              <span>CyC</span>amp
            </strong>
          </h3>
          <h1>Mükemmel Rotanı Bul</h1>
          <h2>
            Türkiye'nin her yerinden çeşitli kamp noktaları, bisiklet ve yürüyüş
            yollarını keşfet
          </h2>
          <a
            onClick={() => {
              navigate("/login");
            }}
            className="btn-get-started "
          >
            Şimdi Kayıt Ol
          </a>
        </div>
      </section>
      <main className="main">
        <section className="about">
          <div className="container">
            <div data-aos="fade-up" className="section-title">
              <h2>Ne sunuyoruz</h2>
              <h3>
                <span>Cyc</span>amp ile sporu, teknoloji ile buluşturuyoruz
              </h3>
              <p>
                Kendi zevklerinize göre sunulan harika bisiklet rotaları, kamp
                noktaları ve en iyi yürüyüş yolları hepsi tek tık uzağınızda!
              </p>
            </div>
          </div>
        </section>
        <section className="services">
          <div className="container">
            <div data-aos="fade-up" className="section-title">
              <h2>Popüler Rotalar</h2>
              <h3>
                Türkiye'nin <span>en populer </span> yerlerinden
                <span> rotalar</span> bu sitede!
              </h3>
              <p>
                Türkiye'nin her yerinden, favori rotanı yükle ve diğer
                kullanıcıları da kendi keşfine ortak et.
              </p>
            </div>

            <img
              data-aos="fade-right"
              className="bicycleWithWoman"
              src={require("../assets/images/bicycle.png")}
              alt="bicycle"
            />
          </div>
        </section>
        <section className="cta">
          <div className="container">
            <div className="textContainer mx-auto">
              <h3 data-aos="fade-up">Verilerimiz</h3>
              <p data-aos="fade-up">
                Türkiyenin her yerinden kullanıcılarımız ile uygulamamız sürekli
                güncel kalmakta. Hayal edemeyeceğiniz kadar çok rota ve kamp
                noktasını burda bulabilir ve diğer kullanıcılarla etkileşime
                girip, etkinlik ayarlayabilirsiniz.
              </p>
              <div data-aos="fade-left" className="roww mx-auto ps-4">
                <table className="websiteData">
                  <tbody>
                    <tr>
                      <td className="countHeader">Kullanıcı Sayısı</td>
                      <td className="countHeader">Rota sayısı</td>
                      <td className="countHeader">Kamp noktası sayısı</td>
                    </tr>
                    <tr>
                      <td>
                        <Ticker className="count" end={8362} />
                      </td>
                      <td className="ps-2">
                        <Ticker className="count" end={10239} />
                      </td>
                      <Ticker className="count" end={5439} />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section className="portfolio">
          <div className="container">
            <div data-aos="fade-up" className="section-title">
              <h2>En iyiler</h2>
              <h3>
                Kullanıcılar tarafından <span>beğenilen popüler rotalar</span>
              </h3>
            </div>
            <div data-aos="fade-down" className="routeCards">
              <div className="cardExample">
                <div className="cardImg">
                  <img
                    className="cdImg"
                    src={
                      "https://im.haberturk.com/2018/05/11/ver1526041497/1960101_620x410.jpg"
                    }
                    alt="example Image"
                  />
                </div>
                <div className="cardHeader">İstanbulun en iyi yürüyüş yolu</div>
                <div className="cardSubtitle">Bu rotaya bayılacaksınız</div>
              </div>
              <div className="cardExample">
                <div className="cardImg">
                  <img
                    className="cdImg"
                    src={
                      "https://i.haberler.com/galeri/2019/07/18/iste-turkiye-nin-en-yasanabilir-25-sehri-715194_6788_23_b.jpg"
                    }
                    alt="example Image"
                  />
                </div>
                <div className="cardHeader">Ankarada kamp keyfi</div>
                <div className="cardSubtitle">
                  Ailenizle güzel vakit geçirmek için harika
                </div>
              </div>
              <div className="cardExample">
                <div className="cardImg">
                  <img
                    className="cdImg"
                    src={
                      "https://cdn2.enuygun.com/media/lib/825x620/uploads/image/1160.webp"
                    }
                    alt="example Image"
                  />
                </div>
                <div className="cardHeader">
                  İstanbul yürüyüş ve boğaz manzarası
                </div>
                <div className="cardSubtitle">
                  Sabahları yürüyüş yaparken takip ettiğim favori rotam
                </div>
              </div>
              <div className="cardExample">
                <div className="cardImg">
                  <img
                    className="cdImg"
                    src={"https://i.ytimg.com/vi/VHefX17Y2u0/maxresdefault.jpg"}
                    alt="example Image"
                  />
                </div>
                <div className="cardHeader">Erzurum</div>
                <div className="cardSubtitle">
                  Erzurumda bisiklet tutkunlarının seveceği nadir bisiklet yolu
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="team">
          <div className="container">
            <div data-aos="fade-up" className="section-title">
              <h2>Ekibimiz</h2>
              <h3>
                CyCamp<span> ekibi </span>ile<span> tanışın </span>
              </h3>
            </div>
            <div data-aos="fade-down" className="teamCards">
              <div className="cards">
                <div className="face face2">
                  <div className="content">
                    <h3>Erdal Nayir</h3>
                    <div className="mediaContainer">
                      <div className="Linkedln-element">
                        <IconButton href="https://www.linkedin.com/in/erdal-nayir-9754281b1/">
                          <LinkedInIcon
                            sx={{
                              color: "#000000",
                              height: "40px",
                              width: "40px",
                              "&:hover, &.Mui-focusVisible": {
                                color: "#0a66c2",
                              },
                            }}
                          ></LinkedInIcon>
                        </IconButton>
                      </div>
                      <div className="Github-element">
                        <IconButton href="https://github.com/ErdalNayir">
                          <GitHubIcon
                            sx={{
                              color: "#000000",
                              height: "40px",
                              width: "40px",
                              "&:hover, &.Mui-focusVisible": {
                                color: "#24292F",
                              },
                            }}
                          ></GitHubIcon>
                        </IconButton>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="face face1">
                  <div className="content">
                    <img
                      className="teamImg"
                      src={
                        "https://avatars.githubusercontent.com/u/76615367?v=4"
                      }
                      alt="example Image"
                    />
                  </div>
                </div>
              </div>
              <div className="cards">
                <div className="face face2">
                  <div className="content">
                    <h3>Berat Özbey</h3>
                    <div className="mediaContainer">
                      <div className="Linkedln-element">
                        <IconButton href="https://www.linkedin.com/in/berat-ozbey-71316b154/">
                          <LinkedInIcon
                            sx={{
                              color: "#000000",
                              height: "40px",
                              width: "40px",
                              "&:hover, &.Mui-focusVisible": {
                                color: "#0a66c2",
                              },
                            }}
                          ></LinkedInIcon>
                        </IconButton>
                      </div>
                      <div className="Github-element">
                        <IconButton href="https://github.com/nuadante">
                          <GitHubIcon
                            sx={{
                              color: "#000000",
                              height: "40px",
                              width: "40px",
                              "&:hover, &.Mui-focusVisible": {
                                color: "#24292F",
                              },
                            }}
                          ></GitHubIcon>
                        </IconButton>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="face face1">
                  <div className="content">
                    <img
                      className="teamImg"
                      src={
                        "https://avatars.githubusercontent.com/u/64546074?v=4"
                      }
                      alt="example Image"
                    />
                  </div>
                </div>
              </div>
              <div className="cards">
                <div className="face face2">
                  <div className="content">
                    <h3>Efe H. Bayrak</h3>
                    <div className="mediaContainer">
                      <div className="Linkedln-element">
                        <IconButton href="https://www.linkedin.com/in/efe-h%C3%BCseyin-bayrak-a330381ab/">
                          <LinkedInIcon
                            sx={{
                              color: "#000000",
                              height: "40px",
                              width: "40px",
                              "&:hover, &.Mui-focusVisible": {
                                color: "#0a66c2",
                              },
                            }}
                          ></LinkedInIcon>
                        </IconButton>
                      </div>
                      <div className="Github-element">
                        <IconButton>
                          <GitHubIcon
                            sx={{
                              color: "#000000",
                              height: "40px",
                              width: "40px",
                              "&:hover, &.Mui-focusVisible": {
                                color: "#24292F",
                              },
                            }}
                          ></GitHubIcon>
                        </IconButton>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="face face1">
                  <div className="content">
                    <img
                      className="teamImg bayrak"
                      src={require("../assets/images/EfeHüseyinBayrak.jpeg")}
                      alt="example Image"
                    />
                  </div>
                </div>
              </div>
              <div className="cards">
                <div className="face face2">
                  <div className="content">
                    <h3>Baran Yalçın</h3>
                    <div className="mediaContainer">
                      <div className="Linkedln-element">
                        <IconButton href="https://www.linkedin.com/in/byalcin21/">
                          <LinkedInIcon
                            sx={{
                              color: "#000000",
                              height: "40px",
                              width: "40px",
                              "&:hover, &.Mui-focusVisible": {
                                color: "#0a66c2",
                              },
                            }}
                          ></LinkedInIcon>
                        </IconButton>
                      </div>
                      <div className="Github-element">
                        <IconButton href="https://github.com/byalcin21">
                          <GitHubIcon
                            sx={{
                              color: "#000000",
                              height: "40px",
                              width: "40px",
                              "&:hover, &.Mui-focusVisible": {
                                color: "#24292F",
                              },
                            }}
                          ></GitHubIcon>
                        </IconButton>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="face face1">
                  <div className="content">
                    <img
                      className="teamImg"
                      src={require("../assets/images/BaranYalçın.jpeg")}
                      alt="example Image"
                    />
                  </div>
                </div>
              </div>
              <div className="cards">
                <div className="face face2">
                  <div className="content">
                    <h3>Uğur Öztürk</h3>
                    <div className="mediaContainer">
                      <div className="Linkedln-element">
                        <IconButton href="https://www.linkedin.com/in/u%C4%9Fur-%C3%B6zt%C3%BCrk-93b2b7194/">
                          <LinkedInIcon
                            sx={{
                              color: "#000000",
                              height: "40px",
                              width: "40px",
                              "&:hover, &.Mui-focusVisible": {
                                color: "#0a66c2",
                              },
                            }}
                          ></LinkedInIcon>
                        </IconButton>
                      </div>
                      <div className="Github-element">
                        <IconButton>
                          <GitHubIcon
                            sx={{
                              color: "#000000",
                              height: "40px",
                              width: "40px",
                              "&:hover, &.Mui-focusVisible": {
                                color: "#24292F",
                              },
                            }}
                          ></GitHubIcon>
                        </IconButton>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="face face1">
                  <div className="content">
                    <img
                      className="teamImg ugur"
                      src={require("../assets/images/UğurÖztürk.jpeg")}
                      alt="example Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="startNow">
          <div data-aos="fade-right" className="startImgContainer">
            <img
              src={require("../assets/images/walkUndertree.png")}
              className="startImg"
            />
          </div>
          <div data-aos="fade-left" className="startButtonContainer">
            <button
              className="noselect"
              onClick={() => {
                navigate("/login");
              }}
            >
              Hadi şimdi sende keşfet!
            </button>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}
