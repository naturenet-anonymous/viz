import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import styles from '../node_modules/globals/index.css';
import LogoImg from './NN_logo1.png';

import summary from './summary';
import about from './about';
import site from './site';
import recent from './recent';
import users from './users';


class MyIndex extends React.Component {
  render() {
    return (
				<div>
          <header>
            <ul id="nav">
              <li><Link to='/site' activeClassName="active">Site Analysis</Link></li>
              <li><Link to='/users' activeClassName="active">User Analysis</Link></li>
              <li><Link to='/recent' activeClassName="active">Recent Activity</Link></li>
              <li><Link to='/summary' activeClassName="active">Summary</Link></li>
              <li><Link to='/about' activeClassName="active">About</Link></li>
              <a href='/'><img id="logo" src={LogoImg} alt="NN Logo" height="50px"/></a>
            </ul>
          </header>
          <div>
            { this.props.children }
          </div>
		  </div>
		)
  }
}

export class App extends React.Component {
	render() {
		return (<Router history={browserHistory}>
      <Route path="/" component={MyIndex}>
        <Route path="summary" component={summary}/>
        <Route path="about" component={about}/>
        <Route path="site" component={site}/>
        <Route path="recent" component={recent}/>
        <Route path="users" component={users}/>
      </Route>
  </Router>
)
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
