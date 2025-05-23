'use client';

import { Menu, X } from 'lucide-react';
import { Dispatch, SetStateAction, useState } from 'react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<'home' | 'works' | 'articles' | 'whatido'>>;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'works', label: 'Works' },
  { id: 'articles', label: 'Articles' },
  { id: 'whatido', label: 'What I Do' },
];

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
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
          <nav className="flex flex-col gap-6">
            {navItems.map(item => (
              <button
                key={item.id}
                className={`text-left text-xl py-2 ${activeSection === item.id ? 'text-indigo-600 font-medium' : 'text-gray-700'}`}
                onClick={() => {
                  setActiveSection(item.id as 'home' | 'works' | 'articles' | 'whatido');
                  setMenuOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
