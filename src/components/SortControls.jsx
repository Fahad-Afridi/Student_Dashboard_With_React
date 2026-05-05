function SortControls({ setSort }) {
    return (
      <>
        <button onClick={() => setSort("default")}>Default</button>
        <button onClick={() => setSort("name")}>Name</button>
        <button onClick={() => setSort("gpa")}>GPA</button>
      </>
    );
  }
  
  export default SortControls;