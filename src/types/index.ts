// src/types/index.ts

export interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    tags: string[];
  }
  
  export interface Article {
    id: number;
    title: string;
    image: string;
    date: string;
    excerpt: string;
    url: string;
    readTime: string;
  }
  
  export interface Message {
    sender: 'user' | 'bot';
    text: string;
  }
  
  export interface NavItem {
    id: 'home' | 'works' | 'articles' | 'whatido';
    label: string;
  }
  