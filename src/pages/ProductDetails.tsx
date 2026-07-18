import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const [message, setMessage] = useState("");

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const addToCollection = (type: string) => {
    const collections = JSON.parse(
      localStorage.getItem("collections") ||
        '{"Owned":[],"Wishlist":[],"Selling":[]}',
    );

    const alreadyAdded = collections[type].some(
      (item: any) => item.id === product.id,
    );

    if (alreadyAdded) {
      setMessage(`Already in ${type}`);

      return;
    }

    const newItem = {
      ...product,

      dateAdded: new Date().toLocaleDateString(),

      estimatedValue: product.price,
    };

    collections[type].push(newItem);

    localStorage.setItem(
      "collections",

      JSON.stringify(collections),
    );

    setMessage(`Added to ${type} ✅`);
  };

  return (
    <div
      style={{
        padding: "30px",

        display: "flex",

        flexDirection: "column",

        alignItems: "center",

        textAlign: "center",
      }}
    >
      <img
        src={product.image || "/default.png"}
        alt={product.title}
        style={{
          width: "300px",

          height: "300px",

          objectFit: "contain",

          borderRadius: "10px",
        }}
      />

      <h1>{product.title}</h1>

      <p>
        <b>Category:</b> {product.category}
      </p>

      <p>
        <b>Condition:</b> {product.condition}
      </p>

      <p>
        <b>Price:</b> ₹{product.price}
      </p>

      <p>
        <b>Seller:</b> {product.seller}
      </p>

      <p>
        <b>Location:</b> {product.location}
      </p>

      {product.description && (
        <p
          style={{
            maxWidth: "500px",
          }}
        >
          <b>Description:</b> {product.description}
        </p>
      )}

      <div
        style={{
          display: "flex",

          gap: "15px",

          marginTop: "20px",
        }}
      >
        <button
          onClick={() => addToCollection("Owned")}
          style={{
            padding: "10px 20px",

            cursor: "pointer",

            borderRadius: "6px",

            border: "none",

            backgroundColor: "#2563eb",

            color: "white",
          }}
        >
          Add to Collection
        </button>

        <button
          onClick={() => addToCollection("Wishlist")}
          style={{
            padding: "10px 20px",

            cursor: "pointer",

            borderRadius: "6px",

            border: "1px solid #2563eb",

            backgroundColor: "white",
          }}
        >
          Add to Wishlist
        </button>
      </div>

      {message && (
        <p
          style={{
            marginTop: "20px",

            fontWeight: "bold",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default ProductDetails;
