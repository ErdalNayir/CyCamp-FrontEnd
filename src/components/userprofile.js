import React, { useState } from "react";
import "../styles/userprofilestyle.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Editpopup from "../helpers/editpopup";
import { useNavigate } from "react-router-dom";

export default function Userprofile() {
  const [edit, setEditPopup] = useState(false);
  const navigate = useNavigate();

  function openCloseEdit() {
    setEditPopup(!edit);
  }

  return (
    <div className="fluid-container">
      <Editpopup show={edit} handleClose={openCloseEdit}></Editpopup>
      <div className="mx-auto ">
        <div className="bg-white shadow  overflow-hidden">
          <div className="row">
            <div className="px-4 pt-0 pb-5 cover">
              <div className="media align-items-end profile-head">
                <div className="profile mr-4">
                  <img
                    src="https://avatars.githubusercontent.com/u/76615367?v=4"
                    alt="profile photo"
                    width="130"
                    className="rounded mb-1 img-thumbnail "
                  />
                </div>
                <div className="media-body mb-5 text-white">
                  <h4 className="mt-0 mb-0">
                    Erdal Nayir
                    <IconButton
                      onClick={openCloseEdit}
                      className="updateButton"
                      aria-label="Update Profile"
                      sx={{
                        color: "gray",
                        "&:hover, &.Mui-focusVisible": {
                          backgroundColor: "lightgray",
                        },
                      }}
                    >
                      <CreateIcon />
                    </IconButton>
                  </h4>
                  <p className="small mb-5">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    Ankara/Turkey
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row bg-light mx-auto">
            <div className="col-8 text-start text-md-start">
              <div className=" p-4 justify-content-end">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <h5 className="font-weight-bold mb-0 d-block">215</h5>
                    <small className="text-muted">
                      <i className="fas fa-image mr-1"></i>
                      Rotalar
                    </small>
                  </li>
                  <li className="list-inline-item">
                    <h5 className="font-weight-bold mb-0 d-block">745</h5>
                    <small className="text-muted">
                      <i className="fas fa-user mr-1"></i>Takipciler
                    </small>
                  </li>
                  <li className="list-inline-item">
                    <h5 className="font-weight-bold mb-0 d-block">340</h5>
                    <small className="text-muted">
                      <i className="fas fa-user mr-1"></i>Takip Edilen
                    </small>
                  </li>
                </ul>
              </div>
            </div>
            <div className="  p-4  col-4 justify-content-right text-center text-md-end ">
              <Button
                variant="outline-success rounded-5 "
                startIcon={<AddIcon />}
              >
                <AddIcon /> Takip Et
              </Button>
            </div>
          </div>
          <div className="row px-3">
            <div className="px-3 py-2">
              <h5 className="mb-2 fs-3 px-4">Hakkımda</h5>
              <div className="p-3  shadow-sm bg-light">
                <p className="font-italic mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  vel convallis felis. Duis ut consectetur lorem. Sed semper
                  lorem at eros vestibulum, eget vulputate libero tempor. Nullam
                  imperdiet risus velit, eget tristique mauris porttitor eu.
                  Fusce non leo metus.
                </p>
              </div>
            </div>
          </div>
          <div className="row  mt-5 ps-5 pe-5">
            <Tabs disableUpDownKeys="true">
              <TabList>
                <Tab>
                  <p>Yüklenen Rotalar</p>
                </Tab>
                <Tab>
                  <p>Favori Rotalar</p>
                </Tab>
              </TabList>

              <TabPanel>
                <div className="panel-content ps-0 ms-3">
                  <div className="row w-80 ">
                    <Card
                      onClick={() => {
                        navigate("/routedetails");
                      }}
                      style={{
                        width: "13rem",
                        cursor: "pointer",
                        marginLeft: 10,
                        marginTop: 10,
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src="https://www.bursa.com.tr/uploads/2020/10/hudavendigar-kent-parki-10_large.jpg"
                        style={{ height: 200 }}
                      />
                      <Card.Body>
                        <Card.Title>Hüdavendigar Parkı</Card.Title>
                        <Card.Text>
                          Bursanın büyük parklarından biri kesinlikle öneririm
                        </Card.Text>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                          <div className="d-flex text-center">
                            <Avatar
                              src="https://avatars.githubusercontent.com/u/76615367?v=4"
                              sx={{ bgcolor: "red", height: 40, width: 40 }}
                              aria-label="profile"
                            ></Avatar>
                            <p className="py-2 px-2">Erdal Nayir</p>
                          </div>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                    <Card
                      onClick={() => {
                        navigate("/routedetails");
                      }}
                      style={{
                        width: "13rem",
                        cursor: "pointer",
                        marginLeft: 10,
                        marginTop: 10,
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src="https://cdn1.ntv.com.tr/gorsel/2cdpik-KskCov4njT2Faqw.jpg?width=1000&mode=crop&scale=both"
                        style={{ height: 200 }}
                      />
                      <Card.Body>
                        <Card.Title>
                          Büyükşehir Belediyesi Kamp Alanı
                        </Card.Title>
                        <Card.Text>
                          Bir çok kişi buraya gelip kamp yapıyor. İlk deneyim
                          olarak çok güzeldi
                        </Card.Text>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                          <div className="d-flex text-center">
                            <Avatar
                              sx={{ bgcolor: "red", height: 40, width: 40 }}
                              aria-label="profile"
                              src="https://avatars.githubusercontent.com/u/76615367?v=4"
                            ></Avatar>
                            <p className="py-2 px-2">Erdal Nayir</p>
                          </div>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                    <Card
                      onClick={() => {
                        navigate("/routedetails");
                      }}
                      style={{
                        width: "13rem",
                        cursor: "pointer",
                        marginLeft: 10,
                        marginTop: 10,
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src="https://www.bursa.com.tr/uploads/2020/10/ataturk-kent-ormani-2_large.jpg"
                        style={{ height: 200 }}
                      />
                      <Card.Body>
                        <Card.Title>Atatürk Kent Ormanı</Card.Title>
                        <Card.Text>
                          Ailecek piknik yapmaya buraya gelmiştik. Büyük bir
                          orman!
                        </Card.Text>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                          <div className="d-flex text-center">
                            <Avatar
                              sx={{ bgcolor: "red", height: 40, width: 40 }}
                              aria-label="profile"
                              src="https://avatars.githubusercontent.com/u/76615367?v=4"
                            ></Avatar>
                            <p className="py-2 px-2">Erdal Nayir</p>
                          </div>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="panel-content">
                  <p className="emptyTab text-center">Favori rota sayısı 0</p>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
