import React, { useEffect, useState } from "react";
import { X } from "react-feather";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const ModalImage = ({ open, toggle, data }) => {
  return (
    <Modal zIndex={2000} centered isOpen={open} toggle={toggle} size="lg">
      <ModalHeader
        className="d-flex w-100 justify-content-end align-items-end"
        style={{
          backgroundColor: "#fff",
        }}
      >
        <div>
          <X
            style={{ cursor: "pointer" }}
            color="red"
            size={24}
            onClick={() => toggle()}
          />
        </div>
      </ModalHeader>
      <ModalBody
        className="d-flex flex-column p-3 gap-3 w-auto"
        style={{
          backgroundColor: "#fff",
          borderEndEndRadius: 25,
          borderEndStartRadius: 25,
          maxHeight: 500,
        }}
      >
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ maxHeight: 500 }}
        >
          <div
            className="d-flex w-md-auto w-100 justify-content-center align-items-center mb-2"
            style={{ height: 400, width: 400 }}
          >
            <img
              className="d-flex"
              src={data?.image}
              alt="image-popup"
              style={{ objectFit: "contain", width: "100%", height: "100%" }} // Adjusted styles
            />
          </div>
          <div className="d-flex w-md-auto w-100 justify-content-center align-items-center">
            <span
              style={{
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "19.5px",
                letterSpacing: "0.5px",
                textAlign: "left",
                color: "#292D32",
              }}
            >
              {data?.text}
            </span>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ModalImage;
