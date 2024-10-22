import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Student Management</h1>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add-student" element={<StudentForm />} />
          <Route path="/edit-student/:id" element={<StudentForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
