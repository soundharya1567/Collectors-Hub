type ConditionFilterProps = {
  condition: string;
  setCondition: (value: string) => void;
};

function ConditionFilter({ condition, setCondition }: ConditionFilterProps) {
  const conditions = ["All", "New", "Good", "Excellent"];

  return (
    <select
      value={condition}
      onChange={(e) => setCondition(e.target.value)}
      style={{
        width: "220px",
        height: "55px",
        padding: "10px",
        fontSize: "18px",
        borderRadius: "8px",
        border: "1px solid #aaa",
      }}
    >
      {conditions.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default ConditionFilter;
