import React from "react";

class CartItem extends React.Component {
  render() {
    const { price, title, qty } = this.props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity } = this.props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs {price}</div>
          <div style={{ color: "#777" }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="add-item"
              onClick={() => onIncreaseQuantity(product)}
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
            />
            <img
              alt="remove-item"
              onClick={() => onDecreaseQuantity(product)}
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
            />
            <img
              alt="delete-item"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
