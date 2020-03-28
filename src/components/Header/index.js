import React from 'react';
import { Link } from 'react-router-dom';

import icon from "../../assets/icon.png";

const Header = () => {
	return(
		<div className='bg-gray-200 px-4 py-4'>
			<div className='w-full md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between'>
				<div>
					<Link to='/' className='inline-block py-2 text-gray-800 text-2xl font-bold'><img src={icon} style={{width: '70%', height: '70%'}} alt='Cardap.io'></img></Link>
				</div>

				<div>
					<div className='hidden md:block'>
						<Link
							to='/'
							className='inline-block py-1 md:py-4 text-gray-600 mr-6 font-bold'
							>Início</Link>
						<Link
							to='/config'
							className='inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6'
							>Pedidos em Andamento</Link>

						<Link
							to='#'
							className='inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6'
							>Pedidos Realizados</Link>
						<Link
							to='#'
							className='inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6'
							>Todos os Pedidos</Link>
					</div>
				</div>

				<div className='hidden md:block'>
					<Link
						to='/login'
						className='inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6'
						>Login</Link>
					<Link
						to='#'
						className='inline-block py-2 px-4 text-gray-700 bg-white hover:bg-gray-100 rounded-lg'
						>Criar conta</Link>
				</div>
			</div>
		</div>
	);
}

export default Header;
