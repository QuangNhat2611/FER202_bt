import { useContext } from "react";
import { dishes } from "../data/dishes";
import { CartContext } from "../contexts/CartContext";

export default function DishesList() {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h2>Dish List</h2>

      <div className="dish-grid">
        {dishes.map((dish) => (
          <article className="dish-card" key={dish.id}>
            <div className="dish-image">
              <img
                src={`/${dish.image}`}
                alt={dish.name}
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  event.currentTarget.parentElement.classList.add("image-fallback");
                  event.currentTarget.parentElement.textContent = "🍽️";
                }}
              />
            </div>

            <div className="dish-content">
              <div className="dish-title">
                <h3>{dish.name}</h3>
                {dish.label && <span className="badge">{dish.label}</span>}
              </div>

              <p className="category">{dish.category}</p>
              <p>{dish.description}</p>

              <div className="dish-bottom">
                <strong>${Number(dish.price).toFixed(2)}</strong>
                <button onClick={() => addToCart(dish)}>Add to Cart</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}