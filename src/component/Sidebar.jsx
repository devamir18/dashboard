import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
  localStorage.removeItem("staffId");
  localStorage.removeItem("staffPassword");

  

  navigate("/login"); 
};


  const [show, setShow] = useState(false);
  const [activePath, setActivePath] = useState("/dashboard");

  const isActive = (path) => activePath === path;

  const handleNavigation = (path) => {
    navigate(path);
    setActivePath(path);
    setShow(false);
  };

        

  const menuItems = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/payroll", label: "Payroll" },
    { path: "/staff", label: "Staff Directory" },
    { path: "/timesheet", label: "Timesheet" },
    { path: "/attendance", label: "Attendance" },
  ];


      

  return (
    <>
      {/* Mobile Toggle Button */}
      <button className="md:hidden p-3" onClick={() => setShow(!show)}>
        {show ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* MOBILE SIDEBAR — SAME STYLE AS DESKTOP */}
      {show && (
        <div className="md:hidden fixed top-0 left-0 w-64 h-full z-50 
                        bg-gradient-to-b from-slate-900 to-teal-700 text-white shadow-xl">
          <div className="p-6 border-b border-white/20 text-xl font-bold">
            HR Mini
          </div>

          <div className="flex flex-col space-y-4 p-5">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`flex items-center px-4 py-3 rounded-xl font-semibold w-full
                 transition-all duration-300
                 ${
                   isActive(item.path)
                     ? "bg-white/20 text-white"
                     : "text-gray-300 hover:bg-white/10 hover:text-white"
                 }`}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

    
      <div
        className="hidden md:block fixed top-0 left-0 w-64 h-full 
                   bg-gradient-to-b from-slate-900 to-teal-700 shadow-lg text-white"
      >
        <div className="p-6 border-b border-white/20">
          <h2 className="text-2xl font-bold">HR Mini</h2>
        </div>

        <div className="flex flex-col space-y-4 p-5">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className={`flex items-center px-4 py-3 rounded-xl font-semibold w-full
               transition-all duration-300 relative
               ${
                 isActive(item.path)
                   ? "bg-white/20 text-white shadow-md"
                   : "text-gray-300 hover:bg-white/10 hover:text-white"
               }`}
            >
              <span>{item.label}</span>

              {/* Active Indicator */}
              {isActive(item.path) && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 
                                bg-white rounded-r-full" />
              )}
            </button>
          ))}

           <button
        onClick={handleLogout}
        className="px-4 py-2 mt-40 w-30  text-white "
      >
        Logout
      </button>
        </div>
      </div>
    </>
  );
}
