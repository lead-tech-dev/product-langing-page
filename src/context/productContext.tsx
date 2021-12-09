import React, { createContext } from "react";
import ProductReducer, { ProductType } from "src/redux/productReducer";

export type InitialStateType = {
  products: ProductType[];
};

export const initialState = {
  products: [],
};
export interface Action {
  type: string;
  payload?: any;
}

export const ProductContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});
