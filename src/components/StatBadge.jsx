import PropTypes from "prop-types";

function StatBadge({ label, value }) {
  return (
    <div style={{
      background: "#eee",
      padding: "6px 10px",
      borderRadius: "8px",
      display: "inline-block",
      marginRight: "6px"
    }}>
      <strong>{label}:</strong> {value}
    </div>
  );
}

StatBadge.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default StatBadge;