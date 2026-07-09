const Filter = ({ gender, setGender, age, setAge }) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 bg-white shadow-md rounded-xl p-6 mb-8">
      {/* Gender Filter */}
      <div className="flex flex-col">
        <label className="mb-2 text-sm font-semibold text-gray-700">
          Gender
        </label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-44 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      {/* Age Filter */}
      <div className="flex flex-col">
        <label className="mb-2 text-sm font-semibold text-gray-700">Age</label>
        <select
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-44 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="All">All Ages</option>
          <option value="18-30">18 - 30</option>
          <option value="31-50">31 - 50</option>
          <option value="50+">50+</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
