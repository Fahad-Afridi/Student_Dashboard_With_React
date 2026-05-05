import { useStudents } from "../context/StudentContext";

function SearchBar() {
  const { search, setSearch } = useStudents();

  return (
    <div style={{ padding: "20px" }}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search student..."
        style={{ padding: "10px", width: "300px" }}
      />
    </div>
  );
}

export default SearchBar;