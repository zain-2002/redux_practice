'use client'
import { decre, incre } from '@/redux/cartslice';
import Image from 'next/image'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
export default function Home() {
  const dispatch=useDispatch();
  // const [val, setval] = useState(0)
  const stateval=useSelector((state)=>state.data)
  const handleadd=()=>{dispatch(incre(1))}
  const handlesub=()=>{dispatch(decre(1))}

  return (
 <>

    <h1 className='md:text-[38px]  text-[28px] font-bold text-white bg-gray-400 text-center'>Counter With Redux</h1>

 <div className='flex  justify-center items-center ' style={{height:'96vh'}}>
 <div class='flex flex-col md:flex-row gap-4 md:gap-10 md:w-6/12  sm:w-9/12  w-9/12 text-[40px] rounded-lg bg-gray-400 md:p-40 sm:p-20 p-6 h-2/4 shadow-lg border-2 border-black items-center text-white justify-center'>


<button className='border-2 border-white p-1 px-6  rounded' onClick={handleadd}>+</button>
<span>{stateval}</span>
<button className='border-2 border-white p-1 px-6 rounded' onClick={handlesub}>-</button>
  </div>

 </div>
 
 </>
  )
}
