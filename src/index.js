import React, { useContext, useReducer, Fragment } from "react";
import ReactDOM from "react-dom";
import { Container, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Store from "./context/productionHouse";
import reducer from "./reducer";
import NavBar from "./components/NavBar";

import { usePersistedContext, usePersistedReducer } from "./usePersist";

import ListProductionHouse from "./components/ListProductionHouse";
import AddProductionHouse from "./components/AddProductionHouse";
import AddMovie from "./components/AddMovie";
import ListMovie from "./components/ListMovie";

function App() {
  const storeProductionHouse = usePersistedContext(
    useContext(Store),
    "productionHouse"
  );

  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, storeProductionHouse),
    "productionHouse"
  );

  return (
    <Fragment>
      <NavBar />

      <Store.Provider value={{ state, dispatch }}>
        <div className="header-menu">
          <Container className="home">
            <Row>
              <Col md={8} sm={8} xs={6}>
                <h3>Production House</h3>
              </Col>
              <Col md={4} sm={4} xs={6}>
                <AddProductionHouse />
              </Col>
              <Col md={12} sm={12} xs={12} className="secound-menu">
                <ListProductionHouse />
              </Col>
            </Row>
          </Container>
        </div>

        <div className="container-movie">
          <Container className="home">
            <Row>
              <Col md={8} sm={8} xs={6}>
                <h3>Movie List</h3>
              </Col>
              <Col md={4} sm={4} xs={6}>
                <AddMovie />
              </Col>

              <Col md={12} sm={12} xs={12} className="movie-box">
                <Row className="justify-content-center">
                  <ListMovie />
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </Store.Provider>
    </Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
