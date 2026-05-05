import { useState } from "react";
import { useStudents } from "../context/StudentContext";
import StatBadge from "./StatBadge";
import CourseTag from "./CourseTag";

function StudentCard({ student }) {
  const { setFavorites, removeStudent } = useStudents();
  const [fav, setFav] = useState(false);

  const toggleFav = () => {
    setFav(!fav);
    if (!fav) setFavorites((p) => p + 1);
  };

  return (
    <div style={{
      background: "var(--card-bg)",
      padding: "16px",
      borderRadius: "12px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <img src={student.avatar} width="80" />

      <h3>{student.name}</h3>

      <button onClick={toggleFav}>
        {fav ? "💖 Favorite" : "🤍 Favorite"}
      </button>

      <button onClick={() => removeStudent(student.id)}>
        Remove
      </button>

      <p>{student.major}</p>

      <StatBadge label="GPA" value={student.gpa} />

      <div>
        {student.courses.map((c, i) => (
          <CourseTag key={i} courseName={c} color="#6366f1" />
        ))}
      </div>
    </div>
  );
}

export default StudentCard;