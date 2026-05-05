function DashboardHeader() {
    return (
      <div style={{
        background: "var(--primary)",
        color: "white",
        padding: "20px"
      }}>
        <h1>Student Dashboard</h1>
        <p>Manage student data efficiently</p>
  
        <nav>
          <a href="#" style={{ marginRight: "10px", color: "white" }}>Home</a>
          <a href="#" style={{ marginRight: "10px", color: "white" }}>Students</a>
          <a href="#" style={{ color: "white" }}>Settings</a>
        </nav>
      </div>
    );
  }
  
  export default DashboardHeader;