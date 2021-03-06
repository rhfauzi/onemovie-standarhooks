import React from "react";
import { Navbar, Container, Row } from "reactstrap";

const MyNavBar = props => {
  return (
    <Container className="themed-container" fluid={true}>
      <Row>
        <Navbar className="nav-onemovie">
          <Container>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/logo-onemovie.png`}
              alt="Logo One Movie"
            />
          </Container>
        </Navbar>
      </Row>
    </Container>
  );
};

export default MyNavBar;
