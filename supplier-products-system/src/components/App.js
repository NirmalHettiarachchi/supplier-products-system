import React, { Component } from "react";
import axios from "axios";
import SupplierForm from "./SupplierForm";
import SupplierList from "./SupplierList";
import Loader from "./Loader";
import "./app.css";

class App extends Component {
  state = {
    suppliers: [],
    loader: false,
    url: "http://127.0.0.1:8000/api/suppliers",
  };

  getSuppliers = async () => {
    this.setState({ loader: true });
    const suppliers = await axios.get(this.state.url);
    this.setState({ suppliers: suppliers.data, loader: false });
  };

  componentDidMount() {
    this.getSuppliers();
  }

  render() {
    return (
      <div>
        <div className="ui fixed inverted menu">
          <div className="ui container">
            <a href="/#" className="header item">
              Supplier Products System
            </a>
          </div>
        </div>

        <div className="ui main container">
          <SupplierForm />
          {this.state.loader ? <Loader /> : ""}
          <SupplierList suppliers={this.state.suppliers} />
        </div>
      </div>
    );
  }
}

export default App;
