'use client';

import { Article } from '@/types';
import Image from 'next/image';

const articles: Article[] = [
  {
    id: 1,
    title: "Data Visualization Best Practices for Business Intelligence",
    image: "/images/article1.jpg",
    date: "May 2, 2025",
    excerpt: "Learn how to create impactful dashboards that drive decision-making.",
    url: "#",
    readTime: "7 min read"
  },
  {
    id: 2,
    title: "Python vs R for Data Analysis: Which Should You Choose?",
    image: "/images/article2.jpg",
    date: "April 15, 2025",
    excerpt: "A comprehensive comparison of the two most popular languages for data analysis.",
    url: "#",
    readTime: "9 min read"
  },
  {
    id: 3,
    title: "Automating Reports with Python: A Step-by-Step Guide",
    image: "/images/article3.jpg",
    date: "March 22, 2025",
    excerpt: "How to save time and reduce errors by automating your reporting process.",
    url: "#",
    readTime: "5 min read"
  }
];

export default function ArticlesSection() {
  return (
    <section className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-center">My Articles</h2>
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
                  Read on Medium
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
