import React, { Component } from 'react'
import {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory,
  browserHistory,
  IndexLink } from 'react-router'

import Instagram  from './components/instagram'

class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='/address' component={Address}>
            <IndexRoute component={TwitterFeed} />
            <Route path='instagram' component={Instagram} />
            <Route path='query' component={Query} />
          </Route>
          <Route path='/about(/:name)' component={About} />
          <Route path='/namedComponent' component={NamedComponents}>
            <IndexRoute components={{ title: Title, subTitle: SubTitle }} />
          </Route>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

// Step 2. Basic Routing

const Home = () => <h1>Hello from Home!</h1>;

const Address = (props) => <div>
  <br />
  <Link to='/address' onlyActiveOnIndex activeStyle={{color:'#96f28a'}}>Twitter Feed</Link>&nbsp;
  <Link to='/address/instagram' activeStyle={{color:'#96f28a'}}>Instagram Feed</Link>	&copy; &nbsp;
  <Link activeClassName='active' to={{ pathname: '/address/query', query: { message: 'Hello from Route Query' } }}>Route Query</Link>
  <h1>We are located at 1984 SD St.</h1>
  {props.children}
</div>;

// Step 3. 404 route

const NotFound = () => (
  <h1>404.. This page is not found!</h1>);

// Step 4. IndexRoute and Links

const Nav = () => (
  <div>
    <Link to='/' onlyActiveOnIndex activeStyle={{color:'#53acff'}}>Home</Link> &nbsp;
    <Link to='/address' activeStyle={{color:'#53acff'}}>Address</Link>&reg; &nbsp;
    <Link activeStyle={{color:'#53acff'}} to='/about'>About</Link> &nbsp;
    <IndexLink activeStyle={{color:'#53acff'}} to='/namedComponent'>Named Components</IndexLink>
  </div>
);

// props.children will allow any routes wrapped within this route to be rendered in this component.

const Container = (props) => <div>
  <Nav />
  {props.children}
</div>

// const Instagram = () => <h3>Instagram Feed</h3>;

const TwitterFeed = () => <h3>Twitter Feed</h3>;

// Named Components

const NamedComponents = (props) => (
  // console.log(props)
  <div>
    {props.title}<br />
    {props.subTitle}
  </div>
)

const Title = () => (
  <h1>Title Component</h1>
)

const SubTitle = () => (
  <h1> SubTitle Component</h1>
)

const About = (props) => (
  <div>
    <h3>Welcome to the About Page</h3>
    <h2>안녕스 {props.params.name}</h2>
  </div>
)

const Query = (props) => (
  <div>
    <p> This are Query String Parameters </p>
    <h2>{props.location.query.message}</h2>
  </div>
)

export default App


// IndexLink

// An <IndexLink> is like a <Link>, except it is only active when the current route is exactly the linked route. It is equivalent to<Link> with the onlyActiveOnIndex prop set.

// const Nav = () => (
//   <div>
//     <IndexLink activeStyle={{color:'#53acff'}} to='/'>Home</IndexLink>&nbsp;
//     <IndexLink activeStyle={{color:'#53acff'}} to='/address'>Address</IndexLink>&nbsp;
//     <IndexLink activeStyle={{color:'#53acff'}} to='/about'>About</IndexLink>
//   </div>
// )
