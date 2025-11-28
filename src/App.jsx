import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CourseDetail from './pages/CourseDetail';
import LessonPage from './pages/LessonPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/course/:courseId/lesson/:lessonId" element={<LessonPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
