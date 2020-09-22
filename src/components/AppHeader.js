import React, {Component} from "react";
import '../styles/AppHeader.scss';
import cartIcon from '../assets/cart.png';

export default class AppHeader extends Component {
  render() {
    return <section className="app-header">
      <h1>Store</h1>
      <div className="cart-component">
        <img src={cartIcon} className="cart-icon" alt="cart-icon" />
        <p id="cart-number">0</p>
      </div>
    </section>
  }
}