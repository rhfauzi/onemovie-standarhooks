import React, { useContext, Fragment, useState } from "react";
import Store from "../context/productionHouse";
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
import Swal from "sweetalert2";

export default function TodoList() {
  const { state, dispatch } = useContext(Store);

  const [modal, setModal] = useState(false);
  const [dataEdit, setDataEdit] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const toggle = value => {
    setDataEdit(value);
    setId(value.id);
    setName(value.name);
    setModal(!modal);
  };
  const handleChangeName = event => {
    setName(event);
  };

  const handleEditProductionHouse = event => {
    setModal(!modal);
    Swal.fire({
      position: "top-end",
      title: "Change Production House Success",
      showConfirmButton: false,
      timer: 1000
    }).then(result => {
      let data = { id: id, name: name };

      dispatch({
        type: "EDIT_PRODUCTION_HOUSE",
        payload: data
      });
    });
  };

  const handleDelete = event => {
    setModal(!modal);
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to delete a production house. This cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6"
    }).then(result => {
      if (result.value) {
        let sendData = { id: id, name: name };

        dispatch({
          type: "DELETE_PRODUCTION_HOUSE",
          payload: sendData
        });

        Swal.fire({
          position: "top-end",
          title: "Delete Production House Success",
          showConfirmButton: false,
          timer: 3000
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  };

  return (
    <Fragment>
      {state.data !== undefined
        ? state.data.map((value, index) => {
            return (
              <Fragment key={index}>
                <Button className="color-primary" onClick={() => toggle(value)}>
                  {value.name}
                </Button>
              </Fragment>
            );
          })
        : "No Production House"}

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader style={{ textAlign: "center" }}>
          Edit Production House
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label>Production House Name</Label>
            <Input
              type="text"
              name="name"
              value={name}
              autoFocus={true}
              onChange={event => handleChangeName(event.currentTarget.value)}
              placeholder="Enter Production House Name"
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter style={{ display: "block" }}>
          <Button
            color="danger"
            className="float-left"
            onClick={() => handleDelete(dataEdit.id)}

            // onClick={() => dispatch({ type: "DELETE", payload: data.id })}
          >
            Delete
          </Button>
          <Button
            color="secondary"
            type="submit"
            onClick={handleEditProductionHouse}
            className="float-right"
          >
            Edit Data
          </Button>
          <Button
            outline
            color="secondary"
            onClick={toggle}
            className="float-right"
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
}
