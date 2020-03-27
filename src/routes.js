import React, { Fragment } from 'react';
import { isAuthenticated } from './services/auth';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Configuration from './pages/Configuration';
import Main from './pages/main';
//import Product from "./pages/product";
//import Register from "./pages/register";
import SignIn from "./pages/SignIn";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
	<BrowserRouter>
		<Fragment>
			<Switch>
				<Route exact path="/" component={Main} />
				<Route path="/login" component={SignIn} />
				<PrivateRoute path="/config" component={Configuration} />
				<Route path="*" component={() => <h1>Page not found</h1>} />
			</Switch>
		</Fragment>	
	</BrowserRouter>
);

export default Routes;

/*
<Route path="/signup" component={Register} />
<PrivateRoute path="/product/:id" component={Product} />
*/