import { Link } from "react-router-dom";

type ProductProps = {
  id: number;
  title: string;
  category: string;
  condition: string;
  price: number;
  seller: string;
  location: string;
  image: string;
};

function ProductCard({
  id,
  title,
  category,
  condition,
  price,
  seller,
  location,
  image,
}: ProductProps) {
  return (
    <div
      style={{
        width: "250px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "15px",
        backgroundColor: "white",
        boxShadow: "0 3px 10px rgba(0,0,0,0.12)",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "contain",
          backgroundColor: "#f5f5f5",
          borderRadius: "10px",
        }}
      />

      <h2>{title}</h2>

      <p>
        <b>Category:</b> {category}
      </p>

      <p>
        <b>Condition:</b> {condition}
      </p>

      <p>
        <b>Price:</b> ₹{price}
      </p>

      <p>
        <b>Seller:</b> {seller}
      </p>

      <p>
        <b>Location:</b> {location}
      </p>

      <Link to={`/product/${id}`}>
        <button
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "15px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#2563eb",
            color: "white",
            cursor: "pointer",
          }}
        >
          View Details
        </button>
      </Link>
    </div>
  );
}

export default ProductCard;
