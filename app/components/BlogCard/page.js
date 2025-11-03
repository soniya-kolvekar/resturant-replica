"use client";
import React from "react";
import SafeHydrate from "../SafeHydrate/page.js";

const BlogCard = ({ image, date, author, title, description, link }) => {
  return (
    <SafeHydrate>
            <div className="w-full bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-lg overflow-hidden mb-12 transition-all duration-300 hover:shadow-2xl">
      
      <img
        src={image}
        alt={title}
        className="w-full h-[320px] sm:h-[380px] object-cover"
      />
      <div className="p-6 sm:p-10">
        <div className="flex items-center gap-6 text-[#A0845F] text-sm mb-3">
          <div className="flex items-center gap-2">
            <span>📅</span>
            <p>{date}</p>
          </div>
          <div className="flex items-center gap-2">
            <span>👤</span>
            <p>{author}</p>
          </div>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold font-['Cormorant Garamond'] text-black dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
          {description}
        </p>
        <a
          href={link}
          className="inline-block bg-[#A0845F] text-white text-sm sm:text-base font-semibold py-3 px-8 rounded-full hover:bg-[#8B735C] transition duration-300"
        >
          Read More
        </a>
      </div>
    </div>
    </SafeHydrate>
  );
};

export default BlogCard;
