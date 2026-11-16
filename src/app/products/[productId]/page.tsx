  "use client";

  import React, { useEffect, useState } from "react";
  import { useParams } from "next/navigation";
  import { ProductServices } from "@/app/services/product-services";
  import { useCart } from "@/app/context/CartContext";
  import "./ProductDetails.css";

  export default function Page() {
    const params = useParams();
    const productId = Number(params.productId);

    const { addToCart } = useCart();
    const [product, setProduct] = useState<any>(null);

    useEffect(() => {
      async function getProduct() {
        const data = await ProductServices.getProductsById(productId);
        setProduct(data);
      }

      if (productId) {
        getProduct();
      }
    }, [productId]);

    if (!product) {
      return <h2 className="product-loading">Loading...</h2>;
    }

    function handleAddToCart() {
      addToCart(product);
      alert("Product Added Successfully");
    }

    return (
      <div className="product-details-page">
        <div className="product-details-card">
          <div className="product-details-image-box">
            <img
              src={product.images?.[0] || product.thumbnail}
              alt={product.title}
              className="product-details-image"
            />
          </div>

          <div className="product-details-content">
            <p className="details-category">{product.category}</p>

            <h1 className="details-title">{product.title}</h1>

            <div className="details-rating">
              <span className="details-stars">★★★★★</span>
              <span className="details-rating-number">
                {typeof product.rating === "number"
                  ? product.rating.toFixed(1)
                  : product.rating?.rate?.toFixed(1) || "4.5"}
              </span>
            </div>

            <div className="details-divider"></div>

            <h3 className="description-heading">Product Description</h3>

            <p className="details-description">{product.description}</p>

            <p className="details-price">
              ₹{Number(product.price).toFixed(2)}
            </p>

            <button
              onClick={handleAddToCart}
              className="add-to-cart-btn"
            >
              Add to Cart <span className="cart-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    );
  }