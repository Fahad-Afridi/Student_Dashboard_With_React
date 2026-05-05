function StatBadge({ label, value }) {
    return (
      <div style={{
        background: "rgba(99, 102, 241, 0.15)",
        padding: "6px 10px",
        borderRadius: "8px",
        marginTop: "8px",
        display: "inline-block",
        fontSize: "14px",
        fontWeight: "bold",
        color: "inherit"
      }}>
        <strong>{label}:</strong> {value}
      </div>
    );
  }
  
  export default StatBadge;