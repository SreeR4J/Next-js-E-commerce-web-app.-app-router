"use client";

import { useCart } from "../context/CartContext";
import "./Cart.css";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    IncreaseQuantity,
    decreaseQuantity,
    total,searchTerm
  } = useCart();

  const filteredProducts = cart.filter((product: any) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  function removeProductAlert(product: any) {
    alert(`${product.title} removed from cart`);
    removeFromCart(product.id);
  }

  return (
    <section className="cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <h1>My Cart</h1>
          <p>Review your selected products</p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="cart-empty">
            <h2>Your cart is empty</h2>
            <p>Add some products to get started!</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {filteredProducts.map((item: any) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-image-box">
                    <img
                      src={item.images?.[0] || item.thumbnail}
                      alt={item.title}
                      className="cart-image"
                    />
                  </div>

                  <div className="cart-item-details">
                    <p className="cart-category">{item.category}</p>

                    <h3 className="cart-product-title">{item.title}</h3>

                    <p className="cart-item-price">
                      ₹{Number(item.price).toFixed(2)}
                    </p>

                    <div className="cart-actions">
                      <div className="quantity-control">
                        <button
                          className="quantity-btn"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </button>

                        <span className="quantity-number">
                          {item.quantity}
                        </span>

                        <button
                          className="quantity-btn"
                          onClick={() => IncreaseQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="remove-cart-btn"
                        onClick={() => removeProductAlert(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="cart-subtotal">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>

              <div className="cart-total-row">
                <span>Total</span>
                <span className="cart-total-price">
                  ₹{Number(total).toFixed(2)}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}