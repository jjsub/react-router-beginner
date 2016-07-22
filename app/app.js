import React, { Component } from 'react'
import {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory,
  browserHistory } from 'react-router'

class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='/address' component={Address} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

// Step 2. Basic Routing

const Home = () => <h1>Hello from Home!</h1>;

const Address = () => <h1>We are located at 555 Jackson St.</h1>;

// Step 3. 404 route

const NotFound = () => (
  <h1>404.. This page is not found!</h1>);

// Step 4. IndexRoute and Links

const Nav = () => (
  <div>
    <Link to='/'>Home</Link>&nbsp;
    <Link to='/address'>Address</Link>
  </div>
);

// props.children will allow any routes wrapped within this route to be rendered in this component.

const Container = (props) => <div>
  <Nav />
  {props.children}
</div>


export default App
