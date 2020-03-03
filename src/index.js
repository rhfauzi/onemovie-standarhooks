import React, { useContext, useReducer, Fragment } from "react";
import ReactDOM from "react-dom";
import { Container, Col, Row, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Store from "./context";
import reducer from "./reducer";
import NavBar from "./components/NavBar";

import { usePersistedContext, usePersistedReducer } from "./usePersist";

import TodoList from "./components/ProductionHouseList";
import TodoForm from "./components/AddProductionHouse";

function App() {
  const globalStore = usePersistedContext(useContext(Store), "productionHouse");

  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
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
                <TodoForm />
              </Col>
              <Col md={12} sm={12} xs={12} className="secound-menu">
                <TodoList />
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
                <Button className="btn-movie float-right color-secondary">
                  <b>+</b> Add Movie
                </Button>
              </Col>

              <Col md={12} sm={12} xs={12} className="movie-box">
                <Row>
                  <Col md={3} sm={3} xs={6} className="movie">
                    <div className="inner color-secondary">
                      <h1>Movie Title</h1>
                      <div className="genre">Genre</div>
                      <div className="production-house">Production House</div>
                      <div className="ratings">Age Film ratings</div>
                    </div>
                  </Col>

                  <Col md={3} sm={3} xs={6} className="movie">
                    <div className="inner color-secondary">
                      <h1>Movie Title</h1>
                      <div className="genre">Genre</div>
                      <div className="production-house">Production House</div>
                      <div className="ratings">Age Film ratings</div>
                    </div>
                  </Col>
                  <Col md={3} sm={3} xs={6} className="movie">
                    <div className="inner color-secondary">
                      <h1>Movie Title</h1>
                      <div className="genre">Genre</div>
                      <div className="production-house">Production House</div>
                      <div className="ratings">Age Film ratings</div>
                    </div>
                  </Col>
                  <Col md={3} sm={3} xs={6} className="movie">
                    <div className="inner color-secondary">
                      <h1>Movie Title</h1>
                      <div className="genre">Genre</div>
                      <div className="production-house">Production House</div>
                      <div className="ratings">Age Film ratings</div>
                    </div>
                  </Col>
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
