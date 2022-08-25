import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "../styles/addroutestyle.css";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

import ReactModal from "react-modal";
import Dropzone from "react-dropzone";
import Geoman from "../leaflet-map/components/geoman";
import "aos/dist/aos.css";
import MainMap from "../leaflet-map/mainmap";

export default function Addroute() {
  const [modal, setModal] = useState(false);
  const [images, setImages] = useState([]);

  function openCloseModal() {
    setModal(!modal);
    console.log(modal);
  }

  function appendImages(...props) {
    for (let i = 0; i < props[0].length; i++) {
      images.push(props[0][i]);
    }
    console.log(images);
    setImages(images);
  }

  ReactModal.defaultStyles.content.borderRadius = "10px";
  ReactModal.defaultStyles.content.top = "10%";
  ReactModal.defaultStyles.content.left = "12%";
  ReactModal.defaultStyles.content.right = "12%";
  ReactModal.defaultStyles.content.bottom = "2%";
  ReactModal.defaultStyles.overlay.backgroundColor = "rgba(0,0,0,0.2)";

  return (
    <div className="shareContainer">
      <ReactModal
        appElement={document.getElementById("root")}
        style={{ borderRadius: "50px" }}
        isOpen={modal}
        contentLabel="onRequestClose Example"
        onRequestClose={openCloseModal}
        portalClassName="myModal"
      >
        <div className="modalHeader">
          <h3 className="modelHdrTxt">Rota ya da Kamp alanı ekle</h3>
          <a className="modalClose" onClick={openCloseModal}>
            x
          </a>
        </div>

        <hr />
        <div className="modalContent">
          <form>
            <div className="modalChooseOnMap">
              <MainMap newStyle="add"></MainMap>
            </div>
            <div className="modalInputTxt">
              <input
                className="route-header-text"
                type="text"
                placeholder="Başlık giriniz"
                name="routeHeader"
                required
              />

              <input
                className="route-description-text"
                type="text"
                placeholder="Açıklama giriniz"
                name="routeDesription"
                required
              />
              <input
                className="route-description-text mt-3"
                type="text"
                placeholder="Hashtag giriniz"
                name="routeHashtag"
                required
              />

              <div className="load-photo-section">
                <Dropzone
                  accept={{
                    "image/*": [".png", ".jpeg", ".jpg"],
                  }}
                  onDrop={(acceptedFiles) => {
                    appendImages(acceptedFiles);
                  }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        {images.length == 0 ? (
                          <p>
                            Yüklemek istediğiniz resmi buraya sürükleyin ya da
                            resim yüklemek için tıklayın
                          </p>
                        ) : (
                          <p>{images.length} resim yüklediniz</p>
                        )}
                      </div>
                    </section>
                  )}
                </Dropzone>
              </div>
              <div className="submit-container">
                <input className="submit-button" type="submit" value="Yükle" />
              </div>
            </div>
          </form>
        </div>
      </ReactModal>

      <div className="inputShare">
        <div className="shareAvatar">
          <Avatar
            className=""
            alt="Profile image"
            src={"https://avatars.githubusercontent.com/u/76615367?v=4"}
            sx={{ width: 40, height: 40, overflow: "hidden" }}
          />
        </div>
        <div className="inputPlace">
          {" "}
          <input
            onClick={openCloseModal}
            className="input-element"
            type="text"
            placeholder="Beğendiğin rotayı ya da kamp noktasını paylaş"
          ></input>
        </div>
      </div>
      <hr className="divider"></hr>
      <div className="buttonPlace">
        <ul className="buttons">
          <li className="button-list-element">
            <a className="button-element" onClick={openCloseModal}>
              <i>
                <AddLocationAltIcon
                  sx={{ color: "#F3425F" }}
                ></AddLocationAltIcon>
              </i>
              Rota veya Kamp Alanı ekle
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
