import React from "react";
import LogInOut from "../LogInOut";
import { isAuthenticated } from '../../services/auth';
import "./styles.css";

const Header = () => (
	<header id="main-header">
		<div className="links">
			<a href="/">Home</a>
			{!isAuthenticated() && <a href="/signup">Registrar</a>}
			{isAuthenticated() && <a href="/graficos">Gráfico</a>}
		</div>
		<div className="nome">
			<LogInOut />
		</div>
	</header>
);

export default Header;
