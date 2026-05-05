import PropTypes from "prop-types";

function CourseTag({ courseName, color }) {
  return (
    <span style={{
      background: color || "#ddd",
      padding: "5px 10px",
      borderRadius: "20px",
      fontSize: "12px",
      marginRight: "5px",
      display: "inline-block"
    }}>
      {courseName}
    </span>
  );
}

CourseTag.propTypes = {
  courseName: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default CourseTag;