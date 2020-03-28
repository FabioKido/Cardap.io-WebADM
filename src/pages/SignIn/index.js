import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Helmet from 'react-helmet';

import api from "../../services/api";
import image from "../../assets/image.png";
import { login } from "../../services/auth";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/sessions", { email, password });
        const { access_token } = response.data;

        login(access_token);

        this.props.history.push('/');

      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
    }
  };

  render() {
    return (
      <div className="container mx-auto">
        <Helmet>
          <title>Cardap.io - Login</title>
        </Helmet>
  			<div className="flex justify-center px-6 my-12">

  				<div className="w-full xl:w-3/4 lg:w-11/12 flex">

  					<div
  						className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
  						style={{ backgroundImage: `url(${image})` }}
  					></div>

  					<div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
  						<h3 className="pt-4 text-2xl text-center text-purple-600">Bem Vindo!</h3>
  						<form onSubmit={this.handleSignIn} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
  							<div className="mb-4">
  								<label className="block mb-2 text-sm font-bold text-purple-500" for="username">
  									Email
  								</label>
  								<input
  									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
  									id="username"
  									type="text"
  									placeholder="Seu e-mail"
                    onChange={e => this.setState({ email: e.target.value })}
  								/>
  							</div>
  							<div className="mb-4">
  								<label className="block mb-2 text-sm font-bold text-purple-500" for="password">
  									Senha
  								</label>
  								<input
  									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
  									id="password"
  									type="password"
  									placeholder="Sua senha"
                    onChange={e => this.setState({ password: e.target.value })}
  								/>
  								{ !this.state.password && <p className="text-xs italic text-red-500">Digite uma senha</p> }
  							</div>
  							<div className="mb-6 text-center">
  								<button
  									className="w-full px-4 py-2 font-bold text-white bg-purple-400 rounded-full hover:bg-purple-500 focus:outline-none focus:shadow-outline"
  									type="submit"
  								>
  									Entrar
  								</button>
  							</div>
  							<hr className="mb-6 border-t" />
  							<div className="text-center">
  								<Link
  									className="inline-block text-sm text-gray-600 align-baseline hover:text-blue-800"
  									to="#"
  								>
  									Esqueceu a senha?
  								</Link>
  							</div>
  						</form>
  					</div>
  				</div>
  			</div>
  		</div>
    );
  }
}

export default withRouter(SignIn);
