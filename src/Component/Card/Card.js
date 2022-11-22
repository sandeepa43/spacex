import React, { useState } from "react";
import "./Card.css";
import { Modal } from "semantic-ui-react";
const Card = ({ status, originalLaunch, serialNumber, details, index }) => {
  const [showModal, setShowModal] = useState(false);
  return showModal ? (
    <Modal
      closeIcon={true}
      open={showModal}
      onClose={() => {
        setShowModal(false);
      }}
      style={{ width: "40%" }}
      onOpen={() => setShowModal(true)}
    >
      <Modal.Header className="modal-header">Capsules</Modal.Header>
      <Modal.Description>
        <div className="card__details">
          <p className="tag">
            <strong>Serial Number</strong>: {serialNumber}{" "}
          </p>

          <p className="tag">
            <strong>Original Launch</strong>: {originalLaunch}
          </p>

          <p className="tag">
            <strong>Status</strong>: {status}
          </p>
          <p className="tag">
            <strong>Details</strong>: {details || "NA"}
          </p>
        </div>
      </Modal.Description>
    </Modal>
  ) : (
    <div
      className="container"
      onClick={() => {
        setShowModal(true);
      }}
    >
      <div className="card">
        <img
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/98E7/production/_106534193_tv048471018.jpg.webp"
          alt="Capsules"
        />
        <p className="carddetail">Card Number:{index}</p>
      </div>
    </div>
  );
};
export default Card;
