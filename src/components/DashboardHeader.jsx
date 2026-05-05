import { useTheme } from "../context/ThemeContext";
import { useStudents } from "../context/StudentContext";

function DashboardHeader() {
  const { toggleTheme, theme } = useTheme();
  const { favorites } = useStudents();

  return (
    <div style={{
      background: "#6366f1",
      color: "white",
      padding: "20px",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <div>
        <h1>Student Dashboard</h1>
        <p>Favorites: {favorites}</p>
      </div>

      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}

export default DashboardHeader;