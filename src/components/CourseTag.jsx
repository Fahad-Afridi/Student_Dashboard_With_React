function CourseTag({ courseName, color }) {
    return (
      <span style={{
        background: color,
        color: "white",
        padding: "5px 10px",
        borderRadius: "20px",
        marginRight: "5px",
        fontSize: "12px",
        display: "inline-block"
      }}>
        {courseName}
      </span>
    );
  }
  
  export default CourseTag;