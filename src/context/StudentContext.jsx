import { createContext, useContext, useEffect, useState } from "react";
import studentsData from "../data/students";

const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [favorites, setFavorites] = useState(0);

  // FIX: proper hydration
  useEffect(() => {
    const saved = localStorage.getItem("students");

    if (saved && JSON.parse(saved).length > 0) {
      setStudents(JSON.parse(saved));
    } else {
      setStudents(studentsData);
    }
  }, []);

  // FIX: persist updates
  useEffect(() => {
    if (students.length > 0) {
      localStorage.setItem("students", JSON.stringify(students));
    }
  }, [students]);

  const addStudent = (student) => {
    setStudents((prev) => [...prev, student]);
  };

  const removeStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        search,
        setSearch,
        sort,
        setSort,
        favorites,
        setFavorites,
        addStudent,
        removeStudent
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export const useStudents = () => useContext(StudentContext);