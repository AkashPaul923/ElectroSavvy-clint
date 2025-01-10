import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" py-10 px-5 bg-base-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Contact Info */}
        <div className="md: col-span-2">
          <div className="flex r gap-2">
            <img className="h-7" src={logo} alt="logo" />
            <h2 className="text-xl font-bold mb-3">ElectroSavvy</h2>
          </div>
          <p className="mb-2">
            <span className="font-semibold">Phone:</span> +880 9613224433, +880 9638224433
          </p>
          <p className="mb-2">
            <span className="font-semibold">Email:</span> support@electrosavvy.com.bd
          </p>
          <p className="mb-3">
            <span className="font-semibold">Address:</span> House# 1263, Road# 10, Avenue# 02,
            Mirpur DOHS, Dhaka, Bangladesh
          </p>
          <div className="flex space-x-4 text-3xl">
            <FaFacebookF className='text-blue-600 hover:text-blue-700' />
            <FaTwitter className='text-blue-400 hover:text-blue-500' />
            <FaWhatsapp className='text-green-600 hover:text-green-700' />
            <FaYoutube className='text-red-600 hover:text-red-700' />
          </div>
        </div>

        {/* Discover Section */}
        <div>
          <h3 className="font-bold mb-2">DISCOVER</h3>
          <ul className="space-y-2">
            <li><Link to='/booked-services'>Booked Services</Link></li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="font-bold mb-2">SERVICES</h3>
          <ul className="space-y-2">
            <li><Link to='/add-service'>Add Service</Link></li>
            <li><Link to='/manage-services'>Manage Services</Link></li>
            <li><Link to='/service-to-do'>Service To Do</Link></li>
          </ul>
        </div>
      </div>

      
      <div className="mt-8 border-t pt-5 text-center">
        <p className="text-sm text-gray-500">
          Copyright © 2024 ElectroSavvy. All rights reserved.
        </p>
        <p className="text-sm text-gray-500">
          <a  className="link">Privacy Policy</a> | <a  className="link">FAQs</a> | <a  className="link">Terms of Service</a> | <a className="link">Order Cancellation</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
