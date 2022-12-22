import React, { Component } from "react";
import Navbar from "./components/navbar";
import Products from "./components/products";
import productContext from "./context/product";
class App extends Component {
  state = {
    Products: [
      { id: 1, count: 30, productName: "laptap" },
      { id: 2, count: 50, productName: "airpod" },
      { id: 4, count: 25, productName: "mobile" },
      { id: 5, count: 55, productName: "glass " },
      { id: 7, count: 30, productName: "tablet" },
      { id: 3, count: 40, productName: " ipad " },
      { id: 10, count: 33, productName: " imac " },
      { id: 8, count: 55, productName: "sorface" },
      { id: 9, count: 40, productName: "Mbook" },
      { id: 6, count: 60, productName: "Hphone" },
    ],
  };
  render() {
    return (
      <>
        <productContext.Provider
          value={{
            Products: this.state.Products,
            onDelete: this.handleDelete,
            onIncrement: this.handleIncrement,
            onDecrement: this.handleDecrement,
            onReset: this.handleReset,
          }}
        >
          <Navbar />
          <Products />
        </productContext.Provider>
      </>
    );
  }
  handleDelete = (productId) => {
    const newProducts = this.state.Products.filter((p) => p.id !== productId);
    this.setState({ Products: newProducts });
  };
  handleIncrement = (productId) => {
    const newProducts = [...this.state.Products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count += 1;
    this.setState({ Products: newProducts });
  };
  handleDecrement = (productId) => {
    const newProducts = [...this.state.Products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count -= 1;
    this.setState({ Products: newProducts });
  };
  handleReset = () => {
    const newProducts = this.state.Products.map((p) => {
      p.count = 0;
      return p;
    });
    this.setState({ Products: newProducts });
  };
}

export default App;
