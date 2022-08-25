import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/routedetailsstyle.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import { Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Footer from "./footer";
import MainMap from "../leaflet-map/mainmap";

export default function Routedetails() {
  const [value, setValue] = React.useState(2);

  return (
    <div>
      <div className="bg-white mx-auto overflow-hidden">
        <div className="row g-3 pb-5 ">
          <div className="col-sm-6 order-md-2 text-center ">
            <div className="maps">
              <MainMap newStyle="details"></MainMap>
            </div>
          </div>
          <div className="col-sm-6 order-md-1 text-center  ">
            <div className="row">
              <Carousel className=" d-none d-md-flex">
                <Carousel.Item>
                  <img
                    height={260}
                    className="d-flex w-100"
                    src={
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg/1200px-Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg"
                    }
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    height={260}
                    className="d-flex w-100"
                    src={
                      "https://cdn.thewirecutter.com/wp-content/media/2022/06/summer-camp-2048px-1199232997-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024"
                    }
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    height={260}
                    className="d-flex w-100"
                    src={
                      "https://cdne-camp.azureedge.net/img/hangar-camping-1-1200.webp"
                    }
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <div className="row ms-2 py-3 g-0">
                <div className="col-md-4">
                  {" "}
                  <PlaceIcon sx={{ color: "#879ead" }}></PlaceIcon>
                  Istanbul,Üsküdar, Turkey
                </div>
                <div className="col-md-4 px-5 text-muted d-none d-md-flex">
                  <span color="#879ead">
                    <AccessTimeIcon fontSize="small"></AccessTimeIcon>3 yıl önce
                    yüklendi
                  </span>
                </div>
                <div className="col-md-4 py-2">
                  <Rating name="read-only" value={4} readOnly />
                  <Typography sx={{ color: "gray", fontSize: "10px" }}>
                    (25 Ratings)
                  </Typography>
                </div>
              </div>
              <div className="row py-2">
                <div className="col-md-4 px-5 py-2 d-none d-md-block  ">
                  <Avatar
                    alt="Profile image"
                    src={require("../assets/images/BaranYalçın.jpeg")}
                    sx={{ width: 120, height: 120 }}
                  />
                  <Typography
                    sx={{
                      color: "#1d4159",
                      fontSize: "18px",
                      fontWeight: "bold",
                      textAlign: "center",
                      paddingRight: "40px",
                      paddingTop: "5px",
                    }}
                  >
                    Baran Yalçın
                  </Typography>
                </div>
                <div className="col-md-8  text-start ">
                  <p className="routeKind ms-3">Yürüyüş Rotası</p>
                  <p className="ms-3 routeHeader">
                    Bu rota dünyanın en güzel rotasıdır.
                  </p>
                </div>
              </div>
              <div className="row py-2 ms-1 text-start">
                <div className="col-md-12">
                  <hr className="divider" />
                  <div className="aboutHeader ms-3 pb-2">Bu rota hakkında</div>
                  <div className="aboutDesription ms-3 pb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                  <hr className="divider" />
                </div>
              </div>
              <div className="row py-2 ms-1 text-start">
                <div className="ratingHeader ms-3 pb-2">
                  Bu rotayı değerlendirin
                </div>
                <div className="col-6">
                  <div className="routeRate">5.0</div>
                  <div className="howManyRated">
                    <Typography
                      sx={{
                        color: "#1d4159",
                        fontSize: "0.9em",
                      }}
                    >
                      (3 Oy)
                    </Typography>
                  </div>
                </div>
                <div className="col-6 ">
                  <Rating
                    sx={{ fontSize: "4rem" }}
                    className="starRate"
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </div>
                <hr className="divider" />
              </div>
              <div className="row py-2 ms-1  text-start pb-5 ps-2 mx-auto">
                <div className="commentsHeader ms-3 pb-4 "> 3 Yorumlar</div>
                <div className="col-2 pe-5 ps-0 ms-0 d-none d-md-block">
                  <Avatar
                    className="commentorAvatar"
                    alt="Profile image"
                    src={require("../assets/images/UğurÖztürk.jpeg")}
                    sx={{ width: 60, height: 60 }}
                  />
                </div>

                <div className="col-12 col-sm-10 ps-2 text-center">
                  <form>
                    <TextField
                      required
                      className="commentBox w-100"
                      multiline={true}
                      rows={2}
                      id="outlined-basic"
                      label="Yorumunuz:"
                      variant="outlined"
                    />
                    <div className="text-end pe-5">
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          background:
                            "linear-gradient(257deg,#2bb8fd,#1381fa);",
                          paddingLeft: "20px",
                          paddingRight: "20px",
                          marginTop: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        Yorum Ekle
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row py-2 ms-0 px-0  text-start pb-5">
                <div className="comments-container ps-0">
                  <ul className="comments">
                    <li className="comment-element pb-3">
                      <Avatar
                        className="commentorAvatar"
                        alt="Profile image"
                        src={
                          "https://avatars.githubusercontent.com/u/76615367?v=4"
                        }
                        sx={{
                          width: 60,
                          height: 60,
                          overflow: "hidden",
                          paddingLeft: "0px",
                        }}
                      />
                      <div className="comment-text-container w-100">
                        <span className="commentorName">erdalnayir</span>
                        <br />
                        Yol üzerinde köpek yok değil mi ?
                      </div>
                    </li>
                    <li className="comment-element pb-3">
                      <Avatar
                        className="commentorAvatar"
                        alt="Profile image"
                        src={require("../assets/images/EfeHüseyinBayrak.jpeg")}
                        sx={{
                          width: 60,
                          height: 60,
                          overflow: "hidden",
                          paddingLeft: "0px",
                        }}
                      />
                      <div className="comment-text-container  w-100">
                        <span className="commentorName"> efe.hsyn</span>
                        <br />
                        iyi eğlenceler.
                      </div>
                    </li>
                    <li className="comment-element pb-3">
                      <Avatar
                        className="commentorAvatar"
                        alt="Profile image"
                        src={require("../assets/images/BaranYalçın.jpeg")}
                        sx={{
                          width: 60,
                          height: 60,
                          overflow: "hidden",
                          paddingLeft: "0px",
                        }}
                      />
                      <div className="comment-text-container  w-100">
                        <span className="commentorName">byalcin</span>
                        <br />
                        Çay var mı?
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
