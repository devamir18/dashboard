import React, { useState } from 'react'
import Table from '../component/table' 
import { Link } from 'react-router-dom'
import Attendancetable from '../component/attendancetable'
import Payroll from '../component/payroll'


export default function Dashboard () {

    const [isModalOpen, setIsModalOpen] = useState(false);



     const cardItems = [
   {
    title:'Total Employees',
       value:'150',
      icon:(<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"/></svg>)
  
  },
     {
    title:'Present Today',
     value:'130',
   icon:(<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"/></svg>)
  
     },
     {
     title:'Hours Logged',
    value:'15',
    icon:(<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 4a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1"/></g></svg>)
  
   },
     {
     title:'Pending Payroll',
    value:'70 items',
    icon:(<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.861 22.317l3.041-12.48s.374-4.126 5.275-4.251c4.673-.12 8.43-.08 8.43-.08l-2.36 9.25c-.037.437-1.073 1.502-2.414 1.38c-1.497-.134-2.312-.661-2.207-1.65l.395-2.37c-.02 0 .097-.641-.518-.832c-.775-.24-1.12.716-1.12.716l-3.647 17.62l-9.75.077l-4.438-18.388l-5.668.012l-1.487-5.812h12.413zM12.775 42.5v-9.815h3.19c1.84 0 3.312 1.473 3.312 3.313s-1.473 3.312-3.313 3.312h-3.19m22.267-6.625l-3.189 4.908l-3.19-4.908m3.19 9.815v-4.907m-5.644 1.594h-4.416M20.688 42.5L24 32.685l3.312 9.815" stroke-width="1"/></svg>)
 
  },

   ]
           
 return (
        <>
         <div className='flex justify-between'>
           <div className='flex-1'>
            {/* <Sidebar/> */}
           </div>
<div className='w-full h-auto md:max-w-6xl bg-gradient-to-r from-slate-200 to-teal-50'>
            {/*Navbar */}
            <div className='w-full h-20 border-b-1 border-slate-300 flex justify-between'>
              <h2 className='mx-16 py-2 text-base  font-bold text-slate-800 font-sans md:text-2xl mt-6 px-5'>HR Dashboard Overview</h2>
              <div className='flex mx-4 items-center'>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='text-slate-800 size-6 mx-4 mt-4'><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/><path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.99 8.99 0 0 1 12.065 14a8.98 8.98 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.96 8.96 0 0 1-5.672-2.012A6.99 6.99 0 0 1 12.065 16a6.99 6.99 0 0 1 5.689 2.92A8.96 8.96 0 0 1 12 21"/></g></svg>
                
              </div>
         </div>
         {/* Main Content */}

                <div className='grid grid-cols-1 md:grid-cols-4 space-y-6 px-20 space-x-4 mt-6'> 
                   {cardItems.map((items)=>(
                   <div className='h-40 rounded-xl shadow-2xl hover:-translate-1 duration-300 px-12'>
                    <div className='flex justify-between'>
                      <span className='font-bold text-[#3A3A3A] font-serif px-4 py-3'>{items.title}</span>
                     <span className='text-slate-700 size-12 mt-3'>{items.icon}</span>
                   </div>
                      <h3 className='text-slate-800 font-semibold text-3xl mb-1 mx-4 py-2'>{items.value}</h3>
                      </div>


                ))}
             </div> 
                    <div className='grid grid-cols-1 h-auto space-y-4 md:grid-cols-2 '>
                      <div className='ml-12'>
                        <Payroll/>
                      </div>
                     <div className="w-auto h-85 rounded-2xl border border-slate-200 m-auto 
                bg-gradient-to-br from-slate-50 to-teal-50 
                p-8 flex flex-col justify-center items-center gap-6 shadow-lg ml-12">
                 <button className="w-72 h-14 rounded-xl bg-teal-500 text-white font-semibold 
                        shadow hover:bg-teal-600 hover:scale-[1.03] transition-all"
                         onClick={() => {
                    setIsModalOpen(true);
                  }}>
                  Add Staff
                 </button> 
                  <button className="w-72 h-14 rounded-xl bg-teal-500 text-white font-semibold 
                         shadow hover:bg-teal-600 hover:scale-[1.03] transition-all">
                       Edit Attendance
                              </button>
                            </div>
                    </div>
             {/* Table */}
               <div className='ml-13'>
          <Table/>
            </div>
           <div className='mt-12 ml-13'>
          <Attendancetable/></div> 
            {isModalOpen &&  (
        <div className="fixed inset-0 flex justify-center  items-center bg-black/65  bg-opacity-40">
          <div className="p-6 rounded-xl shadow-lg  bg-gradient-to-b from-slate-900 to-teal-700 w-100 h-100">
            <div className='flex justify-between'>
              <h2 className="text-2xl text-white font-bold px-3 "></h2>
              <button  onClick={() => setIsModalOpen(false)}>  <svg xmlns="http://www.w3.org/2000/svg" width="2048" height="2048" viewBox="0 0 2048 2048" className='size-4 text-white mt-3'><path fill="currentColor" d="m1115 1024l690 691l-90 90l-691-690l-691 690l-90-90l690-691l-690-691l90-90l691 690l691-690l90 90z"/></svg></button>
            </div>
            <div className='flex items-center'>
              <form>
                    <div className='h-auto mt-8'>
                      <p className='py-3 text-white texxt-xl font-semibold'>Staff iD</p>
                   <input type="staff" name="" id="" className='w-90 rounded h-10 bg-white/30 -mt-4' />   
                   </div>
                   <p className='py-2 text-white font-semibold'>Department</p>
                     <select className='w-90 h-10 rounded text-slate-800 font-semibold px-4 bg-white/30'>
                      <option value="">UI/UX Designer </option>
                         <option value="">Backend Engr</option>
                            <option value="">Software Engr</option>
                     </select>
                     <button className='w-90 h-10 bg-teal-500  mt-7 rounded font-semibold text-white'>Add</button>
              </form>
            </div>
            
          </div>
        </div>
      )}


         </div>
          </div>


     </>
    )
}