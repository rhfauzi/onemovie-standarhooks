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
import Swal from "sweetalert2";

function MovieList() {
  const { state, dispatch } = useContext(Store);

  const [modal, setModal] = useState(false);

  const {
    value: movie,
    setValue: setMovie,
    bind: bindMovie,
    reset: resetMovie
  } = useInput("");
  const {
    value: genre,
    setValue: setGenre,
    bind: bindGenre,
    reset: resetGenre
  } = useInput("");
  const {
    value: rating,
    setValue: setRating,
    bind: bindRating,
    reset: resetRating
  } = useInput("");
  const [productionHouseId, setProductionHouseId] = useState("");
  const [id, setId] = useState("");

  const toggle = value => {
    setId(value.id);
    setModal(!modal);

    state.movie.filter((event, index) => {
      if (index !== value.id) {
        setMovie(value.movie);
        setGenre(value.genre);
        setRating(value.rating);
        setProductionHouseId(value.productionHouseId);
      }
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setModal(!modal);

    Swal.fire({
      position: "top-end",
      title: "Edit Movie Success",
      showConfirmButton: false,
      timer: 1000
    }).then(result => {
      let data = {
        id: id,
        movie: movie,
        genre: genre,
        rating: rating,
        productionHouseId: productionHouseId
      };

      dispatch({
        type: "EDIT_MOVIE",
        payload: data
      });

      resetMovie();
      resetGenre();
      resetRating();
    });
  };
  const handleSelect = event => {
    setProductionHouseId(event.target.value);
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
        // let sendData = { id: id, name: name };

        dispatch({
          type: "DELETE_MOVIE",
          payload: id
        });

        Swal.fire({
          position: "top-end",
          // icon: 'success',
          title: "Delete Movie Success",
          showConfirmButton: false,
          timer: 4500
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  };

  const getProductionHousName = event => {
    const dataName = state.data.map((item, index) => {
      if (item.id === event) {
        return item.name;
      }
    });
    //belum jadi
    return "Production House (not finis yet)";
  };

  return (
    <Fragment>
      {state.movie !== undefined
        ? state.movie.map((value, index) => {
            return (
              <Col md={3} sm={6} xs={12} className="movie" key={index}>
                <a href="/#" onClick={() => toggle(value)}>
                  <div className="inner color-secondary">
                    <h1>{value.movie}</h1>
                    <div className="genre">{value.genre}</div>
                    <div className="production-house">
                      {getProductionHousName(value.productionHouseId)}
                      {/* {value.productionHouseId} */}
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
                  value={movie}
                  {...bindMovie}
                  placeholder="Enter Movie Name"
                />
              </FormGroup>

              <FormGroup className="col-md-6 col-sm-6 col-xs-12">
                <Label>
                  Production House Name <b className="important">*</b>
                </Label>
                <Input
                  type="select"
                  name="production"
                  onChange={handleSelect}
                  defaultValue={productionHouseId}
                >
                  <option value="null">Select Production House Name </option>
                  {state.data !== undefined
                    ? state.data.map((item, index) => {
                        return (
                          <Fragment key={index}>
                            {productionHouseId !== undefined &&
                            productionHouseId === item.id ? (
                              <option
                                value={item.id}
                                defaultValue={productionHouseId}
                              >
                                {item.name}
                              </option>
                            ) : (
                              <option value={item.id}>{item.name}</option>
                            )}
                            {/* {if(productionHouseId !== undefined && productionHouseId === item.id){
                              
                            }} */}
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
                  value={genre}
                  {...bindGenre}
                  placeholder="Enter Movie genre"
                />
              </FormGroup>

              <FormGroup className="col-md-6 col-sm-6">
                <Label>
                  Age Film Rating <b className="important">*</b>
                </Label>
                <Input
                  type="text"
                  name="rating"
                  value={rating}
                  {...bindRating}
                  placeholder="Input Age Film Rating"
                />
              </FormGroup>
            </Row>
          </ModalBody>
          <ModalFooter style={{ display: "block" }}>
            <Button
              color="danger"
              className="float-left"
              onClick={() => handleDelete(id)}

              // onClick={() => dispatch({ type: "DELETE_MOVIE", payload: id })}
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
