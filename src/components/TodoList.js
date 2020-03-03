import React, { useContext, Fragment, useState } from "react";
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

export default function TodoList() {
  const { state, dispatch } = useContext(Store);

  const [modal, setModal] = useState(false);
  const [dataEdit, setDataEdit] = useState("");

  const toggle = value => {
    setModal(!modal);
    setDataEdit(value);
    console.log("dataEdit", dataEdit);
  };

  const handleChange = event => {
    console.log("handleChange", event);
    // setDataEdit(event.target.value);

    setDataEdit(prev => {
      prev.values.name = event;
    });

    console.log("handleChange dataEdit", dataEdit);
  };

  const handleDelete = event => {
    console.log("state", state);
    const oldData = JSON.parse(localStorage.getItem("productionHouse"));
    console.log("oldData", oldData);
    const filterData = oldData.data.filter(item => item.id !== event);
    console.log("filterData", filterData);

    let newData = {
      data: filterData.map(item => ({
        id: item.id,
        name: item.name
      }))
    };
    // let convert = JSON.stringify(filterData);

    dispatch({
      type: "DELETE_PRODUCTION_HOUSE",
      payload: newData
    });

    setModal(!modal);
  };

  const handleEditProductionHouse = event => {
    console.log("input neme", event);
    // let oldData = JSON.parse(localStorage.getItem("productionHouse"));
    // let data = { id: oldData.data.length + 1, name: dataEdit };
    // // console.log("add data", data);

    dispatch({
      type: "EDIT_PRODUCTION_HOUSE",
      payload: dataEdit
    });
    // setDataEdit("");
    // setModal(!modal);
  };

  //   console.log("state data", state.data);
  return (
    <Fragment>
      {state.data !== undefined
        ? state.data.map((value, index) => {
            return (
              <Fragment key={index}>
                {/* <Button
                  className="color-primary"
                  onClick={() => modalEditProduction(index)}
                > */}
                <Button className="color-primary" onClick={() => toggle(value)}>
                  index : {index} no : {value.id} name : {value.name}
                </Button>
              </Fragment>
            );
          })
        : "No Production House"}

      <Modal isOpen={modal} toggle={toggle}>
        {/* <Modal isOpen={modal.openEditModal} itemID={modal.activeItemId}> */}
        <ModalHeader style={{ textAlign: "center" }}>
          {/* Edit Production House */}
          Edit Production House
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label>
              Production House Name {dataEdit !== undefined ? dataEdit.id : ""}
            </Label>
            <Input
              type="text"
              name="name"
              //   value={dataEdit !== undefined ? dataEdit.name : ""}
              value={dataEdit.name}
              autoFocus={true}
              // onKeyUp={handleSubmitForm}
              //   onChange={handleChange}
              onChange={event => handleChange(event.currentTarget.value)}
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
