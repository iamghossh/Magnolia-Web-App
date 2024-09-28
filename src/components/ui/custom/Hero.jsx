import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[60px] text-center mt-24'><span className='text-[#0A5977]'>Discover Your Next Adventure with AI</span>: Personalized Itineraries at your Fingertips</h1>
      <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel curator,creating custom itineraries tailored to your interests and budget</p>

      <Link to={'/create-trip'}>
        <Button variant="destructive">Get Started, its Free </Button>
      </Link>

      <img src='/Germany.jpg' className='-mt-30 rounded-xl border'/>
    </div>
  )
}

export default Hero
