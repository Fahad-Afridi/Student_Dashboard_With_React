import { useState } from "react";
import StatBadge from "./StatBadge";
import CourseTag from "./CourseTag";

function StudentCard({ name, id, avatar, gpa, major, courses, onFavorite }) {
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
    if (!favorite) onFavorite();
  };

  return (
    <div style={{
      background: "white",
      padding: "16px",
      borderRadius: "12px",
      marginBottom: "16px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <img src={avatar} alt={name} width="80" />

      <h3>{name}</h3>

      <button onClick={toggleFavorite}>
        {favorite ? "💖 Favorite" : "🤍 Favorite"}
      </button>

      <p>ID: {id}</p>
      <p>Major: {major}</p>

      <StatBadge label="GPA" value={gpa} />

      <div style={{ marginTop: "10px" }}>
        {courses.map((c, i) => (
          <CourseTag key={i} courseName={c} color="#e0e7ff" />
        ))}
      </div>
    </div>
  );
}

export default StudentCard;