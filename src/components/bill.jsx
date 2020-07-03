import React, { Component } from 'react';
class Bill extends Component {
	state = {
    
    };
	render() {
		return (
				<table className="bill">
                    <thead></thead>
                    <tbody>
					<tr className="subtotal">
						<td className="label">Subtotal :</td>
                             <td className="value">${this.props.bill.subTotal}</td>
					</tr>
					<tr className="salestax">
						<td className="label">Sales tax :</td>
						<td className="value">$ {this.props.bill.salesTax}</td>
					</tr>
					<tr>
						<td className="label">Shipping :</td>
						<td className="value">$ {this.props.bill.shipping}</td>
					</tr>
					<tr className="total">
						<td className="label">Total :</td>
						<td className="value">$ {this.props.bill.total}</td>
					</tr>
                    </tbody>
				</table>
		);
	}
}

export default Bill;
