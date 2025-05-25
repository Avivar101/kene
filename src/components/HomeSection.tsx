'use client';

import Image from 'next/image';

interface HomeSectionProps {
  setActiveSection: React.Dispatch<React.SetStateAction<'home' | 'works' | 'articles' | 'whatido'>>;
}

export default function HomeSection({ setActiveSection }: HomeSectionProps) {
  return (
    <section className="px-4 py-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-4">Hello, I&apos;m Kene</h1>
          <p className="text-gray-600 mb-8">
            A data professional specializing in analytics, visualization, and creating data-driven solutions using modern BI Tools.
          </p>
          <p className="text-gray-600 mb-8">
            I turn your data into insights and build Business Intelligent and Automation Solutions.
            Focused on delivering high impact solutions that enables Data-Driven Organizations.
          </p>
          <p className="text-gray-600 mb-8">
            I offer BI Development and Data Analytics services using Power BI, Excel, SQL, Python and more.
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
            href="https://www.youtube.com/@MasterBusinessIntelligence" 
            className="
              p-2 bg-white rounded-full shadow-md
              transition-all duration-300 ease-in-out
              hover:bg-red-100 hover:shadow-lg hover:-translate-y-0.5
              flex items-center justify-center
            " 
            aria-label="YouTube">
            <Image 
              src="https://img.icons8.com/color/48/youtube-play.png" 
              alt="YouTube" 
              width={20}
              height={20}
              className="w-5 h-5"
              unoptimized
            />
          </a>
        </div>
        {/* Hire Me CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-2">Hire My Services</h3>
          <p className="text-gray-600 mb-4">Starting from just
            <span className="text-green-600 text-2xl italic font-bold px-2">
              $10
            </span> for high-impact data solutions.
          </p>
          <a
            href="mailto:benjohnokezie@gmail.com?subject=Service%20Inquiry"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition-colors"
          >
            Hire Me Now →
          </a>
        </div>  
      </div>
</section>
  );
}
