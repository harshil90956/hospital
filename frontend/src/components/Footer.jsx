import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* Logo + About */}
        <div>
          <p 
            onClick={() => navigate('/')} 
            className="w-44 cursor-pointer font-bold text-2xl text-blue-600"
          >
            Physio Connect
          </p>
          <p className='w-full md:w-2/3 text-gray-600 leading-6 mt-3'>
            Physio Connect is your trusted partner in physiotherapy care. 
            From pain relief to long-term rehabilitation, we make expert 
            treatment accessible and convenient — helping you move better, 
            recover faster, and live stronger.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600 cursor-pointer'>
            <li onClick={() => navigate('/')}>Home</li>
            <li onClick={() => navigate('/about')}>About Us</li>
            <li onClick={() => navigate('/services')}>Services</li>
            <li onClick={() => navigate('/privacy-policy')}>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91-98765-43210</li>
            <li>support@physioconnect.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          © {new Date().getFullYear()} Physio Connect — All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
