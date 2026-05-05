import { useEffect, useState } from "react";
import studentsData from "./data/students";
import StudentCard from "./components/StudentCard";
import DashboardHeader from "./components/DashboardHeader";
import SearchBar from "./components/SearchBar";
import SortControls from "./components/SortControls";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [favorites, setFavorites] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setStudents(studentsData);
      setLoading(false);
    }, 1500);
  }, []);

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.major.toLowerCase().includes(search.toLowerCase())
  );

  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (sort === "name") return a.name.localeCompare(b.name);
    if (sort === "gpa") return b.gpa - a.gpa;
    return 0;
  });

  useEffect(() => {
    document.title = `Dashboard — ${filteredStudents.length} Students`;
  }, [filteredStudents.length]);

  const handleFavorite = () => {
    setFavorites((prev) => prev + 1);
  };

  return (
    <div>
      <DashboardHeader favorites={favorites} />

      <div style={{ padding: "20px" }}>
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      <div style={{ padding: "0 20px 20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <SortControls setSort={setSort} />
      </div>

      <div style={{ padding: "20px" }}>
        {loading ? (
          <h3>Loading students...</h3>
        ) : (
          sortedStudents.map((student) => (
            <StudentCard
              key={student.id}
              {...student}
              onFavorite={handleFavorite}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;