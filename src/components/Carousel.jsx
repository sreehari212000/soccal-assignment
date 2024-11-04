// src/Carousel.js
import React, { useState } from 'react';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";



const IMAGES = ["https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg", "https://assets-in.bmscdn.com/promotions/cms/creatives/1730297705769_maroon51240x300a.jpg", "https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg"]


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + IMAGES.length) % IMAGES.length);
  };

  return (
    <div className="relative w-full overflow-hidden  mx-auto mt-2 mb-4">
      <div className="rounded-lg w-full">
        <div
          className="flex w-2/3 transition-transform duration-500 "
          style={{ transform: `translateX(-${currentIndex * 80}%)` }}
        >
          {IMAGES.map((item, index) => (
            <div key={index} className="min-w-full rounded-md overflow-hidden mx-1">
              <img src={item} alt={"sample"} className="w h-auto" />
            </div>
          ))}
        </div>
      </div>
      <button onClick={prevSlide} className="absolute left-0 lg:left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-55 text-white p-2 rounded-lg">
        <FaChevronLeft />
      </button>
      <button onClick={nextSlide} className="absolute right-0 lg:right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-55 text-white p-2 rounded-lg">
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Carousel;