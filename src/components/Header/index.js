import React from 'react';
import { Link } from 'react-router-dom';

import "./styles.css";

const Header = () => (
	<header id="main-header">
		<div className="links">
			<Link to="/">Pedidos</Link>
			<Link to="/">Registros</Link>
			<Link to="/config">Configurações</Link>
		</div>
	</header>
);

export default Header;

// Em Andamento
// Pedidos Realizados
// Todos os Pedidos
