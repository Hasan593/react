import { useState } from "react"

export const useCart = () => {
    const [ cartItems, setCartItems ] = useState([]);

    const addToCart = (product) => {
        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
            setCartItems(cartItems.map(
                item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item
            ));
        } else {
            setCartItems([...cartItems, {...product, quantity: 1}]);
        }
    };

    const removeFormCart = id => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const totalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    const clearCart = () => {
        setCartItems([])
    };

    return {cartItems, addToCart, removeFormCart, totalPrice, clearCart};
};