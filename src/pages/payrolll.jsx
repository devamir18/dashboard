import { useState } from "react";
import Sidebar from "../component/sidebar";

export default function Payroll() {
  const [totalHours, setTotalHours] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [bonus, setBonus] = useState("");
  const [deduction, setDeduction] = useState("");
  const [totalSalary, setTotalSalary] = useState(null);

  const calculateSalary = () => {
    const hours = Number(totalHours);
    const rate = Number(hourlyRate);
    const bon = Number(bonus || 0);
    const ded = Number(deduction || 0);
    const result = hours * rate + bon - ded;
    setTotalSalary(result);
  };

  return (
    <div className="flex">
      <Sidebar />

      {/* Main Container */}
      <div className="flex-1 p-8">
        <div className="max-w-lg mx-auto bg-gradient-to-br from-slate-50 to-teal-50 
                        shadow-xl rounded-2xl p-8 border border-slate-200">

          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Payroll Salary Calculator
          </h2>

          <div className="flex flex-col gap-4">

            <input
              type="number"
              placeholder="Total Hours Worked"
              className="border border-slate-300 rounded-lg p-3 focus:outline-none 
                         focus:ring-2 focus:ring-teal-300 bg-white shadow-sm"
              value={totalHours}
              onChange={(e) => setTotalHours(e.target.value)}
            />

            <input
              type="number"
              placeholder="Hourly Rate"
              className="border border-slate-300 rounded-lg p-3 focus:outline-none 
                         focus:ring-2 focus:ring-teal-300 bg-white shadow-sm"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
            />

            <input
              type="number"
              placeholder="Bonus"
              className="border border-slate-300 rounded-lg p-3 focus:outline-none 
                         focus:ring-2 focus:ring-teal-300 bg-white shadow-sm"
              value={bonus}
              onChange={(e) => setBonus(e.target.value)}
            />

            <input
              type="number"
              placeholder="Deduction"
              className="border border-slate-300 rounded-lg p-3 focus:outline-none 
                         focus:ring-2 focus:ring-teal-300 bg-white shadow-sm"
              value={deduction}
              onChange={(e) => setDeduction(e.target.value)}
            />

            <button
              className="w-full bg-teal-600 text-white py-3 rounded-xl font-semibold 
                         hover:bg-teal-700 hover:scale-[1.02] transition-all shadow-md"
              onClick={calculateSalary}
            >
              Calculate Salary
            </button>

            {totalSalary !== null && (
              <div className="mt-4 text-lg text-center font-medium">
                <strong className="text-slate-700">Total Salary:</strong>{" "}
                <span className="text-green-600 font-bold">
                  ${totalSalary}
                </span>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
