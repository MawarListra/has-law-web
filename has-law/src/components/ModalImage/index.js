import React, { useEffect, useState } from "react";
import { X } from "react-feather";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const ModalImage = ({ open, toggle, data }) => {
  return (
    <Modal zIndex={2000} centered isOpen={open} toggle={toggle}>
      <ModalHeader
        className="d-flex w-100 justify-content-end align-items-end"
        style={{
          backgroundColor: "#18181C",
        }}
      >
        <div>
          <X
            style={{ cursor: "pointer" }}
            color="white"
            size={24}
            onClick={() => toggle()}
          />
        </div>
      </ModalHeader>
      <ModalBody
        className="d-flex flex-column p-3 gap-3"
        style={{
          backgroundColor: "#18181C",
        }}
      >
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex w-md-auto w-100">
            <img className="d-flex img-fluid" src={data} alt="image-popup" />
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ModalImage;
