import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { CartContext } from "./contexts/CartContext";
import DishesList from "./components/DishesList";
import Cart from "./components/Cart";

export default function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className="app"
      style={{
        color: theme.foreground,
        backgroundColor: theme.background
      }}
    >
      <header className="header">
        <div>
          <h1>Exercise 14: React Hook (useContext)</h1>
          <p>Theme + Cart application</p>
        </div>

        <button
          className="theme-button"
          onClick={toggleTheme}
          style={{
            color: theme.foreground,
            backgroundColor: theme.background
          }}
        >
          Toggle Theme
        </button>
      </header>

      <main className="layout">
        <section>
          <DishesList />
        </section>

        <aside>
          <Cart />
        </aside>
      </main>
    </div>
  );
}