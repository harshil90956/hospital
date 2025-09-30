import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      {/* Header */}
      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      {/* Contact Section */}
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="Contact Physio Connect" />
        
        <div className='flex flex-col justify-center items-start gap-6'>
          {/* Office Info */}
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'>
            123 Physiotherapy Street <br />
            Suite 101, Your City, Country
          </p>
          <p className='text-gray-500'>
            Tel: +91-98765-43210 <br />
            Email: support@physioconnect.com
          </p>

          {/* Careers Section */}
          <p className='font-semibold text-lg text-gray-600'>CAREERS AT PHYSIO CONNECT</p>
          <p className='text-gray-500'>Join our team of dedicated physiotherapists and healthcare professionals. Explore opportunities to make a real impact on patients' lives.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
            Explore Jobs
          </button>
        </div>
      </div>

    </div>
  )
}

export default Contact
