import { useState } from "react";
import PostCard from "../components/PostCard";
import posts from "../data/posts";

function CommunityFeed() {
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const filteredPosts = posts.filter((post) => {
    const searchMatch = post.caption
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch = category === "All" || post.category === category;

    return searchMatch && categoryMatch;
  });

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Community Feed
      </h1>

      {/* Search and Category Filter */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        <input
          type="text"
          placeholder="Search posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        >
          <option value="All">All</option>
          <option value="Women's Fashion">Women's Fashion</option>
          <option value="Luxury Watches">Luxury Watches</option>
          <option value="Men's Fashion">Men's Fashion</option>{" "}
        </select>
      </div>

      {/* Posts */}

      {filteredPosts.length === 0 ? (
        <h2
          style={{
            textAlign: "center",
          }}
        >
          No posts found
        </h2>
      ) : (
        <div className="card-container">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CommunityFeed;
