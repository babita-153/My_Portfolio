import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
const ProjectPage = () => {

useGSAP(()=>{
  gsap.from(".container",{
     opacity:0,
      y:-100,
      duration:1.5,
      delay:0.2
  })
   
})


  return (
   <div className='p-5'>
    <h1 className='text-3xl text-white font-semibold'>Projects</h1>
    <div class=" container p-20 grid grid-cols-1 gap-10 sm:grid-cols-1 lg:grid-cols-2">

  <div class="first group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
    <div class="h-40 overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600">
      <img src="https://i.imgur.com/oC04jnK.png" className='h-full w-full' alt="" />
    </div>

    <div class="p-5">
      <span class="text-md font-medium text-blue-600">Web Development</span>

      <h3 class="mt-2 text-xl font-bold text-gray-900">
        Portfolio Website
      </h3>

      <p class="mt-2 text-sm leading-6 text-gray-500">
        A modern responsive portfolio website built with Tailwind CSS.
      </p>

      <a href="http://localhost:5173/"
        class="mt-4 inline-block text-sm font-semibold text-gray-900 hover:text-blue-600">
        View Project →
      </a>
    </div>
  </div>


  <div class="second group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
    <div class="overflow-hidden h-40 bg-gradient-to-br from-purple-500 to-pink-500">
      <img src="https://i.imgur.com/wEr2pFE.png" className='h-full w-full' alt="" />
    </div>

    <div class="p-5">
      <span class="text-md font-medium text-purple-600">React Js</span>

      <h3 class="mt-2 text-xl font-bold text-gray-900">
         Recipe Hub
      </h3>

      <p class="mt-2 text-sm leading-6 text-gray-500">
        Clean and modern shopping interface designed for better UX.
      </p>

      <a href="https://recipe-hub-bmpt.vercel.app/"
        class="mt-4 inline-block text-sm font-semibold text-gray-900 hover:text-purple-600">
        View Project →
      </a>
    </div>
  </div>


  <div class="third group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
    <div class="h-40 overflow-hidden bg-gradient-to-br from-emerald-400 to-cyan-600">
      <img className='h-full w-full ' src="https://i.imgur.com/tJrX5bV.png" alt="" />
    </div>

    <div class="p-5">
      <span class="text-md font-medium text-emerald-600">React JS</span>

      <h3 class="mt-2 text-xl font-bold text-gray-900">
        SkyMart App
      </h3>

      <p class="mt-2 text-sm leading-6 text-gray-500">
        Responsive dashboard with charts, statistics and interactive UI.
      </p>

      <a href="https://sky-mart-oa9s.vercel.app/"
        class="mt-4 inline-block text-sm font-semibold text-gray-900 hover:text-emerald-600">
        View Project →
      </a>
    </div>
  </div>


  <div class="fourth group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
    <div class="overflow-hidden h-40 bg-gradient-to-br from-orange-400 to-red-500">
      <img className='h-full w-full' src="https://i.imgur.com/iVk21Cf.png" alt="" />
    </div>

    <div class="p-5">
      <span class="text-md font-medium text-orange-600">JavaScript</span>

      <h3 class="mt-2 text-xl font-bold text-gray-900">
        Productivity Dashboard
      </h3>

      <p class="mt-2 text-sm leading-6 text-gray-500">
        Weather application using API with a simple and responsive design.
      </p>

      <a href="https://productivity-dashboard-gray-psi.vercel.app/"
        class="mt-4 inline-block text-sm font-semibold text-gray-900 hover:text-orange-600">
        View Project →
      </a>
    </div>
  </div>

</div>
   
   </div>
  )
}

export default ProjectPage
