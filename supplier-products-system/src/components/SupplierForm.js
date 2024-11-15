import React, { Component } from "react";

class SupplierForm extends Component {
  state = {
    products: [{ productName: "", productPrice: "", productImage: null }],
  };

  handleAddProduct = () => {
    this.setState({
      products: [
        ...this.state.products,
        { productName: "", productPrice: "", productImage: null },
      ],
    });
  };

  handelRemoveProduct = (index) => {
    const updatedProducts = this.state.products.filter((_, i) => i !== index);
    this.setState({ products: updatedProducts });
  };

  handleProductChange = (index, event) => {
    const { name, value, files } = event.target;
    const updateProducts = [...this.state.products];
    updateProducts[index][name] = files ? files[0] : value;
    this.setState({ products: updateProducts });
  };

  render() {
    return (
      <div className="form-container">
        <form className="ui form">
          <div className="fields">
            <div className="four wide field">
              <label>Supplier Name</label>
              <input
                type="text"
                name="supplier_name"
                placeholder="Supplier Name"
              />
            </div>
            <div className="four wide field">
              <label>Contact Person</label>
              <input
                type="text"
                name="contact_person"
                placeholder="Contact Person"
              />
            </div>
            <div className="four wide field">
              <label>Mobile Number 1</label>
              <input
                type="text"
                name="mobile_number_1"
                placeholder="Mobile Number 1"
              />
            </div>
            <div className="four wide field">
              <label>Mobile Number 2</label>
              <input
                type="text"
                name="mobile_number_2"
                placeholder="Mobile Number 2"
              />
            </div>
          </div>

          <h4>Products</h4>
          {this.state.products.map((product, index) => (
            <div className="fields product-row" key={index}>
              <div className="four wide field">
                <label>Product Name</label>
                <input
                  type="text"
                  name="productName"
                  placeholder="Product Name"
                  value={product.productName}
                  onChange={(event) => this.handleProductChange(index, event)}
                />
              </div>
              <div className="four wide field">
                <label>Product Price</label>
                <input
                  type="number"
                  name="productPrice"
                  placeholder="Product Price"
                  value={product.productPrice}
                  onChange={(event) => this.handleProductChange(index, event)}
                />
              </div>
              <div className="four wide field">
                <label>Product Image</label>
                <input
                  type="file"
                  name="productImage"
                  onChange={(event) => this.handleProductChange(index, event)}
                />
              </div>
              {index > 0 && (
                <div className="four wide field remove-button">
                  <button
                    type="button"
                    className="ui red button"
                    onClick={() => this.handelRemoveProduct(index)}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          ))}
          <button
            type="button"
            className="ui button"
            onClick={this.handleAddProduct}
          >
            Add Product
          </button>
          <div className="four wide field">
            <button className="ui primary button submit-button">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SupplierForm;
