import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from "firebase/app";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
  }

  componentDidMount() {
    // firebase
    // .firestore()
    // .collection('products')
    // .get()
    // .then((snapshot) => {

    //   const products = snapshot.docs.map((doc) => {
    //     const data = doc.data();

    //     data['id'] = doc.id;
    //     return data;
    //   })

    //   this.setState({
    //     products,
    //     loading: false
    //   })
    // })

    firebase
      .firestore()
      .collection("products")
      //onSnapshot is an observer that updates the UI whenever the data
      //in firebase changes
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();

          data["id"] = doc.id;
          return data;
        });

        this.setState({
          products,
          loading: false,
        });
      });
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

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    });

    return cartTotal;
  };

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products...</h1>}
        <div style={{ padding: 10, fontSize: 20 }}>
          Your Cart Total is: {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
