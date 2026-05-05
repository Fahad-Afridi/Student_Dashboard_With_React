import { useStudents } from "../context/StudentContext";

function SortControls() {
  const { setSort } = useStudents();

  return (
    <div style={{ padding: "0 20px 20px" }}>
      <button onClick={() => setSort("default")}>Default</button>
      <button onClick={() => setSort("name")}>Name</button>
      <button onClick={() => setSort("gpa")}>GPA</button>
    </div>
  );
}

export default SortControls;