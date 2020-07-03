import React from 'react';
import './App.css';
import './components/shopping.css';
import ProductList from './components/productList.jsx'

function App() {
	return (
		<React.Fragment>
			<div className="header">
				<h2>Your Li'l one's</h2>
				<h1><i>Style File!</i></h1>
				<p className="m-0">The one-shop destination</p>
				<p><b>for all things cute!</b></p>
			</div>
			<ProductList></ProductList>
		</React.Fragment>
	);
}

export default App;
