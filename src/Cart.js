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
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      //using shorthand for products: products
      products,
    });
  };
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty > 1) {
      products[index].qty -= 1;
    }

    this.setState({
      //using shorthand for products: products
      products,
    });
  };
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    //this will return an array which will not match the id
    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items,
    });
  };
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
              onDeleteProduct={this.handleDeleteProduct}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
