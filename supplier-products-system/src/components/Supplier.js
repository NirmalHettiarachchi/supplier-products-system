import React, { Component } from "react";

class Supplier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSupplierId: null,
    };
  }
  onDelete = () => {
    this.props.onDelete(this.props.supplier.id);
  };

  onEdit = () => {
    this.props.onEdit(this.props.supplier);
  };

  onViewProducts = () => {
    const { id } = this.props.supplier;
    this.setState((prevState) => ({
      selectedSupplierId: prevState.selectedSupplierId === id ? null : id, // Toggle selection
    }));
  };

  render() {
    const {
      id,
      supplier_name,
      contact_person,
      mobile_number_1,
      mobile_number_2,
      products,
    } = this.props.supplier;

    return (
      <>
        <tr>
          <td style={{ textAlign: "center" }}>{id}</td>
          <td>{supplier_name}</td>
          <td>{contact_person}</td>
          <td>{mobile_number_1}</td>
          <td>{mobile_number_2}</td>
          <td>
            <div style={{ display: "flex", gap: "5px" }}>
              <button className="mini ui blue button" onClick={this.onEdit}>
                Edit
              </button>
              <button className="mini ui red button" onClick={this.onDelete}>
                Delete
              </button>
              <button
                className="mini ui green button"
                onClick={this.onViewProducts}
              >
                View Products
              </button>
            </div>
          </td>
        </tr>
        {this.state.selectedSupplierId === id && (
          <tr>
            <td colSpan="6">
              <div
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  background: "#f9f9f9",
                }}
              >
                <h4>Products for {supplier_name}</h4>
                {products && products.length > 0 ? (
                  <ul>
                    {products.map((product) => (
                      <li key={product.id}>
                        <strong>{product.product_name}</strong>: $
                        {product.product_price} <br />
                        <img
                          src={product.product_image_path}
                          alt={product.product_name}
                          style={{
                            width: "100px",
                            height: "75px",
                            objectFit: "cover",
                            marginTop: "5px",
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No products available for this supplier.</p>
                )}
              </div>
            </td>
          </tr>
        )}
      </>
    );
  }
}

export default Supplier;
