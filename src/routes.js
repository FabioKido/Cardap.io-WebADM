import React, { Fragment } from 'react';
import { isAuthenticated } from './services/auth';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Main from './pages/main';
import Users from './pages/users';
import Product from "./pages/product";
import Graficos from "./pages/graficos";
import Register from "./pages/register";
import SignIn from "./pages/SignIn";
import Email from "./pages/Email";
import Edit from "./pages/editar";

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
				<PrivateRoute path="/users" component={Users} />
				<Route path="/login" component={SignIn} />
				<PrivateRoute path="/user/:id" component={Product} />
				<PrivateRoute path="/edit/:id" component={Edit} />
				<Route path="/signup" component={Register} />
				<PrivateRoute path="/graficos" component={Graficos} />
				<PrivateRoute path="/email" component={Email} />
				<Route path="*" component={() => <h1>Page not found</h1>} />
			</Switch>
		</Fragment>	
	</BrowserRouter>
);

export default Routes;