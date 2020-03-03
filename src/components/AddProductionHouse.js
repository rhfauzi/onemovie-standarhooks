import React, { useContext, useState } from "react";
import Store from "../context";
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

export default function AddProductionHouse() {
  const toggle = () => setModal(!modal);
  const [modal, setModal] = useState(false);

  const { dispatch } = useContext(Store);

  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleTodoAdd() {
    let oldData = JSON.parse(localStorage.getItem("productionHouse"));
    let data = { id: oldData.data.length + 1, name: name };
    // console.log("add data", data);

    dispatch({
      type: "ADD_PRODUCTION_HOUSE",
      payload: data
    });
    setName("");
    setModal(!modal);
  }

  function handleSubmitForm(event) {
    if (event.keyCode === 13) handleTodoAdd();
  }

  return (
    <div className="row">
      <Button className="btn-movie float-right color-primary" onClick={toggle}>
        <b>+</b> Add Production House
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} style={{ textAlign: "center" }}>
          Add New Production House
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label>Production House Name</Label>
            <Input
              type="text"
              name="name"
              value={name}
              autoFocus={true}
              onKeyUp={handleSubmitForm}
              onChange={handleChange}
              placeholder="Enter Production House Name"
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button outline color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button color="secondary" type="submit" onClick={handleTodoAdd}>
            Save Data
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
