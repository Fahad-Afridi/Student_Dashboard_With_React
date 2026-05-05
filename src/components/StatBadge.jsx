function StatBadge({ label, value }) {
    return (
      <div style={{
        background: "#eee",
        padding: "6px 10px",
        borderRadius: "8px",
        display: "inline-block"
      }}>
        <strong>{label}:</strong> {value}
      </div>
    );
  }
  
  export default StatBadge;