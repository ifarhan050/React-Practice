import { createContext, useState,useReducer } from "react";
import { DUMMY_PRODUCTS } from '../dummy-products.js';
 export const ShoppingCartContentContext = createContext({
    items: [],
    onAddToCart: () => {},
    onUpdateItemQuantity: () => {},
});

const cartReducer = (state, action) => {
 const updatedItems = [...state.items];
    switch (action.type) {
        case 'ADD':
        const existingCartItemIndex = updatedItems.findIndex(
            (cartItem) => cartItem.id === action.payload.id
        );
        const existingCartItem = updatedItems[existingCartItemIndex];

        if (existingCartItem) {
            const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload.id);
            updatedItems.push({
            id: action.payload.id,
            name: product.title,
            price: product.price,
            quantity: 1,
            });
        }

        return {
        ...state,
        items: updatedItems,
        };

        case 'UPDATE_QUANTITY':
        const updatedItemIndex = updatedItems.findIndex(
            (item) => item.id === action.payload.id
        );

        const updatedItem = {
            ...updatedItems[updatedItemIndex],
        };

        updatedItem.quantity += action.payload.amount;

        if (updatedItem.quantity <= 0) {
            updatedItems.splice(updatedItemIndex, 1);
        } else {
            updatedItems[updatedItemIndex] = updatedItem;
        }

            return {
            ...state,
            items: updatedItems,
            };
        default:
        return state;
        }
}

export const ShoppingCartContentProvider = ({children})=>{
  
const [cartState, cartDispatch] = useReducer(cartReducer, {
        items: [],
 });
  function handleAddItemToCart(id) {
    cartDispatch({ type: 'ADD', payload: { id } });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    cartDispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, amount } });
  }


  const contextValue = {
    items: cartState.items,
    onAddToCart: handleAddItemToCart,
    onUpdateItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <ShoppingCartContentContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContentContext.Provider>
  );
}
