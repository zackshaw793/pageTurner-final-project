import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import GetBooks from './Home';
import ReadingList from './ReadingList';
import SignUp from './SignUp';


export default class Navigation extends React.Component {
  render() { 
  return (
    <Router>
    <div>
    <Navbar expand="lg" className="bg-body-white shadow" style={{borderRadius: '16px', padding: '50px'}}>
      <Container>
        <Navbar.Brand as={Link} to={'/'} id='brand-name' style={{color: 'rgb(33,19,13)'}}>pageTurner</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav 
            className="ml-auto" style={{display: 'flex',
                                        justifyContent: 'flex-end',
                                        marginInlineStart: 'auto'}}>
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