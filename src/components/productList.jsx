import React, { Component } from 'react';
import { Product } from './product';
import productData from './products.json';
import $ from 'jquery';
import Bill from './bill';
class ProductList extends Component {
	state = {
		products: [],
		bill: {}
	};

	componentDidMount() {
		const newData = [ ...productData ];
		this.setState({
			products: newData
		});
		this.updateBill(newData);
	}

	handleProductAdd = (productToIncrement) => {
		const products = [ ...this.state.products ];
		const index = products.indexOf(productToIncrement);
		products[index] = { ...productToIncrement };
		products[index].quantity++;
		this.setState({ products });
		this.updateBill(products);
	};

	handleProductRemove = (productToRemove) => {
		if (productToRemove.quantity > 0) {
			const products = [ ...this.state.products ];
			const index = products.indexOf(productToRemove);
			products[index] = { ...productToRemove };
			products[index].quantity--;
			this.setState({ products });
			this.updateBill(products);
		}
	};

	handleDelete = (productId) => {
		const products = this.state.products.filter((p) => p.id !== productId);
		this.setState({ products });
	};

	handleReset = () => {
		const newData = [ ...productData ];
		const newBill = {
			subTotal: 0,
			salesTax: 0,
			shipping: 0,
			total: 0
		};
		this.setState({
			bill: newBill,
			products: newData
		});
	};

	updateBill = (products) => {
		var subtotal = 0;
		var salestax = 0;
		var shipping = 5;
		var total = 0;

		const bill = {
			subTotal: 0,
			salesTax: 0,
			shipping: 0,
			total: 0
		};

		products.map((product) => {
			subtotal += product.quantity * product.price;
		});
		salestax = subtotal * 0.05;
		total = subtotal + salestax + shipping;

		bill.subTotal = subtotal;
		bill.salesTax = salestax;
		bill.total = total;
		bill.shipping = shipping;
		this.setState({ bill: bill });
	};

	move = (evt) => {
		var windowWidth = $(window).width();
		var cartWidth = $('.product').length * 200;
		if (windowWidth < cartWidth)
			$('.cart').stop(false, true).animate({
				left: -(evt.clientX / windowWidth) * (cartWidth - windowWidth)
			});
		else
			$('.cart').stop(false, true).css({
				left: 0
			});
	};

	render() {
		if (this.state.products.length <= 0) {
			return (
				<React.Fragment>
					<div className="actions" onClick={this.handleReset}>
						<div className="big-button go">
							Return to Shop
						</div>
					</div>
				</React.Fragment>
			);
		} else
			return (
				<React.Fragment>
					<div className="cart-container" onMouseMove={this.move.bind(this)}>
						<ul className="cart">
							{this.state.products.map((product) => (
								<Product
									key={product.id}
									onDelete={this.handleDelete}
									onIncrement={this.handleProductAdd}
									onDecrement={this.handleProductRemove}
									product={product}
								/>
							))}
						</ul>
					</div>
					<Bill bill={this.state.bill} />
					<div className="actions">
						<div className="big-button return">Get Them</div>
					</div>
				</React.Fragment>
			);
	}
}

export default ProductList;
