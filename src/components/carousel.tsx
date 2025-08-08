import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from "next/link";

const ImageCarousel = () => {
  // Sample images - replace with your actual images
    const images = [
      {src: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*TVC1cdWRmEJezM9a-JbMcQ.png", title: "Financial Report Automation with Power BI and Power Automate", link: "https://drive.google.com/drive/folders/1goRRhrdDezVseJx_UNPD82LEjn-idkcg?usp=drive_link"},
      {src: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*MD08l6pLVJyWDMN09HichQ.jpeg", title: "Crypto Data Analysis from Coingecko API", link: "https://drive.google.com/drive/folders/1IfRGke7NlyigE0zUVfp_HF9yAkVEFeMB?usp=drive_link"},
      {src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop", title: "", link: ""},
      {src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=400&fit=crop", title: "", link: ""}
    ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
        <p className="font-bold mb-4">My Works</p>
      <div 
        className="relative w-full h-93 bg-gray-100 rounded-xl border-4 border-indigo-600 overflow-hidden group"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Image container */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full h-[250] flex-shrink-0 relative">
              <Image 
                    src={image.src}
                    alt={image.title}
                    width={10}
                    height={8}
                    className="w-full h-full object-cover"
                    unoptimized
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-sm md:text-lg p-2">
                  <Link href={image.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {image.title}
                  </Link>
                </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-indigo-600 scale-110' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="absolute top-4 right-4">
          <div className={`w-3 h-3 rounded-full ${isAutoPlaying ? 'bg-green-500' : 'bg-gray-400'} animate-pulse`} />
        </div>
      </div>

      {/* Controls */}
      {/* <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
        >
          {isAutoPlaying ? 'Pause' : 'Play'}
        </button>
      </div> */}
    </div>
  );
};

export default ImageCarousel;