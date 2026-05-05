import { useState, useEffect } from "react";
import { useStudents } from "../context/StudentContext";

function AddStudentForm() {
  const { students, addStudent } = useStudents();

  const [form, setForm] = useState({
    id: "",
    name: "",
    major: "",
    gpa: "",
    courses: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name) return setError("Name is required");
    if (!form.id || isNaN(form.id)) return setError("Valid numeric ID required");
    if (students.find((s) => s.id === form.id)) return setError("ID must be unique");
    if (form.gpa < 0 || form.gpa > 4) return setError("GPA must be 0 - 4");

    const newStudent = {
      id: form.id,
      name: form.name,
      major: form.major,
      gpa: parseFloat(form.gpa),
      avatar: "https://i.pravatar.cc/150",
      courses: form.courses.split(",").map(c => c.trim())
    };

    addStudent(newStudent);

    setForm({ id: "", name: "", major: "", gpa: "", courses: "" });
    setError("");
    setSuccess(true);
  };

  useEffect(() => {
    if (success) {
      const t = setTimeout(() => setSuccess(false), 3000);
      return () => clearTimeout(t);
    }
  }, [success]);

  return (
    <div style={{
      background: "var(--card-bg)",
      padding: "16px",
      borderRadius: "12px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <h3 style={{ marginBottom: "10px" }}>Add Student</h3>

      <form onSubmit={handleSubmit} style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px"
      }}>
        <input placeholder="Student ID"
          value={form.id}
          onChange={(e) => setForm({ ...form, id: e.target.value })} />

        <input placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })} />

        <input placeholder="Major"
          value={form.major}
          onChange={(e) => setForm({ ...form, major: e.target.value })} />

        <input placeholder="GPA (0 - 4)"
          value={form.gpa}
          onChange={(e) => setForm({ ...form, gpa: e.target.value })} />

        <input placeholder="Courses (comma separated)"
          value={form.courses}
          onChange={(e) => setForm({ ...form, courses: e.target.value })} />

        <button type="submit">Add Student</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "limegreen" }}>Student added successfully!</p>}
    </div>
  );
}

export default AddStudentForm;