import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Contact Info */}
        <div className="md: col-span-2">
          <h2 className="text-xl font-bold mb-3">ElectroSavvy</h2>
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
          <div className="flex space-x-4">
            <FaFacebookF />
            <FaTwitter />
            <FaWhatsapp />
            <FaYoutube />
          </div>
        </div>

        {/* Discover Section */}
        <div>
          <h3 className="font-bold mb-2">DISCOVER</h3>
          <ul className="space-y-2">
            <li>About</li>
            <li>Blog</li>
            <li>Offers</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="font-bold mb-2">SERVICES</h3>
          <ul className="space-y-2">
            <li>Body Care</li>
            <li>Hair Care</li>
            <li>Packages</li>
            <li>Makeover</li>
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
