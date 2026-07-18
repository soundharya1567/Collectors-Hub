import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Collection() {
  const [activeTab, setActiveTab] = useState("All");

  const [collections, setCollections] = useState<any>({
    Owned: [],
    Wishlist: [],
    Selling: [],
  });

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  useEffect(() => {
    const savedCollections = JSON.parse(
      localStorage.getItem("collections") ||
        '{"Owned":[],"Wishlist":[],"Selling":[]}',
    );

    setCollections(savedCollections);
  }, []);

  const allItems = [
    ...collections.Owned,
    ...collections.Wishlist,
    ...collections.Selling,
  ];

  const currentItems = activeTab === "All" ? allItems : collections[activeTab];

  let filteredItems = currentItems.filter((item: any) => {
    const searchMatch = item.title
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch = category === "All" || item.category === category;

    return searchMatch && categoryMatch;
  });

  if (sort === "low") {
    filteredItems.sort((a: any, b: any) => a.price - b.price);
  }

  if (sort === "high") {
    filteredItems.sort((a: any, b: any) => b.price - a.price);
  }

  if (sort === "newest") {
    filteredItems.sort((a: any, b: any) => b.id - a.id);
  }

  const categories: string[] = Array.from(
    new Set([
      "All",
      ...currentItems.map((item: any) => item.category).filter(Boolean),
    ]),
  );

  const changeTab = (tab: string) => {
    setActiveTab(tab);
    setCategory("All");
  };

  const removeItem = (id: number) => {
    const updated = {
      ...collections,
    };

    Object.keys(updated).forEach((key) => {
      updated[key] = updated[key].filter((item: any) => item.id !== id);
    });

    setCollections(updated);

    localStorage.setItem("collections", JSON.stringify(updated));
  };

  const moveItem = (item: any, target: string) => {
    if (collections[target].some((i: any) => i.id === item.id)) {
      alert("Item already exists");

      return;
    }

    const updated = {
      ...collections,

      Owned:
        activeTab === "Owned"
          ? collections.Owned.filter((i: any) => i.id !== item.id)
          : collections.Owned,

      Wishlist:
        activeTab === "Wishlist"
          ? collections.Wishlist.filter((i: any) => i.id !== item.id)
          : collections.Wishlist,

      Selling:
        activeTab === "Selling"
          ? collections.Selling.filter((i: any) => i.id !== item.id)
          : collections.Selling,

      [target]: [...collections[target], item],
    };

    setCollections(updated);

    localStorage.setItem("collections", JSON.stringify(updated));
  };

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
        My Collection
      </h1>

      {/* Filters + Tabs */}

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
          placeholder="Search Collection"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "6px",
          }}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "6px",
          }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "6px",
          }}
        >
          <option value="default">Sort</option>

          <option value="low">Price Low to High</option>

          <option value="high">Price High to Low</option>

          <option value="newest">Newest</option>
        </select>

        {["All", "Owned", "Selling", "Wishlist"].map((tab) => (
          <button
            key={tab}
            onClick={() => changeTab(tab)}
            style={{
              padding: "8px 15px",

              borderRadius: "6px",

              cursor: "pointer",

              background: activeTab === tab ? "#2563eb" : "white",

              color: activeTab === tab ? "white" : "black",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {filteredItems.length === 0 ? (
        <h3
          style={{
            textAlign: "center",
          }}
        >
          No items found
        </h3>
      ) : (
        <div className="card-container">
          {filteredItems.map((item: any) => (
            <div
              key={item.id}
              style={{
                width: "250px",

                border: "1px solid #ddd",

                borderRadius: "12px",

                padding: "15px",

                background: "white",
              }}
            >
              <img
                src={item.image || "/default.png"}
                alt={item.title}
                style={{
                  width: "100%",

                  height: "200px",

                  objectFit: "contain",
                }}
              />

              <h2>{item.title}</h2>

              <p>Category: {item.category}</p>

              <p>
                Date Added:
                {item.dateAdded || "18-07-2026"}
              </p>

              <p>Estimated Value: ₹{item.estimatedValue || item.price}</p>

              <Link to={`/product/${item.id}`}>
                <button>View Details</button>
              </Link>

              <button
                onClick={() => removeItem(item.id)}
                style={{
                  marginLeft: "10px",
                }}
              >
                Remove
              </button>

              <br />
              <br />

              <select
                onChange={(e) =>
                  e.target.value && moveItem(item, e.target.value)
                }
              >
                <option>Move To</option>

                {["Owned", "Selling", "Wishlist"]

                  .filter((tab) => tab !== activeTab)

                  .map((tab) => (
                    <option key={tab}>{tab}</option>
                  ))}
              </select>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Collection;
