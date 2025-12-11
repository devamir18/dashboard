import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import Dashboard from './pages/dashboard';
import Attendance from './pages/attendance';
import Staff from './pages/staff';
import Addstaff from './component/addstaff';
import Payrolll from './pages/payrolll';
import Timesheet from './pages/timesheet';
import Login from './pages/login';


function MainLayout({ children }) {
  return (
    <div className="app-layout">
      <Sidebar/>
      <div className="main-content">{children}</div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/login" element={<Login />} />


        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route
          path="/attendance"
          element={
            <MainLayout>
              <Attendance />
            </MainLayout>
          }
        />
        <Route
          path="/staff"
          element={
            <MainLayout>
              <Staff />
            </MainLayout>
          }
        />
        <Route
          path="/add-staff"
          element={
            <MainLayout>
              <Addstaff />
            </MainLayout>
          }
        />
        <Route
          path="/payroll"
          element={
            <MainLayout>
              <Payrolll />
            </MainLayout>
          }
        />
        <Route
          path="/timesheet"
          element={
            <MainLayout>
              <Timesheet />
            </MainLayout>
          }
        />

        {/* Redirect unknown paths to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
