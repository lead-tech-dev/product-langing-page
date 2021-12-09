import React, { FC, Reducer, useReducer } from "react";
import ProductReducer, { ProductActions } from "src/redux/productReducer";
import {
  initialState,
  InitialStateType,
  ProductContext,
} from "./productContext";

const mainReducer = (
  { products }: InitialStateType,
  action: ProductActions
) => ({
  products: ProductReducer(products, action),
});

export const ProductProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
