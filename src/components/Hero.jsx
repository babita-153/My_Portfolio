import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import {MoveRight} from 'lucide-react'
import { useNavigate } from 'react-router'
const Hero = () => {
  let navigate=useNavigate()
let tl=gsap.timeline()
   useGSAP(()=>{
      tl.from(".left",{
        opacity:0,
        y:-40,
       duration:2,
       delay:1,
       stagger:0.3  
      })
      gsap.from(".right",{
        opacity:0,
        duration:2,
        y:-40,
        delay:1
      })
    })
  return (
    <div className='flex p-10 justify-between gap-10 w-full'>
      <div className="left flex text-left items-center w-[90%]  justify-center flex-col gap-3 ">
        <div className='leftup flex flex-col gap-2'>
           <h1 className='heroHeading text-8xl font-semibold'>Hii, I'm 
            Babita Patel </h1>
            <p className='text-3xl font-semibold text-left'>I turn ideas into meaningful digital experiences.</p>
        </div>
            <div className='leftdown flex flex-col gap-4'>
               <p className='text-lg'>I'm developer passionate about creating work that is thoughtful,purposeful, and visually engaging.</p>
            <div className='flex gap-5'>
              <button
            onClick={()=>{
              navigate('/project')
            }}
            className='px-4 py-2 font-semibold hover:bg-[#723EC3] hover:scale-90 text-lg w-fit rounded border flex items-center gap-2'>Explore my work <MoveRight /></button>
            <button
            onClick={()=>{
              navigate('/about')
            }}
            className='px-4 py-2 font-semibold hover:bg-[#723EC3] hover:scale-90 text-lg w-fit rounded border flex items-center gap-2'>About me <MoveRight /></button>
            </div>
            </div>
      </div>
      <div className="right w-[60%]  items-center  justify-center p-10 ">
        <img className='border rounded-full h-100 w-100 object-fit' src="https://i.imgur.com/IAfG99G.jpeg" alt="" />
      </div>
    </div>
  )
}

export default Hero
