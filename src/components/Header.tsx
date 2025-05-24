'use client';

import { Menu, X } from 'lucide-react';
import {useState } from 'react';



export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="flex justify-between items-center p-4">
        <div className="font-bold text-xl text-indigo-600">Portfolio</div>
        <button onClick={toggleMenu} className="p-1">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
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
              href="mailto:benjohnokezie@gmail.com?subject=Service%20Inquiry"
              className="bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition-colors w-full text-center"
            >
              Hire Me Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
