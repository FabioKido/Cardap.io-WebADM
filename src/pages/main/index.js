import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import Header from "../../components/Header";

import './styles.css';

export default function Main(){

	const [products, setProducts] = useState([]);

	useEffect(() => {
	    async function loadProducts() {
	    	/*const category = '5e6c2610466e5a4af1f48136';

		    const response = await api.get('/products', {
		        params: { category }
		    });



		    setProducts(response.data.data);*/
		    const data = [
		    	{_id: "1", name: "Produto1", ingredients: "arroz, feijão, ovo"},
		    	{_id: "2", name: "Produto2", ingredients: "arroz, feijão, ovo"},
		    	{_id: "3", name: "Produto3", ingredients: "arroz, feijão, ovo"},
		    	{_id: "4", name: "Produto4", ingredients: "arroz, feijão, ovo"},
		    	{_id: "5", name: "Produto5", ingredients: "arroz, feijão, ovo"},
		    ]

		    setProducts(data);
		    console.log(data)
	    }

	    loadProducts();
	}, []);

  	return (
		<>
			<Header pageAtual="Dashboard" />
			<div className="product-list">
				{products.map(product => (
						<article key={product._id}>
							<strong>{product.name}</strong>
							<p>{product.ingredients}</p>
						</article>
					))
				}
			</div>
		</>
	)
}