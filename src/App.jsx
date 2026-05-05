import { ThemeProvider } from "./context/ThemeContext";
import { StudentProvider, useStudents } from "./context/StudentContext";
import DashboardHeader from "./components/DashboardHeader";
import SearchBar from "./components/SearchBar";
import SortControls from "./components/SortControls";
import StudentCard from "./components/StudentCard";
import AddStudentForm from "./components/AddStudentForm";
import { useEffect } from "react";

function Dashboard() {
  const { students, search, sort } = useStudents();

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.major.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "name") return a.name.localeCompare(b.name);
    if (sort === "gpa") return b.gpa - a.gpa;
    return 0;
  });

  useEffect(() => {
    document.title = `Dashboard — ${filtered.length} Students`;
  }, [filtered.length]);

  return (
    <div>
      <DashboardHeader />

      <SearchBar />
      <SortControls />

      {/* MAIN 50/50 LAYOUT FIX */}
      <div style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        alignItems: "flex-start"
      }}>

        {/* LEFT SIDE - STUDENTS (50%) */}
        <div style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          gap: "16px"
        }}>
          {sorted.map((s) => (
            <StudentCard key={s.id} student={s} />
          ))}
        </div>

        {/* RIGHT SIDE - FORM (50%) */}
        <div style={{ width: "50%" }}>
          <AddStudentForm />
        </div>

      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <StudentProvider>
        <Dashboard />
      </StudentProvider>
    </ThemeProvider>
  );
}