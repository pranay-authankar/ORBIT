import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AuthGate from './pages/AuthGate';
import AppLayout from './layouts/AppLayout';
import AppHome from './pages/AppHome';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import ParentDashboard from './pages/ParentDashboard';
import StudentLayout from './layouts/StudentLayout';
import SchoolGroups from './pages/SchoolGroups';
import SchoolSocialMedia from './pages/SchoolSocialMedia';
import StudentAI from './pages/StudentAI';
import TeacherLayout from './layouts/TeacherLayout';
import TeacherGroups from './pages/TeacherGroups';
import TeacherSocialMedia from './pages/TeacherSocialMedia';
import ParentLayout from './layouts/ParentLayout';
import ParentGroups from './pages/ParentGroups';
import ParentSocialMedia from './pages/ParentSocialMedia';
import SchoolHomePage from './pages/SchoolHomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/auth-gate" element={<AuthGate />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<AppHome />} />
        </Route>
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<SchoolHomePage />} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="groups" element={<SchoolGroups />} />
          <Route path="social" element={<SchoolSocialMedia />} />
          <Route path="ai" element={<StudentAI />} />
        </Route>
        <Route path="/teacher" element={<TeacherLayout />}>
          <Route index element={<SchoolHomePage />} />
          <Route path="dashboard" element={<TeacherDashboard />} />
          <Route path="groups" element={<TeacherGroups />} />
          <Route path="social" element={<TeacherSocialMedia />} />
        </Route>
        <Route path="/parent" element={<ParentLayout />}>
          <Route index element={<SchoolHomePage />} />
          <Route path="dashboard" element={<ParentDashboard />} />
          <Route path="groups" element={<ParentGroups />} />
          <Route path="social" element={<ParentSocialMedia />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
