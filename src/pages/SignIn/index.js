import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import Header from "../../components/Header";
import api from "../../services/api";
import { login } from "../../services/auth";

import { Form, Container } from "./styles";

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
      <Fragment>
        <Header />
        <Container>
          <Form onSubmit={this.handleSignIn}>
            {this.state.error && <p>{this.state.error}</p>}
            <input
              type="email"
              placeholder="Endereço de e-mail"
              onChange={e => this.setState({ email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Senha"
              onChange={e => this.setState({ password: e.target.value })}
            />
            <button type="submit">Entrar</button>
            <hr />
          </Form>
        </Container>
      </Fragment>
    );
  }
}

export default withRouter(SignIn);
