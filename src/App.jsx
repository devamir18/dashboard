import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './component/sidebar';
import Attendancetable from './component/attendancetable' 
import Dashboard from './pages/dashboard';
import Table from'./component/table'
import Staff from './pages/staff'
import Payrolll from './pages/payrolll';
import Timesheetcard from './component/Timesheetcard'
import Addstaff from './component/addstaff';
import Attendance from './pages/attendance'
import Timesheet from './pages/timesheet';
import Login from './pages/login'


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/attendance" element={<Attendance/>} />
        <Route path="/" element={<Sidebar/>} />
        <Route path="/staff" element={<Staff/>} />
         <Route path="/payroll" element={<Payrolll/>} />
          <Route path="/staff" element={<Addstaff/>} />
           <Route path="/timesheet" element={<Timesheet/>} />
           <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
