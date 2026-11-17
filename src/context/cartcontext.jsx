import { createContext, useState } from "react"
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    function addToCart(movie) {

        setCart((oldCart) => {
            const found = oldCart.find(
                (item) => item._id === movie._id
            );

            if (found) {
                return oldCart
            }
            return [...oldCart, { ...movie, quantity: 1 }];
        });
    }

    function updateQuantity(id, change) {
        setCart((oldCart) =>
            oldCart
                .map((item) =>
                    item._id === id
                        ? { ...item, quantity: item.quantity + change }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
}
