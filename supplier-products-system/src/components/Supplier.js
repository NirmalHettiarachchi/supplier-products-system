import React, { Component } from "react";

class Supplier extends Component {
  render() {
    const {
      id,
      supplier_name,
      contact_person,
      mobile_number_1,
      mobile_number_2,
    } = this.props.supplier;

    return (
      <tr>
        <td style={{ textAlign: "center" }}>{id}</td>
        <td>{supplier_name}</td>
        <td>{contact_person}</td>
        <td>{mobile_number_1}</td>
        <td>{mobile_number_2}</td>
        <td>
          <button className="mini ui blue button">Edit</button>
          <button className="mini ui red button">Delete</button>
        </td>
      </tr>
    );
  }
}

export default Supplier;
