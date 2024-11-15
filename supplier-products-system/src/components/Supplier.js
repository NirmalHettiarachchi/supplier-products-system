import React, { Component } from "react";

class Supplier extends Component {
  render() {
    return (
      <tr>
        <td style={{ textAlign: "center" }}>1</td>
        <td>Jon Doe</td>
        <td>Jon</td>
        <td>+94768879830</td>
        <td>+94713475276</td>
        <td>
          <button className="mini ui blue button">Edit</button>
          <button className="mini ui red button">Delete</button>
        </td>
      </tr>
    );
  }
}

export default Supplier;
