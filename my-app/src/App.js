import React from 'react';
import './App.css';
import { Switch, Link, Route } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

// import Pages
import Global from './containers/page/Global'
import Indo from './containers/page/Indo'


const App = () => {
  return (
    <div>
      <Navbar bg="primary" expand="lg">
        <Navbar.Brand href=".">Covid Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href=".">Global</Nav.Link>
            <Nav.Link href="/indonesia">Indonesia</Nav.Link>
            <Nav.Link href="/provinsi">Provinsi</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path='/' component={Global} />
        <Route path='/indonesia' component={Indo} />
        {/* <Route path='/provinsi' component={provinsi} /> */}
      </Switch>
      {/* <Global /> */}
    </div>
  );
}

export default App;