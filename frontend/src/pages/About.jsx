import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="about physio" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>
            Welcome To <span className="font-semibold text-gray-800">Physio Connect</span>, 
            Your Trusted Partner In Restoring Mobility And Enhancing Quality Of Life. 
            We Understand How Challenging It Can Be To Deal With Pain, Injuries, Or Mobility Issues. 
            That’s Why We Are Dedicated To Bringing Expert Physiotherapy Care Online, Making It Easy 
            For You To Book Sessions And Manage Your Recovery From Home.
          </p>
          <p>
            At Physio Connect, We Are Committed To Excellence In Physiotherapy And Rehabilitation. 
            Our Platform Integrates The Latest Techniques And Tools To Deliver A Superior Experience 
            And Personalized Care. Whether You’re Recovering From An Injury, Managing A Chronic Condition, 
            Or Simply Aiming To Improve Your Physical Wellness, We Are Here To Support You Every Step Of The Way.
          </p>
          <b className='text-gray-800'>Our Vision</b>
          <p>
            Our Vision At Physio Connect Is To Create A Seamless Physiotherapy Experience For Every User. 
            We Aim To Bridge The Gap Between Patients And Physiotherapists, Making Professional Care 
            Accessible Anytime, Anywhere. With Innovation And Patient-Centered Care At The Core, 
            We Strive To Help You Regain Strength, Reduce Pain, And Live A Healthier, More Active Life.
          </p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EXPERT CARE:</b>
          <p>Qualified Physiotherapists Focused On Your Recovery And Well-Being.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE:</b>
          <p>Book Online Sessions And Manage Your Therapy From The Comfort Of Your Home.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZED PLANS:</b>
          <p>Treatment Programs Designed To Suit Your Specific Needs And Goals.</p>
        </div>
      </div>
    </div>
  )
}

export default About
