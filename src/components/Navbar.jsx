import React from 'react'
import { NavLink } from 'react-router'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
const Navbar = () => {
  var tl=gsap.timeline();
  useGSAP(()=>{
    tl.from(".NavH",{
      opacity:0,
      y:-30,
      duration:1,
      delay:0.1
    })
    tl.from(".link",{
      opacity:0,
      duration:1,
      delay:0.5,
      y:-30,
      stagger:0.3
    })
  })
  
  return (
    <div className='flex justify-between bg-black px-8 py-5 border z-50 sticky top-0 border-b-[#723EC3] bg-black'>
    <h1 className='NavH text-3xl font-semibold text-white'>Babita Portfolio</h1>
    <div className='flex gap-10 text-xl text-white cursor-pointer'>
        <NavLink className={"link"}  to={'/'}>Home</NavLink>
        <NavLink className={"link"} to={'about'}>About</NavLink>
        <NavLink className={"link"}  to={'project'}>Projects</NavLink>
    </div>
    </div>
  )
}

export default Navbar
