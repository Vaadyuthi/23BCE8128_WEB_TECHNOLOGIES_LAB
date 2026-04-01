import React from "react";
import StudentProfile from "./StudentProfile";
import StudentCard from "./StudentCard";
import Counter from "./Counter";

import FormValidation from "./FormValidation";
import ItemList from "./ItemList";
import FetchData from "./FetchData";

function App() {
  return (
    <div>
      <h1>React Lab Exercises</h1>

      {/* ================= LAB 9 ================= */}
      <h2>Lab Sheet 9</h2>

      <h3>Exercise 1: Student Profile</h3>
      <StudentProfile />

      <h3>Exercise 2: Student Cards</h3>
      <StudentCard name="Rahul" department="CSE" marks="85" />
      <StudentCard name="Anjali" department="ECE" marks="90" />
      <StudentCard name="Kiran" department="IT" marks="88" />

      <h3>Exercise 3: Counter Application</h3>
      <Counter />

      <hr />

      {/* ================= LAB 10 ================= */}
      <h2>Lab Sheet 10</h2>

      <h3>Exercise 1: Form Validation</h3>
      <FormValidation />

      <h3>Exercise 2: Dynamic Item List</h3>
      <ItemList />

      <h3>Exercise 3: Fetch Data from API</h3>
      <FetchData />
    </div>
  );
}

export default App;