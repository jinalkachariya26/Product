import React, { Component } from 'react';
import './../App.css';
export class Product extends Component {

	render() {
		return (
			<div>
				<li className="product">
					<div className="product-preview">
						<div className="thumbnail">
							<img className="image" src={this.props.product.url} />
						</div>
						<div className="product-paper">
							<div className="product-name">{this.props.product.name}</div>
							<div className="product-price">${this.props.product.price}</div>
						</div>
					</div>
					<div className="product-quantity">x{this.props.product.quantity}</div>
					<div className="product-interactions">
						<div className="button plus" onClick={() => this.props.onIncrement(this.props.product)}>+</div>
						<div className="button minus" onClick={() => this.props.onDecrement(this.props.product)}>-</div>
						<div className="button del" onClick={() => this.props.onDelete(this.props.product.id)}/>
					</div>
				</li>
			</div>
		);
	}
	
	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? 'Zero' : value;
	}
}

export default Product;
