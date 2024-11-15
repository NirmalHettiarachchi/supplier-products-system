import React, { Component } from "react";
import axios from "axios";
import SupplierForm from "./SupplierForm";
import SupplierList from "./SupplierList";
import Loader from "./Loader";
import "./app.css";

class App extends Component {
  state = {
    suppliers: [],
    supplier: {},
    loader: false,
    url: "http://127.0.0.1:8000/api/suppliers",
  };

  getSuppliers = async () => {
    this.setState({ loader: true });
    const suppliers = await axios.get(this.state.url);
    this.setState({ suppliers: suppliers.data, loader: false });
  };

  deleteSupplier = async (id) => {
    this.setState({ loader: true });
    await axios.delete(`${this.state.url}/${id}`);

    this.getSuppliers();
  };

  createSupplier = async (data) => {
    this.setState({ loader: true });

    await axios.post(this.state.url, {
      supplier_name: data.supplier_name,
      contact_person: data.contact_person,
      mobile_number_1: data.mobile_number_1,
      mobile_number_2: data.mobile_number_2,
    });

    this.getSuppliers();
  };

  editSupplier = async (data) => {
    this.setState({ supplier: {}, loader: true });

    await axios.put(`${this.state.url}/${data.id}`, {
      supplier_name: data.supplier_name,
      contact_person: data.contact_person,
      mobile_number_1: data.mobile_number_1,
      mobile_number_2: data.mobile_number_2,
    });

    this.getSuppliers();
  };

  componentDidMount() {
    this.getSuppliers();
  }

  onDelete = (id) => {
    this.deleteSupplier(id);
  };

  onEdit = (data) => {
    this.setState({ supplier: data });
  };

  onFormSubmit = (data) => {
    if (data.isEdit) {
      this.editSupplier(data);
    } else {
      this.createSupplier(data);
    }
  };

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
          <SupplierForm
            supplier={this.state.supplier}
            onFormSubmit={this.onFormSubmit}
          />
          {this.state.loader ? <Loader /> : ""}
          <SupplierList
            suppliers={this.state.suppliers}
            onDelete={this.onDelete}
            onEdit={this.onEdit}
          />
        </div>
      </div>
    );
  }
}

export default App;
