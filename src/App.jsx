import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FoxLandingPage from './pages/FoxLandingPage';
import FacultyProfile from './pages/FacultyProfile';
import Timetable from './pages/Timetable';
import QuestionPaper from './pages/QuestionPaper';
import Internship from './pages/Internship';
import AcademicSupport from './pages/AcademicSupport';
import Counselling from './pages/Counselling';
import LeaveManagement from './pages/LeaveManagement';
import Research from './pages/Research';
import SmartERP from './pages/SmartERP';
import LearningAI from './pages/LearningAI';
import Placements from './pages/Placements';
import IQAC from './pages/IQAC';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<FoxLandingPage />} />
          <Route path="/classic-dashboard" element={<LandingPage />} />
          <Route path="/faculty-profile" element={<FacultyProfile />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/question-paper" element={<QuestionPaper />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/academic-support" element={<AcademicSupport />} />
          <Route path="/counselling" element={<Counselling />} />
          <Route path="/leave-management" element={<LeaveManagement />} />
          <Route path="/research" element={<Research />} />
          <Route path="/smart-erp" element={<SmartERP />} />
          <Route path="/learning-resources" element={<LearningAI />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/iqac" element={<IQAC />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
