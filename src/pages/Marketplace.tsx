import { useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/categoryfilter";
import ConditionFilter from "../components/ConditionFilter";
import SortFilter from "../components/SortFilter";
import products from "../data/products";

function Marketplace() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [condition, setCondition] = useState("All");
  const [sort, setSort] = useState("default");

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || product.category === category;

    const matchesCondition =
      condition === "All" || product.condition === condition;

    return matchesSearch && matchesCategory && matchesCondition;
  });

  // Sorting

  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sort === "newest") {
    filteredProducts.sort((a, b) => b.id - a.id);
  }

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
        Marketplace
      </h1>

      {/* Search Filters */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        <SearchBar search={search} setSearch={setSearch} />

        <CategoryFilter category={category} setCategory={setCategory} />

        <ConditionFilter condition={condition} setCondition={setCondition} />

        <SortFilter sort={sort} setSort={setSort} />
      </div>

      {/* Products */}

      <div className="card-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              category={product.category}
              condition={product.condition}
              price={product.price}
              seller={product.seller}
              location={product.location}
            />
          ))
        ) : (
          <h2>No products found</h2>
        )}
      </div>
    </div>
  );
}

export default Marketplace;
