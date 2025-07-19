'use client';

import Image from 'next/image';
import ImageCarousel from './carousel';


interface HomeSectionProps {
  setActiveSection: React.Dispatch<React.SetStateAction<'home' | 'works' | 'articles' | 'whatido'>>;
}

export default function HomeSection({ setActiveSection }: HomeSectionProps) {
  return (
    <section className="px-4 py-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-4">Hello, I&apos;m Kene</h1>
          <p className="text-gray-600 mb-8">
            I specialize in building Power BI dashboards with ETL pipelines, capturing relevant KPIs and developing visually appealing dashboards and reports
          </p>
          <p className="text-gray-600 mb-8">
            I help you turn your data into insights and build Business Intelligent and Automation Solutions.
            Focused on delivering high impact solutions that enables Data-Driven Results.
          </p>
          <p className="text-gray-600 mb-8">
            My tools include Power BI, SQL, Python, API sources, Power Automate.
          </p>
        
        {/* Button - naturally left-aligned in flex-col layout */}
        <button
          className="bg-indigo-600 text-white px-6 py-2 rounded-md block"
          onClick={() => setActiveSection('works')}>
          View My Work
        </button>

        {/* Social Links - left aligned below button */}
        <div className="flex gap-4 mt-4">
          <a 
            href="mailto:benjohnokezie@gmail.com" 
            className="
              p-2 bg-white rounded-full shadow-md
              transition-all duration-300 ease-in-out
              hover:bg-indigo-100 hover:shadow-lg hover:-translate-y-0.5
              flex items-center justify-center
            "
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email">
            <Image 
              src="https://img.icons8.com/color/48/gmail-new.png" 
              alt="Email" 
              width={20}
              height={20}
              className="w-5 h-5"
              unoptimized
            />
          </a>
          <a 
            href="https://medium.com/@benjohnokezie" 
            className="
              p-2 bg-white rounded-full shadow-md
              transition-all duration-300 ease-in-out
              hover:bg-gray-100 hover:shadow-lg hover:-translate-y-0.5
              flex items-center justify-center
            " 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium">
            <Image 
              src="https://img.icons8.com/ios-filled/50/medium-logo.png" 
              alt="Medium" 
              width={20}
              height={20}
              className="w-5 h-5"
              unoptimized
            />
          </a>
          <a 
            href="https://www.tiktok.com/@toji6135" 
            className="
              p-2 bg-white rounded-full shadow-md
              transition-all duration-300 ease-in-out
              hover:bg-red-100 hover:shadow-lg hover:-translate-y-0.5
              flex items-center justify-center
            " 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube">
            <Image 
              src="https://img.icons8.com/color/48/tiktok--v1.png" 
              alt="TikTok" 
              width={20}
              height={20}
              className="w-5 h-5"
              unoptimized
            />
          </a>
        </div>
        
        <ImageCarousel />

      </div>
</section>
  );
}
