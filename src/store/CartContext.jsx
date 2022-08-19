import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);

    const add = (item) => {
        setItems([...items, item]);
    };

    const destroy = (item) => {
        let newItems = items.filter((element) => element.id !== item.id);
        setItems(newItems);
    };

    const empty = () => {
        setItems([]);
    };

    return (
        <CartContext.Provider
            value={{
                empty: empty,
                items: items,
                setItems: setItems,
                add: add,
                destroy: destroy,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;
