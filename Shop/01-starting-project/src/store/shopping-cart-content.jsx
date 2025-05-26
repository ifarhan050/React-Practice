import { createContext } from "react";

const ShoppingCartContentContext = createContext({
    items: [],
    onAddToCart: () => {},
    onUpdateItemQuantity: () => {},
});

export default ShoppingCartContentContext;