import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";

export default function Optionpopup(props) {
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        className="overflow-hidden"
      >
        <Modal.Body className="mx-auto p-0 pt-3 overflow-hidden">
          <a
            role="button"
            className="d-block text-center text-decoration-none link-dark "
          >
            <p>Kullanıcıyı takip et</p>
          </a>
          <hr />
          <a
            role="button"
            className="d-block text-center text-decoration-none link-dark"
          >
            <p>Rotayı favorilerime ekle</p>
          </a>
          <hr />
          <a
            role="button"
            className="d-block text-center text-decoration-none  link-dark"
          >
            <p>Rotayı Paylaş</p>
          </a>
        </Modal.Body>
      </Modal>
    </>
  );
}
