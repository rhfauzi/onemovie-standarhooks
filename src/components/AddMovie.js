import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input
} from "reactstrap";

export default function AddMovie() {
  const toggle = () => setModal(!modal);
  const [modal, setModal] = useState(false);

  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
    console.log("handleChange name", name);
  }

  function handleAddMovie() {
    console.log("handleAddMovie");
  }

  function handleSubmitForm() {
    console.log("handleSubmitForm");
  }

  return (
    <div className="row">
      <Button
        className="btn-movie float-right color-secondary"
        onClick={toggle}
      >
        <b>+</b> Add Movie
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} style={{ textAlign: "center" }}>
          Add New Movie
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label>
              Movie Name <b className="important">*</b>
            </Label>
            <Input
              type="text"
              name="name"
              value={name}
              autoFocus={true}
              onKeyUp={handleSubmitForm}
              onChange={handleChange}
              placeholder="Enter Movie Name"
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button outline color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button color="secondary" type="submit" onClick={handleAddMovie}>
            Save Data
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
