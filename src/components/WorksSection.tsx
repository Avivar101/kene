'use client';

import { useEffect, useState } from 'react';
import { Project } from '@/types';
import Image from 'next/image';
import { getTagStyle } from '@/utils/colorTags';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'data-analysis', label: 'Data Analysis' },
  { id: 'bi-development', label: 'BI Development' },
  { id: 'python', label: 'Python' },
  { id: 'automation', label: 'Automation' },
];

export default function WorksSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const loadProjects = async () => {
      const res = await fetch('/data/projects.json');
      const data = await res.json();
      const sorted = [...data].sort((a, b) => b.id - a.id); // Highest ID first
      setProjects(sorted);
    };
    loadProjects();
  }, []);

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-center">My Projects</h2>

      {/* Category Filter */}
      <div className="overflow-x-auto mb-8">
        <div className="flex gap-2 min-w-max pb-2">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-1 rounded-full whitespace-nowrap text-sm ${
                selectedCategory === category.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6">
        {filteredProjects.map(project => (
          <div key={project.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                  key={index}
                  className={`text-xs px-2 py-1 rounded font-medium ${getTagStyle(tag)}`}
                >
                    {tag}
                  </span>
                ))}
              </div>
                {project.docUrl && (
                  <a
                    href={project.docUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-600 font-medium hover:underline"
                  >
                    Read Case Study →
                  </a>
                )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
