'use client';

import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import HomeSection from '@/components/HomeSection';
import WorksSection from '@/components/WorksSection';
import ArticlesSection from '@/components/ArticlesSection';
import WhatIDoSection from '@/components/WhatIDoSection';
import ChatWidget from '@/components/ChatWidget';
import { useState } from 'react';

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState<'home' | 'works' | 'articles' | 'whatido'>('home');

  return (
    <div className="font-sans text-gray-800 min-h-screen bg-gray-50">
      <Header/>
      <main className="pt-16 pb-16">
        {activeSection === 'home' && <HomeSection setActiveSection={setActiveSection} />}
        {activeSection === 'works' && <WorksSection />}
        {activeSection === 'articles' && <ArticlesSection />}
        {activeSection === 'whatido' && <WhatIDoSection />}
      </main>
      <BottomNav activeSection={activeSection} setActiveSection={setActiveSection} />
      <ChatWidget />
    </div>
  );
}
