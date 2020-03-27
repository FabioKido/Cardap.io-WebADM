import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import Header from "../../components/Header";

import "./styles.css";

export default function Config(){
	const [user, setUser] = useState({});
	const [contact, setContact] = useState({});
	const [address, setAddress] = useState({});

	useEffect(() => {
	    async function loadUser() {
	    	try{
	    		const response = await api.get('/user');

		    	setUser(response.data.data);
		    	setContact(response.data.data.contact);
		    	setAddress(response.data.data.address);
	    	} catch(err){
	    		console.log(err);
	    	}
	    }

	    loadUser();
	}, []);

	if(user) {
		return(
		  	<>
				<Header pageAtual="Configurações" />
			  	<div className="container">
			  		<div className="content">
				  		<div className="user">
				  			<h1>Usuário</h1>
				  			<p>{user.name}</p>
				  			<p>{user.email}</p>
				  			<p>{user.restaurant}</p>
				  		</div>

				  		<div className="contact">
				  			<h1>Contato</h1>
				  			<p>{contact.celphone || "Não especificado"}</p>
				  			<p>{contact.phone || "Não especificado"}</p>
				  		</div>

				  		<div className="address">
				  			<h1>Endereço</h1>
				  			<div>
				  				<p>{address.street || "Não especificado"}</p>
				  				<p>{address.neighborhood || "Não especificado"}</p>
				  			</div>
				  			<div>
				  				<p>{address.num || "Não especificado"}</p>
				  				<p>{address.complement || "Não especificado"}</p>
				  			</div>
				  			<div>
					  			<p>{address.city || "Não especificado"}</p>
				  				<p>{address.uf || "Não especificado"}</p>
							</div>
				  		</div>
				  	</div>
			  	</div>
			</>
		);
	} else {
		return (
			<>
				<Header pageAtual="Configurações" />
				<p>Carregando...</p>
			</>
		)
	}
};