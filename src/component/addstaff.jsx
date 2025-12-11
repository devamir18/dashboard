import React from 'react'
import Sidebar from './Sidebar'

export default function Addstaff () {
  return(
    <>
    <div className='h-screen relative '>
        <div className='flex justify-center items-center z-9999 fixed'>
            <div className='absolute w-90 h-100 bg-slate-800 backdrop-blur-sm top-30 flex rounded-2xl'>
                   <form>
                    {/* <h2 className='text-xl font-bold  text-slate-900 '>Coresystem</h2> */}
                      <div className='mt-12 mx-4 flex flex-col'>
                        <span className='font-semibold text-white'>Name:</span>
                         <input type="text" className='w-80 h-10 rounded bg-white/95 border-0 border-slate-700 backdrop-blur-xl'/>
                      </div>
                      <div className='flex justify-between'>
                        <span className='mx-4 font-semibold py-1 text-white'>Dept:</span>
                         <span className='mx-30 font-semibold py-1 text-white'>Role:</span>

                      </div>
                      <div className='flex justify-between  gap-6 mt-4 mx-2'>
                        <select className='w-40 h-10 bg-teal-100 text-slate-900 font-semibold rounded'>
                            <option>Engineering</option>
                            <option >Computer Science</option>
                        </select>
                         <select className='w-40 h-10 bg-teal-100 text-slate-900 font-semibold rounded'>
                            <option>Developer</option>
                            <option>Designer</option>
                        </select>
                      </div>
                      <div className='mt-6 mx-2 flex flex-col'>
                        <span className='text-white font-semibold '>Staff Id:</span>
                            <input type="text" name="" id="" placeholder='Staff id' className='w-80 px-4 h-10 rounded bg-white/95 border-0 border-slate-700 backdrop-blur-xl'/>
                            
                        </div>
                       <div className='flex justify-center items-center'>
                         <button className='w-70 h-10 m-aut mt-6 bg-teal-100 rounded font-semibold hover:scale-95'>Submit</button>
                       </div>

                   </form>
            </div>

        </div>

    </div>
    
    </>
  )

}
