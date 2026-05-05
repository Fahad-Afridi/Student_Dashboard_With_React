function DashboardHeader({ favorites }) {
    return (
      <div style={{
        background: "#6366f1",
        color: "white",
        padding: "20px"
      }}>
        <h1>Student Dashboard</h1>
        <p>Manage student data efficiently</p>
        <p>Favorites: {favorites}</p>
      </div>
    );
  }
  
  export default DashboardHeader;