import React from 'react'

export default function Attendancetable () {

    const data = [
        { name: 'Alice Johnson', time: '08:00 AM', status: 'In', department: 'Sales' },
        { name: 'Bob Williams', time: '09:05 AM', status: 'Late', department: 'Marketing' },
        { name: 'Charlie Brown', time: '08:30 AM', status: 'In', department: 'HR' },
        { name: 'Dana Lee', time: '04:15 PM', status: 'Out', department: 'Engineering' },
        { name: 'Eve Davis', time: '08:00 AM', status: 'In', department: 'Sales' },
    ];

    const getStatusClass = (status) => {
        if (status === 'In' || status === 'Out') return 'bg-emerald-100 text-emerald-800';
        if (status === 'Late') return 'bg-amber-100 text-amber-800';
        return 'bg-slate-100 text-slate-800';
    };


  return (
    <>
    
     <div className="bg-teal-50  rounded-2xl shadow-xl md:max-w-5xl m-auto">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                    <thead>
                        <tr className="text-left text-sm font-semibold text-slate-500 uppercase tracking-wider bg-slate-50">
                            <th className="px-4 py-3 rounded-tl-xl">Employee</th>
                            <th className="px-4 py-3">Time</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3 rounded-tr-xl">Department</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {data.map((row, index) => (
                            <tr key={index} className="text-slate-700 hover:bg-slate-50 transition-colors">
                                <td className="px-4 py-4 whitespace-nowrap font-medium">{row.name}</td>
                                <td className="px-4 py-4 whitespace-nowrap">{row.time}</td>
                                <td className="px-4 py-4 whitespace-nowrap">
                                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusClass(row.status)}`}>
                                        {row.status}
                                    </span>
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-500">{row.department}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center mt-6">
                <button className="text-sm font-medium text-teal-600 hover:text-teal-800 transition-colors">
                    View Full Attendance Log &rarr;
                </button>
            </div>
        </div></>
  )
}
