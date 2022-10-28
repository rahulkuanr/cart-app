import React from "react";

class CartItem extends React.Component {
  

  //using arrow function to bind the constructor to this function
  increaseQuantity = () => {
    // setState form 1(used when not dependent on previous form)
    // this.setState({
    //     qty: this.state.qty + 1
    // });

    // setState form 2(used when dependent on previous form)
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    });
  };
  decreaseQuantity = () => {
    this.setState((prevState) => {
      if(prevState.qty > 1){
        return {
          qty: prevState.qty - 1,
        };
      }
    });
  };
  render() {
    const { price, title, qty } = this.props.product;
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
              onClick={this.increaseQuantity}
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
            />
            <img
              alt="remove-item"
              onClick={this.decreaseQuantity}
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
