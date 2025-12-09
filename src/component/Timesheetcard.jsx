import { useState } from "react";


const staffList = ["Musa", "Bobby", "Dev"];

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function WeeklyTimesheet() {
  // attendanceData: { [staff]: { [day]: { start, end, hours } } }
  const [attendanceData, setAttendanceData] = useState({});

  const handleInputChange = (staff, day, field, value) => {
    setAttendanceData((prev) => ({
      ...prev,
      [staff]: {
        ...prev[staff],
        [day]: {
          ...((prev[staff] && prev[staff][day]) || {}),
          [field]: value,
          hours:
            field === "end" &&
            prev[staff] &&
            prev[staff][day] &&
            prev[staff][day].start
              ? calculateHours(prev[staff][day].start, value)
              : field === "start" &&
                prev[staff] &&
                prev[staff][day] &&
                prev[staff][day].end
              ? calculateHours(value, prev[staff][day].end)
              : 0,
        },
      },
    }));
  };

  const calculateHours = (start, end) => {
    if (!start || !end) return 0;
    const s = new Date(`2024-01-01 ${start}`);
    const e = new Date(`2024-01-01 ${end}`);
    const diff = (e - s) / (1000 * 60 * 60);
    return diff > 0 ? diff.toFixed(2) : 0;
  };

  const getTotalHours = (staff) => {
    const staffDays = attendanceData[staff] || {};
    return weekdays.reduce((total, day) => total + (staffDays[day]?.hours || 0), 0).toFixed(2);
  };

  return (
    <div className="md:max-w-5xl ml-65">
      <h2 className="text-xl font-bold mb-4">Weekly Timesheet</h2>
      <table className="w-full border">
        <thead className="bg-[#D4A75F]">
          <tr>
            <th className="border border-gray-300 p-2">Staff</th>
            {weekdays.map((day) => (
              <th key={day} className="border border-gray-300  p-2">{day}</th>
            ))}
            <th className="border border-gray-300 p-2">Total Hours</th>
          </tr>
        </thead>
        <tbody>
          {staffList.map((staff) => (
            <tr key={staff}>
              <td className="border border-gray-300 p-2 font-semibold">{staff}</td>
              {weekdays.map((day) => {
                const dayData = attendanceData[staff]?.[day] || {};
                const missing = !dayData.start || !dayData.end;
                return (
                  <td
                    key={day}
                    className={`border border-gray-300 p-1 ${missing ? "bg-red-100" : "bg-green-100"}`}
                  >
                    <input
                      type="time"
                      value={dayData.start || ""}
                      onChange={(e) => handleInputChange(staff, day, "start", e.target.value)}
                      className="w-full text-sm mb-1 border p-1"
                    />
                    <input
                      type="time"
                      value={dayData.end || ""}
                      onChange={(e) => handleInputChange(staff, day, "end", e.target.value)}
                      className="w-full text-sm border p-1"
                    />
                    <div className="text-xs text-center">{dayData.hours || 0}h</div>
                  </td>
                );
              })}
              <td className="border border-gray-300  p-2 text-center font-semibold">{getTotalHours(staff)}h</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-sm text-gray-600">
        <span className="bg-red-100 px-1">Red</span> = Missing / incomplete logs,{" "}
        <span className="bg-green-100 px-1">Green</span> = Complete logs
      </p>
    </div>
  );
}
