import React, { Component } from "react";
import Supplier from "./Supplier";

class SupplierList extends Component {
  onDelete = (id) => {
    this.props.onDelete(id);
  };

  onEdit = (data) => {
    this.props.onEdit(data);
  };

  render() {
    const suppliers = this.props.suppliers;
    return (
      <div className="data">
        <table className="ui celled table">
          <thead>
            <tr>
              <th style={{ width: "50px", textAlign: "center" }}>#</th>
              <th>Supplier Name</th>
              <th>Contact Person</th>
              <th>Mobile Number 1</th>
              <th>Mobile Number 2</th>
              <th style={{ width: "148px" }}>Action</th>
            </tr>
          </thead>

          <tbody>
            {suppliers.map((supplier) => {
              return (
                <Supplier
                  supplier={supplier}
                  key={supplier.id}
                  onDelete={this.onDelete}
                  onEdit={this.onEdit}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SupplierList;
