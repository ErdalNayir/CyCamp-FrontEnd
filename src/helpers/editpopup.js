import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";

export default function Editpopup(props) {
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        className="overflow-hidden"
      >
        <form className="text-center ">
          <Modal.Body className="mx-auto p-0 pt-3 overflow-hidden">
            <input
              className="route-description-text"
              type="text"
              placeholder="Yeni isim: "
              name="routeDesription"
            />
            <hr />
            <input
              className="route-description-text"
              type="text"
              placeholder="Hakkımda: "
              name="routeDesription"
            />
            <hr />
            <input
              className="route-description-text"
              type="text"
              placeholder="Konum: "
              name="routeDesription"
            />
            <hr />
            <input
              className="submit-button mb-3 mx-auto"
              type="submit"
              value="Güncelle"
            />
          </Modal.Body>
        </form>
      </Modal>
    </>
  );
}
