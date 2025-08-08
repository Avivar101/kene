'use client';

import { useEffect, useState } from 'react';


export default function Header() {

  // open and close menu
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  // mobile/desktop CV download state
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
    }
  }, []);

  const cvPath = "/files/My-CV.pdf";


// code
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="flex justify-between items-center p-4">
        <div className="font-bold text-xl text-indigo-600">Kene</div>
        <button onClick={toggleMenu} className="p-1" aria-label="Toggle menu">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-16 px-6 pb-6">
          <div className="flex flex-col items-end">
            <button
              onClick={toggleMenu}
              className="mb-6 text-gray-600 hover:text-gray-900"
              aria-label="Close menu"
            >
              ✕
            </button>
            <a
              href= {cvPath}
              {...(!isMobile && { download: "Ben-CV.pdf" })} // download only on desktop
              target={isMobile ? "_blank" : undefined} // open in new tab on mobile
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition-colors w-full text-center"
            >
              Download My CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
