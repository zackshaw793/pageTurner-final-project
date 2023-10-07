import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import GetBooks from '/Users/zacharyshaw/Desktop/react-router boiler plate/src/Components/Home.js';
import ReadingList from '/Users/zacharyshaw/Desktop/react-router boiler plate/src/Components/ReadingList.js';
import SignUp from '/Users/zacharyshaw/Desktop/react-router boiler plate/src/Components/SignUp.js';


export default class Navigation extends React.Component {
  render() { 
  return (
    <Router>
    <div>
    <Navbar expand="lg" className="bg-body-tertiary shadow" style={{borderRadius: '16px', padding: '50px'}}>
      <Container>
        <Navbar.Brand as={Link} to={'/'} id='brand-name'>pageTurner</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav 
            className="me-auto justify-content-end">
            <Nav.Link as={Link} to={"/readinglist"}>myBooks</Nav.Link>
            <Nav.Link as={Link} to={"/signup"}>signUp</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div>
      <Switch>
        <Route path="/readinglist">
          <ReadingList />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/">
          <GetBooks />
        </Route>
      </Switch>  
    </div>
    </Router>
  );
}
}