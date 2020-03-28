import React, {Component, Fragment } from 'react';
import api from '../../services/api';
import Header from "../../components/Header";
import { Link, withRouter } from 'react-router-dom';

//import Logo from "../../assets/airbnb-logo.svg";



class Register extends Component{

	state = {
	    email: "",
	    password: "",
	    role: "basic",
	    error: ""
	};

	handleOnSubmit = async e => {

	    e.preventDefault();

	    const { email, password, role } = this.state;

	    if (!email || !password || !role) {

	      	this.setState({ error: "Preencha todos os dados para registrar" });

	    } else {
	      try {

	        await api.post("/signup", { role, email, password });
	        this.props.history.push("/login");

	      } catch (err) {

	        console.log(err);
	        this.setState({ error: "Ocorreu um erro ao registrar-se" });

	      }
	    }
	};

	render() {
		return (
			<Fragment>
				<Header />
				<Container>
			        <Form onSubmit={this.handleOnSubmit}>
				          {this.state.error && <p>{this.state.error}</p>}
				        <input
				            type="text"
				            placeholder="Digite um e-mail"
				            onChange={e => this.setState({ email: e.target.value })}
				        />
				        <input
				            type="text"
				            placeholder="Digite uma senha"
				            onChange={e => this.setState({ password: e.target.value })}
				        />
						<select value={this.state.role} onChange={e => this.setState({ role: e.target.value })}>
							<option value="basic">basic</option>
							<option value="supervisor">supervisor</option>
							<option value="admin">admin</option>
						</select>
				        <button type="submit">Cadastrar</button>
				          <hr />
				        <Link to="/">Home</Link>
			        </Form>
			    </Container>
			</Fragment>
    	)

	}

}

export default withRouter(Register);
