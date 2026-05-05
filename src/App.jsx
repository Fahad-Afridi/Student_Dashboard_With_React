import students from "./data/students";
import StudentCard from "./components/StudentCard";
import DashboardHeader from "./components/DashboardHeader";

function App() {
  return (
    <div>
      <DashboardHeader />

      <div style={{ padding: "20px" }}>
        {students.map((student) => (
          <StudentCard key={student.id} {...student} />
        ))}
      </div>
    </div>
  );
}

export default App;