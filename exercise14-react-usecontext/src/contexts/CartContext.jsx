import { createContext, useMemo, useState } from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (dish) => {
    setCartItems((currentItems) => {
      const existing = currentItems.find((item) => item.id === dish.id);

      if (existing) {
        return currentItems.map((item) =>
          item.id === dish.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentItems, { ...dish, quantity: 1 }];
    });
  };

  const removeFromCart = (dishId) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === dishId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Exercise 3: these values are recalculated whenever cartItems changes.
  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

  const cartValue = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + Number(item.price) * item.quantity,
        0
      ),
    [cartItems]
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount,
        cartValue
      }}
    >
      {children}
    </CartContext.Provider>
  );
}