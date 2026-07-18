type CategoryFilterProps = {
  category: string;
  setCategory: (value: string) => void;
};

function CategoryFilter({ category, setCategory }: CategoryFilterProps) {
  const categories = [
    "All",
    "Women's Fashion",
    "Children's Fashion",
    "Men's Fashion",
    "Luxury Watches",
    "Antique Furniture",
  ];

  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      style={{
        width: "220px",
        height: "55px",
        padding: "10px",
        fontSize: "18px",
        borderRadius: "8px",
        border: "1px solid #aaa",
      }}
    >
      {categories.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default CategoryFilter;
