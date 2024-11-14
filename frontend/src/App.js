import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Link here
import StudentList from './components/StudentList';
import FacultyList from './components/FacultyList';
import './App.css'; // Import the CSS

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <div className="navbar">
          <div className="logo">Student Management</div>
          <div className="menu">
            <Link to="/students">Students</Link> {/* Link to students */}
            <Link to="/faculty">Faculty</Link> {/* Link to faculty */}
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/students" element={<StudentList />} />
            <Route path="/faculty" element={<FacultyList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
