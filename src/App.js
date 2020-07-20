import React ,{ Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';

import './App.css';
import ReactMap from './Views/react-map';
import GoogleMap from './Views/react-google-maps';


/* import PatientDB from './components/patientdb';*/

const history = require('history').createBrowserHistory;

class App extends Component{

   
  render () {

    const pages = [
      {
        pageLink: '/',
        view: ReactMap,
        displayName: '',
        animationDelayForNavbar: 0.2,
      },
      {
        pageLink: '/google',
        view: GoogleMap,
        displayName: '',
        animationDelayForNavbar: 0.2,
      },
    ];
  

  return (
    <div className="App">
      <Router history={history}>
        <Route
          render={({location}) => (
            <div className="Almighty-Router">
              {/* <Navbar pages={pages} /> */}
              <Switch location={location}>
                {pages.map((page, i) => {
                  return (
                    <Route
                      exact
                      path={page.pageLink}
                      component={page.view}
                      key={i}
                    />
                  
                  );
                })}
              
                <Redirect to="/" />
              </Switch>
            </div>
          )}
        />
      </Router>
    </div>
  );
}
}

export default(App);