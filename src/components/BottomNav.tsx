'use client';

import { Dispatch, SetStateAction } from 'react';
import { NavItem } from '@/types';

interface BottomNavProps {
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<'home' | 'works' | 'articles' | 'whatido'>>;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'works', label: 'Works' },
  { id: 'articles', label: 'Articles' },
  { id: 'whatido', label: 'What I Do' },
];

export default function BottomNav({ activeSection, setActiveSection }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t z-40">
      <div className="flex justify-around items-center">
        {navItems.map(item => (
          <button
            key={item.id}
            className={`flex-1 py-3 text-xs font-medium text-center ${
              activeSection === item.id ? 'text-indigo-600' : 'text-gray-500'
            }`}
            onClick={() => setActiveSection(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
