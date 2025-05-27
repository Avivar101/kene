'use client';

import { useEffect, useState } from 'react';
import { Article } from '@/types';
import Image from 'next/image';

export default function ArticlesSection() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch('/data/articles.json');
      const data = await res.json();
      const sorted = [...data].sort((a, b) => b.id - a.id); // Highest ID first
      setArticles(sorted);
    };
    fetchArticles();
  }, []);

  return (
    <section className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Project Articles</h2>
      <div className="grid gap-6">
        {articles.map(article => (
          <div key={article.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full h-48 md:w-1/3 md:h-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 md:w-2/3">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-medium text-sm inline-flex items-center"
                >
                  Read on Medium →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
