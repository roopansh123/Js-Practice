const Filtered = ({ categories, category, updateCategory }) => {
  return (
    <div className="p-5">
      <select
        value={category}
        onChange={(e) => updateCategory(e.target.value)}
        className="border p-2 rounded"
      >
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filtered;
