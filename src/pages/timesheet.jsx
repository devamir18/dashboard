import React from "react";
import Sidebar from "../component/sidebar";

const Timesheet = () => {
  const weekData = [
    { day: "Mon", in: "09:10", out: "17:00" },
    { day: "Tue", in: "", out: "" },
    { day: "Wed", in: "09:00", out: "17:00" },
    { day: "Thu", in: "08:55", out: "16:30" },
    { day: "Fri", in: "09:00", out: "" },
    { day: "Sat", in: "", out: "" },
    { day: "Sun", in: "", out: "" },
  ];

  
  const isLate = (time) => time && time > "09:00";
  const isEarly = (time) => time && time < "17:00";

  return (
    <>
      <div>
        <Sidebar />
      </div>

      <div className="w-full h-screen md:max-w-6xl bg-white float-right p-6">
        <h2 className="text-2xl font-bold mb-4 px-14 text-slate-800">Weekly Timesheet</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-12 mt-12">
          {weekData.map((item, index) => {
            const missing = item.in === "" && item.out === "";
            return (
              <div
                key={index}
                className="p-4 border border-slate-300 rounded-xl bg-slate-50 shadow-sm hover:scale-105 duration-300 transform transition-all"
              >
                <h3 className="text-lg font-semibold mb-2 text-slate-800">{item.day}</h3>

              
                <p
                  className={`text-sm font-medium ${
                    missing
                      ? "text-gray-400"
                      : isLate(item.in)
                      ? "text-red-500"
                      : "text-green-700"
                  }`}
                >
                  Check In: {item.in || "Missing"}
                </p>

              
                <p
                  className={`text-sm font-medium ${
                    missing
                      ? "text-gray-400"
                      : isEarly(item.out) && item.out !== ""
                      ? "text-orange-500"
                      : "text-green-700"
                  }`}
                >
                  Check Out: {item.out || "Missing"}
                </p>

                <div className="mt-3 text-xs font-bold">
                  {missing && (
                    <span className="text-gray-500">No entry</span>
                  )}
                  {isLate(item.in) && !missing && (
                    <span className="text-red-500">Late Check-In</span>
                  )}
                  {isEarly(item.out) && item.out !== "" && (
                    <span className="text-orange-500 block">
                      Early Check-Out
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Timesheet;
