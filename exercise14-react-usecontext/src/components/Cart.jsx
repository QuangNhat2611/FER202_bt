import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    cartCount,
    cartValue
  } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty">Cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div>
                  <strong>{item.name}</strong>
                  <div>
                    ${Number(item.price).toFixed(2)} × {item.quantity}
                  </div>
                </div>

                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <hr />

          <p>
            <strong>Total items:</strong> {cartCount}
          </p>
          <p>
            <strong>Total value:</strong> ${cartValue.toFixed(2)}
          </p>

          <button className="clear-button" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}