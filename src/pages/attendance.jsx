import { useState } from "react";
import Sidebar from "../component/sidebar";

export default function Attendance() {
  const [records, setRecords] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [filter, setFilter] = useState("all");

  const calcHours = (inTime, outTime) => {
    const start = new Date(`2024-01-01 ${inTime}`);
    const end = new Date(`2024-01-01 ${outTime}`);
    const diff = (end - start) / (1000 * 60 * 60);
    return diff > 0 ? diff.toFixed(2) : 0;
  };

  const addRecord = () => {
    if (!name || !date || !checkIn || !checkOut) {
      alert("All fields required");
      return;
    }

    const hoursWorked = calcHours(checkIn, checkOut);

    setRecords([
      ...records,
      { name, date, checkIn, checkOut, hoursWorked }
    ]);

    
    setName("");
    setDate("");
    setCheckIn("");
    setCheckOut("");
  };

  const filterRecords = () => {
    const now = new Date();

    if (filter === "week") {
      return records.filter((r) => {
        const d = new Date(r.date);
        const diff = (now - d) / (1000 * 60 * 60 * 24);
        return diff <= 7;
      });
    }

    if (filter === "month") {
      return records.filter((r) => {
        const d = new Date(r.date);
        return d.getMonth() === now.getMonth();
      });
    }

    return records;
  };

  const filteredData = filterRecords();

  return (
    <>
    <div>
      <div className='flex-1'>
               <Sidebar/>
              </div>
    <div className="w-full h-screen md:max-w-6xl float-right bg-teal-50 ">
      <h2 className="text-xl font-bold mb- mx-16 py-6">Attendance Module</h2>

     
      <div className="grid grid-cols-2 gap-3 mb-6  mx-16">
        <input
          className="border border-slate-200 rounded p-2"
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-2 border-slate-200 rounded"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          className="border p-2 border-slate-200 rounded"
          type="time"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />

        <input
          className="border p-2 border-slate-200 rounded"
          type="time"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>

      <button
        onClick={addRecord}
        className="bg-teal-400 text-white px-4 font-semibold py-2 rounded mx-16"
      >
        Add Attendance Record
      </button>

      
      <div className="mt-4 mx-16 ">
        <select
          className="border p-2 border-slate-200 rounded font-semibold text-slate-600"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
        </select>
      </div>
      

       <div className="rounded-t-2xl shadow-2xl w-full md:max-w-5xl mt-6 mx-auto ">
      <table className="w-full md:max-w-5xl mx-auto">
        <thead>
          <tr className="">
            <th className="p-2">Name</th>
            <th className="p-2">Date</th>
            <th className="p-2">Check In</th>
            <th className="p-2">Check Out</th>
            <th className="p-2">Hours Worked</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((record, index) => (
            <tr key={index} > 
              <td className="p-2">{record.name}</td>
              <td className="p-2">{record.date}</td>
              <td className="p-2">{record.checkIn}</td>
              <td className="p-2">{record.checkOut}</td>
              <td className="p-2">{record.hoursWorked}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    </div>
    </>
  );
}
