"use client"
import React, { useState } from 'react'
import { RiArrowRightSLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

function Faq() {
  // State to track which item is open
  const [openIndex, setOpenIndex] = useState(null)

  const toggleItem = (index) => {
    // If the clicked item is already open, close it, otherwise open it
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="container mx-auto p-6">
          <h2 className="font-bold mb-4 text-center text-[#EB8D15]">Faq</h2>

      <h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {/* FAQ Item 1 */}
        <div className="border-b border-l shadow">
          <button
            className="w-full text-left py-3 px-4 font-semibold text-lg flex justify-between items-center"
            onClick={() => toggleItem(0)}
          >
            <span>What is Tailwind CSS?</span>
            {openIndex === 0 ? (
              <MdKeyboardArrowDown  className="h-5 w-5 text-gray-500" />
            ) : (
              <RiArrowRightSLine className="h-5 w-5 text-gray-500" />
            )}
          </button>
          {openIndex === 0 && (
            <div className="px-4 pb-4 text-gray-700">
              Tailwind CSS is a utility-first CSS framework for creating custom designs without writing custom CSS. You apply classes directly to elements to style them.
            </div>
          )}
        </div>

        {/* FAQ Item 2 */}
        <div className="border-b shadow border-l">
          <button
            className="w-full text-left py-3 px-4 font-semibold text-lg flex justify-between items-center"
            onClick={() => toggleItem(1)}
          >
            <span>How do I install Tailwind CSS?</span>
            {openIndex === 1 ? (
              <MdKeyboardArrowDown className="h-5 w-5 text-gray-500" />
            ) : (
              <RiArrowRightSLine className="h-5 w-5 text-gray-500" />
            )}
          </button>
          {openIndex === 1 && (
            <div className="px-4 pb-4 text-gray-700">
              To install Tailwind CSS, you can use npm or yarn in your project and follow the official installation guide on their website.
            </div>
          )}
        </div>

        {/* FAQ Item 3 */}
        <div className="border-b shadow">
          <button
            className="w-full text-left py-3 px-4 font-semibold text-lg flex justify-between items-center"
            onClick={() => toggleItem(2)}
          >
            <span>Is Tailwind CSS easy to learn?</span>
            {openIndex === 2 ? (
              <MdKeyboardArrowDown className="h-5 w-5 text-gray-500" />
            ) : (
              <RiArrowRightSLine  className="h-5 w-5 text-gray-500" />
            )}
          </button>
          {openIndex === 2 && (
            <div className="px-4 pb-4 text-gray-700">
              Yes, Tailwind CSS is relatively easy to learn if you're familiar with HTML and CSS. It helps you create custom designs without the need to write a lot of custom CSS code.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Faq
