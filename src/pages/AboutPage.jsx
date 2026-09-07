import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
const SkillPage = () => {
let tl=gsap.timeline();
useGSAP(()=>{
  tl.from(".headText",{
    y:-30,
    opacity:0,
    duration:1.5,
    delay:0.5
  })
  
})
  return (
    <div className='text-white py-10 px-25 flex flex-col gap-10'>
    <div className="about">
        <h1 className='headText text-2xl text-center font-bold text-[#8b55e2]'>A Little About Who I Am</h1>
        <h1 className='text-4xl mt-10'>Hi, I’m Babita Patel</h1>
        <p className='mt-5 text-xl'>
           — a passionate Full-Stack Developer who enjoys turning ideas into meaningful digital experiences.
        </p>

<p className='text-md'>I’m curious by nature and love exploring how technology can solve real-world problems. My journey in technology started with a simple interest in web development, which gradually grew into a passion for building projects and learning new technologies.</p>

<p className='text-md'>I believe that great work comes from combining creativity, technical knowledge, and continuous learning.</p>
<div className='mt-10 flex flex-col gap-2'>
  <h2 className='text-2xl font-bold'>What Drives Me</h2>
<h3 className='text-xl'>“Stay curious. Keep learning. Keep building.”</h3>

<p>I’m always looking for opportunities to learn, collaborate, and work on challenging projects that push me beyond my comfort zone.</p>

<h3 className='text-xl font-bold'>Let’s Build Something Great Together.</h3>
</div>
    </div>
    <div className='skill flex flex-col gap-5'>
       <h1 className='text-3xl text-[#723EC3] font-bold'>Skills</h1>
       <h3 className='text-xl'>Turning Ideas Into Digital Experiences</h3>
       <p className='text-md'>I’m passionate about building clean, responsive, and user-focused digital experiences. I combine technical knowledge with creative problem-solving to develop solutions that are functional, scalable, and easy to use.</p>
       <h1 className='text-3xl text-[#723EC3] font-bold'>
        Technical Skills
       </h1>
       <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-5'>
          <h1 className='text-2xl underline'>Frontend Development</h1>
          <p>
            I build responsive and interactive interfaces with a strong focus on usability, performance, and clean design.
          </p>

          <ul className='list-disc'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScrip</li>
            <li>React.js</li>
            <li>Responsive Design</li>
            <li>UI Development</li>
          </ul>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-2xl underline'>Backend Development</h1>
           <p>I develop reliable server-side applications and APIs that connect seamlessly with modern frontend applications.</p>
           <ul className='list-disc'>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>REST APIs</li>
           </ul>
        </div>
        <div className='flex flex-col gap-5'>
         <h1 className='text-2xl underline'>Database</h1>
         <p>
          I work with databases to efficiently store, manage, and retrieve application data.
         </p>
        <ul className='list-disc'>
          <li>MongoDB</li>
          <li>Database Design</li>
          <li>CRUD Operations</li>
        </ul>
        </div>
       </div>
       <h1 className='text-3xl text-[#723EC3] font-bold underline'>Tools & Technologies</h1>
       <div className='flex flex-col'>
        <ul className='list-disc'>
          <li>Git & GitHub</li>
          <li>VS Code</li>
        </ul>
       </div>
       <h1 className='text-3xl text-[#723EC3] font-bold'>Soft Skills</h1>
        
        <ul className='list-disc'>
          <li>Problem Solving — Breaking complex problems into practical solutions.</li>
          <li>Creative Thinking — Finding simple and effective approaches to challenges.</li>
          <li>Teamwork — Collaborating effectively and sharing ideas.</li>
          <li>Communication — Clearly expressing technical and creative concepts.</li>
        </ul>
       
    </div>

    </div>
  )
}

export default SkillPage
