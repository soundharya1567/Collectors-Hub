type SortFilterProps = {
  sort: string;
  setSort: (value: string) => void;
};

function SortFilter({ sort, setSort }: SortFilterProps) {
  return (
    <select
      value={sort}
      onChange={(e) => setSort(e.target.value)}
      style={{
        width: "220px",
        height: "55px",
        padding: "10px",
        fontSize: "18px",
        borderRadius: "8px",
        border: "1px solid #aaa",
      }}
    >
      <option value="default">Sort By</option>

      <option value="low">Price: Low to High</option>

      <option value="high">Price: High to Low</option>
    </select>
  );
}

export default SortFilter;
