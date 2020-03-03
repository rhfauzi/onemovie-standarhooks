import React, { useContext, useState, Fragment } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  Row,
  Form,
  Col
} from "reactstrap";
import Store from "../context/productionHouse";
import { useInput } from "../hooks/input-hook";

function MovieList() {
  const { state, dispatch } = useContext(Store);

  const [modal, setModal] = useState(false);

  const { value: movie, bind: bindMovie, reset: resetMovie } = useInput("");
  const { value: genre, bind: bindGenre, reset: resetGenre } = useInput("");
  const { value: rating, bind: bindRating, reset: resetRating } = useInput("");
  const [productionHouseId, setProductionName] = useState("");
  const [id, setId] = useState("");

  const toggle = value => {
    setId(value.id);
    setModal(!modal);
  };

  const handleSubmit = event => {
    resetMovie();
    resetGenre();
    resetRating();
    setModal(!modal);
  };
  const handleSelect = event => {
    setProductionName(event.target.value);
  };

  // console.log("state", state);
  return (
    <Fragment>
      {state.movie !== undefined
        ? state.movie.map((value, index) => {
            return (
              <Col md={3} sm={6} xs={6} className="movie" key={index}>
                <a href="/#" onClick={() => toggle(value)}>
                  <div className="inner color-secondary">
                    <h1>{value.movie}</h1>
                    <div className="genre">{value.genre}</div>
                    <div className="production-house">
                      {value.productionHouseId}
                    </div>
                    <div className="ratings">{value.rating}</div>
                  </div>
                </a>
              </Col>
            );
          })
        : "No Movie"}

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} style={{ textAlign: "center" }}>
          Add New Movie
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <Row>
              <FormGroup className="col-md-6 col-sm-6">
                <Label>
                  Movie Name <b className="important">*</b>
                </Label>
                <Input
                  type="text"
                  name="movie"
                  {...bindMovie}
                  placeholder="Enter Movie Name"
                />
              </FormGroup>

              <FormGroup className="col-md-6 col-sm-6">
                <Label>
                  Production House Name <b className="important">*</b>
                </Label>
                <Input type="select" name="production" onChange={handleSelect}>
                  <option value="null">Select Production House Name </option>
                  {state.data !== undefined
                    ? state.data.map((item, index) => {
                        return (
                          <Fragment key={index}>
                            <option value={item.id}>{item.name}</option>
                          </Fragment>
                        );
                      })
                    : "No Production House"}
                </Input>
              </FormGroup>

              <FormGroup className="col-md-6 col-sm-6">
                <Label>
                  Movie Genre <b className="important">*</b>
                </Label>
                <Input
                  type="text"
                  name="genre"
                  {...bindGenre}
                  placeholder="Enter Movie Genre"
                />
              </FormGroup>

              <FormGroup className="col-md-6 col-sm-6">
                <Label>
                  Age Film Rating <b className="important">*</b>
                </Label>
                <Input
                  type="text"
                  name="rating"
                  {...bindRating}
                  placeholder="Select Age Film Rating"
                />
              </FormGroup>
            </Row>
          </ModalBody>
          <ModalFooter style={{ display: "block" }}>
            <Button
              color="danger"
              className="float-left"
              // onClick={() => handleDelete(id)}

              onClick={() => dispatch({ type: "DELETE_MOVIE", payload: id })}
            >
              Delete
            </Button>
            <Button
              outline
              color="secondary"
              onClick={toggle}
              className="float-right"
            >
              Cancel
            </Button>
            <Button color="secondary" type="submit" className="float-right">
              Save Data
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </Fragment>
  );
}

export default MovieList;
