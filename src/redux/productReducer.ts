type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Add = "ADD_TO_CART",
  Delete = "DELETE_TO_CART",
}

export type ProductType = {
  id: number;
  img: string;
  category: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
};

type ProductPayload = {
  [Types.Add]: {
    id: number;
    img: string;
    category: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
  };
  [Types.Delete]: {
    id: number;
  };
};

export type ProductActions =
  ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

const ProductReducer = (state: ProductType[], action: ProductActions) => {
  switch (action.type) {
    case Types.Add:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          img: action.payload.img,
          category: action.payload.category,
          description: action.payload.description,
          quantity: action.payload.quantity,
        },
      ];

    case Types.Delete:
      return [...state.filter((product) => product.id !== action.payload.id)];

    default:
      return state;
  }
};

export default ProductReducer;
