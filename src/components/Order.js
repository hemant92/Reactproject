import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
  constructor() {
    super();
    this.renderOrder = this.renderOrder.bind(this);
  }
  renderOrder(key) {
    const beer = this.props.beers[key];
    const count = this.props.order[key];

    if(!beer || beer.status === 'unavailable') {
      return <li key={key}>Sorry, {beer ? beer.name : 'beer'} is no longer available!</li>
    }

    return (
      <li key={key}>
        <span>{count}lbs {beer.name}</span>
        <span className="price">{formatPrice(count * beer.price)}</span>
      </li>
    )
  }

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const beer = this.props.beers[key];
      const count = this.props.order[key];
      const isAvailable = beer && beer.status === 'available';
      if(isAvailable) {
        return prevTotal + (count * beer.price || 0)
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Your Order</h2>
        <ul className="order">
          {orderIds.map(this.renderOrder)}
          <li className="total">
            <strong>Total:</strong>
            {formatPrice(total)}
          </li>
        </ul>

      </div>
    )
  }
}

export default Order;
