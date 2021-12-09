import React, { FC, Fragment, useContext } from "react";
import { ProductContext } from "src/context/productContext";
import { ProductType } from "src/redux/productReducer";
import IconCart from "../icons/icon-cart";

interface IconGroupProps {
  products: ProductType[];
}
const IconGroup: FC<IconGroupProps> = ({ products }) => {
  const { state, dispatch } = useContext(ProductContext);
  const deleteCart = () => {
    dispatch({ type: "DELETE_TO_CART", payload: { id: 1 } });
  };
  // console.log(products);
  return (
    <Fragment>
      <div className="header-right__cart">
        <a href="#0">
          <IconCart />
          <span>{products.length}</span>
        </a>

        <div className="cart-items">
          <div className="cart-items__header">
            <h3>Cart</h3>
          </div>

          {products.length === 0 ? (
            <div className="cart-items__empty-content">
              <p>Your cart is empty</p>
            </div>
          ) : (
            <div className="cart-items__content">
              <div className="product">
                <div className="img">
                  <img src={products[0].img} alt="img content" />
                </div>

                <div className="info">
                  <h3>{products[0].name}</h3>
                  <div className="price">
                    <span className="unit-price">{`$${products[0].price}`}</span>
                    <span className="multi">*</span>
                    <span className="quantity">{products[0].quantity}</span>
                    <span className="total">
                      {`$${products[0].price * products[0].quantity}`}
                    </span>
                  </div>
                </div>

                <div className="action" onClick={deleteCart}>
                  <img src="/assets/images/icon-delete.svg" alt="icon delete" />
                </div>
              </div>

              <div className="btn-checkout">
                <a href="#0">Checkout</a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="header-right__profile">
        <a href="#0">
          <img src="/assets/images/image-avatar.png" alt="profile" />
        </a>
      </div>
    </Fragment>
  );
};

export default IconGroup;
