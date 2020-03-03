import React, { useContext, useState, Fragment } from "react";
import Store from "../context/productionHouse";
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
  Form
} from "reactstrap";
import { useInput } from "../hooks/input-hook";

export default function AddMovie() {
  const { state, dispatch } = useContext(Store);

  const toggle = () => setModal(!modal);
  const [modal, setModal] = useState(false);

  // const [dataMovie, setDataMovie] = useState([]);

  const { value: movie, bind: bindMovie, reset: resetMovie } = useInput("");
  const { value: genre, bind: bindGenre, reset: resetGenre } = useInput("");
  const { value: rating, bind: bindRating, reset: resetRating } = useInput("");
  const [productionHouseId, setProductionName] = useState("");

  const handleSelect = event => {
    setProductionName(event.target.value);
    console.log("event", event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (productionHouseId === "") {
      alert("Select Production House Name");
    } else {
      // console.log("name", movie);
      // console.log("genre", genre);
      // console.log("rating", rating);
      //   console.log("select", productionHouseId);

      let oldData = JSON.parse(localStorage.getItem("productionHouse"));
      let data = {
        id: oldData.movie.length + 1,
        movie: movie,
        genre: genre,
        rating: rating,
        productionHouseId: productionHouseId
      };

      dispatch({
        type: "ADD_MOVIE",
        payload: data
      });

      resetMovie();
      resetGenre();
      resetRating();
    }
  };

  console.log("state", state.movie);

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
          <ModalFooter>
            <Button outline color="secondary" onClick={toggle}>
              Cancel
            </Button>
            <Button color="secondary" type="submit">
              Save Data
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
}
