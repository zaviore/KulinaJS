import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import modal from "../../images/down.png";
import Select from "react-select";
import data from "../../data.json";

const options = data;

const Location = () => {
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState("");
  const handleChange = (e) => {
    setSelect(e.target.value);

    console.log(`Osad`, e.target.value);
  };

  return (
    <>
      <Button variant="" onClick={() => setShow(true)}>
        <img src={modal} alt="modal" width="20px" />
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h3>Cek makanan yang tersedia di lokasi kamu!</h3>
          <Select value={select} onChange={handleChange} options={options} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Location;
