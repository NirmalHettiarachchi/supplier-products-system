import React, { Component } from "react";
import SupplierForm from "./SupplierForm";
import SupplierList from "./SupplierList";
import "./app.css";

class App extends Component {
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
          <SupplierList />
        </div>
      </div>
    );
  }
}

export default App;
