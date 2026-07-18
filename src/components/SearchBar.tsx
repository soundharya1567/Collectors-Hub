type SearchBarProps = {
  search: string;
  setSearch: (value: string) => void;
};

function SearchBar({ search, setSearch }: SearchBarProps) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "220px",
          height: "55px",
          padding: "15px",
          fontSize: "18px",
          borderRadius: "8px",
          border: "1px solid #aaa",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}

export default SearchBar;
