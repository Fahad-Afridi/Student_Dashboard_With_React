import PropTypes from "prop-types";
import StatBadge from "./StatBadge";
import CourseTag from "./CourseTag";

function StudentCard({ name, id, avatar, gpa, major, courses }) {
  return (
    <div style={{
      background: "var(--card-bg)",
      padding: "16px",
      borderRadius: "var(--radius)",
      marginBottom: "16px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <img src={avatar} alt={name} width="80" />

      <h3>{name}</h3>
      <p>ID: {id}</p>
      <p>Major: {major}</p>

      <StatBadge label="GPA" value={gpa} />

      <div style={{ marginTop: "10px" }}>
        {(courses || []).map((course, index) => (
          <CourseTag
            key={index}
            courseName={course}
            color="#e0e7ff"
          />
        ))}
      </div>
    </div>
  );
}

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  gpa: PropTypes.number.isRequired,
  major: PropTypes.string.isRequired,
  courses: PropTypes.array.isRequired
};

export default StudentCard;