import React, { useState } from 'react'

export default function Table () {
    const [show,setShow] = useState(false);

    const Staffs =[
        { Id:'1', name:'Ada Iyang',Department:'Engineering', Role:'Frontend Developer',Rate:'4500',Status:'active' },
        { name:'Mr James',Department:'Computer science', Role:'Backend Developer',Rate:'300',Status:'active'},
        { name:'Dev moses',Department:'Engineering', Role:'Ui/Ux Designer',Rate:'300',Status:'active'},
        { name:'Mr Doe',Department:'Computer science', Role:'Mobile App',Rate:'300',Status:'active'},    
    ]


  return (
    <>
    <div className='rounded-2xl shadow-xl md:max-w-5xl m-auto'>
      <div className='overflow-x-auto p-4'>
        <table className='w-full  rounded-xl divide-y divide-slate-300'>
       <thead className=" text-slate-800 rounded-3xl">
        <tr className='font-semibold '>
          <th className=" p-2">Name </th>
          <th className="">Department</th>
          <th className="">Role</th>
          <th className="">Rate</th>
          <th className="">Status</th>
        </tr>
      </thead> 
    

      <tbody className='divide-y divide-slate-200'>
        {Staffs.map((s) => (
          <tr key={s.Id}  className="text-center  text-slate-500 font-san ">
            <td className='px-4 py-4 whitespace-nowrap font-medium'>{s.name}</td>
            <td>{s.Department}</td>
            <td>{s.Role}</td>
            <td>{s.Rate}</td>
            <td>{s.Status}</td>
             {/* <button className='hover:scale-90' onClick={()=>setShow(true)}>View</button> */}
          </tr>
        ))}
      </tbody>
    </table>
       {show &&(
        <div className='w-full h-full bg-amber-50 relative'>
            <div className='absolute w-40 h-40 bg-amber-500'>

            </div>

        </div>
       )}
    </div>
    </div>

    </>
  )
}
