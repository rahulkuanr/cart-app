import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        { price: 65000, title: "SmartPhone", qty: 5, img: "", id: 1 },
        { price: 5000, title: "Watch", qty: 3, img: "", id: 2 },
        { price: 89999, title: "Ipad", qty: 1, img: "", id: 3 },
      ],
    };
  }
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return <CartItem product={product} key={product.id} />;
        })}
      </div>
    );
  }
}

export default Cart;
