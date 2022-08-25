import React, { useState } from "react";
import "../styles/homepagestyle.css";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

import ShareIcon from "@mui/icons-material/Share";
import { IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Header from "./header";
import Footer from "./footer";
import Addroute from "../helpers/addroute";

import Optionpopup from "../helpers/optionpopup";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import QrGenerator from "../helpers/qrgenerator";
import Modal from "react-bootstrap/Modal";

export default function Homepage() {
  const [value, setNewStyle] = useState(false);
  const [colour, setColor] = useState(false);
  const [popup, setPopup] = useState(false);
  const [url, setUrl] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function openCloseComment() {
    setNewStyle(!value);
  }

  function openClosePopup() {
    setPopup(!popup);
  }

  function shareQRLink() {
    console.log("Tıklandı");
    setUrl(window.location.href);
    setShow(!show);
    console.log(url);
  }

  return (
    <div>
      <Optionpopup show={popup} handleClose={openClosePopup}></Optionpopup>
      <Header value={1} />
      <div className="containWrap">
        <div className="postRow">
          <div className="postColumOne">
            <Addroute></Addroute>
            <div className="postContainer">
              <div className="uploaderProfile">
                <div>
                  <Avatar
                    alt="Profile image"
                    src={"https://avatars.githubusercontent.com/u/76615367?v=4"}
                    sx={{ width: 30, height: 30 }}
                  />
                </div>
                <div className="userName">erdalnayir</div>
                <div className="optionMenu" onClick={openClosePopup}>
                  ...
                </div>
              </div>

              <img
                className="postCrausel"
                src="https://www.flypgs.com/blog/wp-content/uploads/2021/01/turkiyede-kamp-yapilacak-goller.jpg"
              />
              <div className="likeComment">
                <div className="like">
                  <IconButton
                    onClick={() => setColor(!colour)}
                    sx={{
                      color: "black",
                    }}
                  >
                    <svg
                      className="leafButton"
                      version="1.0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="25px"
                      height="25px"
                      viewBox="0 0 512.000000 512.000000"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g
                        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                        stroke="none"
                        fill={colour ? "#22EF22" : "black"}
                      >
                        <path
                          d="M3753 5041 c-106 -93 -281 -223 -402 -298 -147 -92 -271 -152 -501
-241 -767 -299 -1304 -652 -1661 -1093 -455 -562 -581 -1267 -355 -1979 70
-218 197 -489 225 -478 5 2 35 41 67 88 123 182 271 338 434 460 442 331 878
765 1201 1195 233 309 472 725 589 1022 24 62 46 111 47 109 7 -7 -81 -253
-144 -406 -345 -832 -881 -1537 -1548 -2036 -188 -140 -289 -262 -400 -484
-72 -145 -135 -305 -179 -457 -37 -128 -82 -323 -92 -397 l-7 -46 39 16 c22 9
93 36 159 59 l120 43 21 98 c34 163 91 328 161 466 l66 130 46 -6 c111 -13
482 -18 597 -7 591 54 1061 273 1456 679 306 315 544 744 641 1157 74 315 80
773 16 1160 -39 232 -113 498 -206 735 -76 193 -278 580 -303 580 -5 0 -44
-31 -87 -69z"
                        />
                      </g>
                    </svg>
                  </IconButton>
                </div>
                <div className="comment">
                  <IconButton
                    onClick={openCloseComment}
                    sx={{
                      color: "black",
                    }}
                  >
                    <ModeCommentOutlinedIcon></ModeCommentOutlinedIcon>
                  </IconButton>
                </div>
                <div className="share">
                  <IconButton
                    onClick={shareQRLink}
                    sx={{
                      color: "black",
                    }}
                  >
                    <ShareIcon></ShareIcon>
                  </IconButton>

                  <Modal show={show} onHide={handleClose} animation={true}>
                    <Modal.Header closeButton>
                      <Modal.Title>Gönderiyi Paylaş</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-center mx-auto  ps-5 ">
                      <QrGenerator url={url}></QrGenerator>
                    </Modal.Body>
                    <Modal.Body className="text-center mx-auto  ps-3 ">
                      <div>{url}</div>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
              <div className="likeCount">102 beğeni</div>
              <div className="postDescription">
                <p className="uploadDetails">
                  <span className="uploaderName">erdalnayir</span> Doğa
                  manzarasıyla kamp keyfi.
                </p>
              </div>

              {value ? (
                <div className="commentSection">
                  <div className="makeComment">
                    <div className="commentorAvatar">
                      <Avatar
                        alt="Profile image"
                        src={
                          "https://avatars.githubusercontent.com/u/76615367?v=4"
                        }
                        sx={{ width: 35, height: 35, overflow: "hidden" }}
                      />
                    </div>
                    <div className="commentInput">
                      <input
                        className="comment-input-element"
                        type="text"
                        placeholder="Yorum yaz"
                      ></input>
                    </div>
                  </div>
                  <div className="comments-container">
                    <ul className="comments">
                      <li className="comment-element">
                        <Avatar
                          className="commentorAvatar"
                          alt="Profile image"
                          src={require("../assets/images/UğurÖztürk.jpeg")}
                          sx={{
                            width: 35,
                            height: 35,
                            overflow: "hidden",
                            paddingLeft: "0px",
                          }}
                        />
                        <div className="comment-text-container">
                          <span className="commentorName">ugroztrk</span>
                          <br />
                          Çok güzel bir yer, iyi eğlenceler.
                        </div>
                      </li>
                      <li className="comment-element">
                        <Avatar
                          className="commentorAvatar"
                          alt="Profile image"
                          src={require("../assets/images/EfeHüseyinBayrak.jpeg")}
                          sx={{
                            width: 35,
                            height: 35,
                            overflow: "hidden",
                            paddingLeft: "0px",
                          }}
                        />
                        <div className="comment-text-container">
                          <span className="commentorName">efe.hsyn</span>
                          <br />
                          Kamp ateşinde yemek yemeden gelme.
                        </div>
                      </li>
                      <li className="comment-element">
                        <Avatar
                          className="commentorAvatar"
                          alt="Profile image"
                          src={require("../assets/images/BaranYalçın.jpeg")}
                          sx={{
                            width: 35,
                            height: 35,
                            overflow: "hidden",
                            paddingLeft: "0px",
                          }}
                        />
                        <div className="comment-text-container">
                          <span className="commentorName">byalcin</span>
                          <br />
                          İyi eğlenceler kanka.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <p></p>
              )}
              <div className="viewDetails">
                <a
                  onClick={() => {
                    navigate("/routedetails");
                  }}
                  className="viewDetails"
                >
                  Detayları görmek için tıklayınız.
                </a>
              </div>
            </div>
            <div className="postContainer">
              <div className="uploaderProfile">
                <div>
                  <Avatar
                    alt="Profile image"
                    src={require("..//assets/images/UğurÖztürk.jpeg")}
                    sx={{ width: 30, height: 30 }}
                  />
                </div>
                <div className="userName">Uğur Öztürk</div>
                <div className="optionMenu" onClick={openClosePopup}>
                  ...
                </div>
              </div>

              <img
                className="postCrausel"
                src="https://i4.hurimg.com/i/hurriyet/75/1110x740/5b6ac3a55379fe0148ebc024.jpeg"
              />
              <div className="likeComment">
                <div className="like">
                  <IconButton
                    onClick={() => setColor(!colour)}
                    sx={{
                      color: "black",
                    }}
                  >
                    <svg
                      className="leafButton"
                      version="1.0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="25px"
                      height="25px"
                      viewBox="0 0 512.000000 512.000000"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g
                        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                        stroke="none"
                        fill={colour ? "#22EF22" : "black"}
                      >
                        <path
                          d="M3753 5041 c-106 -93 -281 -223 -402 -298 -147 -92 -271 -152 -501
-241 -767 -299 -1304 -652 -1661 -1093 -455 -562 -581 -1267 -355 -1979 70
-218 197 -489 225 -478 5 2 35 41 67 88 123 182 271 338 434 460 442 331 878
765 1201 1195 233 309 472 725 589 1022 24 62 46 111 47 109 7 -7 -81 -253
-144 -406 -345 -832 -881 -1537 -1548 -2036 -188 -140 -289 -262 -400 -484
-72 -145 -135 -305 -179 -457 -37 -128 -82 -323 -92 -397 l-7 -46 39 16 c22 9
93 36 159 59 l120 43 21 98 c34 163 91 328 161 466 l66 130 46 -6 c111 -13
482 -18 597 -7 591 54 1061 273 1456 679 306 315 544 744 641 1157 74 315 80
773 16 1160 -39 232 -113 498 -206 735 -76 193 -278 580 -303 580 -5 0 -44
-31 -87 -69z"
                        />
                      </g>
                    </svg>
                  </IconButton>
                </div>
                <div className="comment">
                  <IconButton
                    onClick={openCloseComment}
                    sx={{
                      color: "black",
                    }}
                  >
                    <ModeCommentOutlinedIcon></ModeCommentOutlinedIcon>
                  </IconButton>
                </div>
                <div className="share">
                  <IconButton
                    sx={{
                      color: "black",
                    }}
                  >
                    <ShareIcon></ShareIcon>
                  </IconButton>
                </div>
              </div>
              <div className="likeCount">102 beğeni</div>
              <div className="postDescription">
                <p className="uploadDetails">
                  <span className="uploaderName">UgrOztrk</span> Çok güzel bir
                  yer. Herkesin görmesi lazım.
                </p>
              </div>

              {value ? (
                <div className="commentSection">
                  <div className="makeComment">
                    <div className="commentorAvatar">
                      <Avatar
                        alt="Profile image"
                        src={
                          "https://avatars.githubusercontent.com/u/76615367?v=4"
                        }
                        sx={{ width: 35, height: 35, overflow: "hidden" }}
                      />
                    </div>
                    <div className="commentInput">
                      <input
                        className="comment-input-element"
                        type="text"
                        placeholder="Yorum yaz"
                      ></input>
                    </div>
                  </div>
                  <div className="comments-container">
                    <ul className="comments">
                      <li className="comment-element">
                        <Avatar
                          className="commentorAvatar"
                          alt="Profile image"
                          src={
                            "https://avatars.githubusercontent.com/u/76615367?v=4"
                          }
                          sx={{
                            width: 35,
                            height: 35,
                            overflow: "hidden",
                            paddingLeft: "0px",
                          }}
                        />
                        <div className="comment-text-container">
                          <span className="commentorName">erdalnayir</span>
                          <br />
                          Rahat uyuyabildiniz mi?
                        </div>
                      </li>
                      <li className="comment-element">
                        <Avatar
                          className="commentorAvatar"
                          alt="Profile image"
                          src={require("../assets/images/EfeHüseyinBayrak.jpeg")}
                          sx={{
                            width: 35,
                            height: 35,
                            overflow: "hidden",
                            paddingLeft: "0px",
                          }}
                        />
                        <div className="comment-text-container">
                          <span className="commentorName"> efe.hsyn</span>
                          <br />
                          iyi eğlenceler.
                        </div>
                      </li>
                      <li className="comment-element">
                        <Avatar
                          className="commentorAvatar"
                          alt="Profile image"
                          src={require("../assets/images/BaranYalçın.jpeg")}
                          sx={{
                            width: 35,
                            height: 35,
                            overflow: "hidden",
                            paddingLeft: "0px",
                          }}
                        />
                        <div className="comment-text-container">
                          <span className="commentorName">byalcin</span>
                          <br />
                          Çay var mı?
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <p></p>
              )}
              <div className="viewDetails">
                <a
                  onClick={() => {
                    navigate("/routedetails");
                  }}
                  className="viewDetails"
                >
                  Detayları görmek için tıklayınız
                </a>
              </div>
            </div>
          </div>
          <div className="postColumnTwo">
            {/* <div className="friendsProfile">
              <div className="profilePhoto">
                <Avatar
                  alt="Profile image"
                  src={require("../assets/images/NatureCamp.jpeg")}
                  sx={{ width: 60, height: 60 }}
                />
              </div>
              <div className="realUserName">
                <div className="profileUserText">Erdal Nayir</div>
                <div className="profileRealText">erdal_nyr</div>
              </div>
              <div className="exitText">Çıkış yap</div>
            </div>
            <div className="someOfFollowedPerson"></div> */}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
