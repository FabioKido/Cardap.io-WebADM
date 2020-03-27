import React from 'react';
import { Link } from 'react-router-dom';

import "./styles.css";

function Header({ pageAtual }) {
	return(
		<header id="main-header">
			<div className="page">
				<h1>{pageAtual}</h1>
			</div>
			<div className="links">
				<Link to="/">Pedidos</Link>
				<Link to="/">Registros</Link>
				<Link to="/config">Configurações</Link>
			</div>
		</header>
	);
}

export default Header;

// Em Andamento
// Pedidos Realizados
// Todos os Pedidos
