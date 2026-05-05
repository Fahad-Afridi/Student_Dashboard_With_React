function CourseTag({ courseName, color }) {
    return (
      <span style={{
        background: color || "#ddd",
        padding: "5px 10px",
        borderRadius: "20px",
        fontSize: "12px",
        marginRight: "5px"
      }}>
        {courseName}
      </span>
    );
  }
  
  export default CourseTag;