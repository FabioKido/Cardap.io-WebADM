import React, { Component } from 'react';
import api from '../../services/api';
//import { permission } from '../../services/auth';



export default class Product extends Component {
	state = {
		user: {},
	};

	async componentDidMount() {
		const { id } = this.props.match.params;

		const res = await api.get(`/user/${id}`);
		//const resGroup = await api.get(`/group/${res.data.data.group}`);
		//const resPermission = await api.get(`/permission/${resGroup.data.data.permission}`);

		//this.setState({ user: res.data.data, group: resGroup.data.data, permission: resPermission.data.data});
		this.setState({ user: res.data.data });

	}

	render() {
		const { user } = this.state;

		return (
			<div className="product-info">
				<h1>{user.email}</h1>
				<p>{user.role}</p>
				<a className="link" href={`/edit/${user.id}`}>Editar Usuário</a>
			</div>
		);
	}
}
