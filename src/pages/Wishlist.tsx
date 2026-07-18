import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Wishlist() {
  const [wishlist, setWishlist] = useState<any[]>([]);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

    setWishlist(savedWishlist);
  }, []);

  const removeItem = (id: number) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);

    setWishlist(updatedWishlist);

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const filteredWishlist = wishlist.filter((item) => {
    const searchMatch = item.title.toLowerCase().includes(search.toLowerCase());

    const categoryMatch = category === "All" || item.category === category;

    return searchMatch && categoryMatch;
  });

  const categories = ["All", ...new Set(wishlist.map((item) => item.category))];

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1>My Wishlist</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <input
          type="text"
          placeholder="Search wishlist"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "8px",
          }}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {filteredWishlist.length === 0 ? (
        <p>No wishlist items found</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {filteredWishlist.map((item) => (
            <div
              key={item.id}
              style={{
                width: "250px",
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "15px",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "contain",
                }}
              />

              <h2>{item.title}</h2>

              <p>Category: {item.category}</p>

              <p>Price: ₹{item.price}</p>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <button onClick={() => removeItem(item.id)}>Remove</button>

                <Link to={`/product/${item.id}`}>
                  <button>View Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
