import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturedCourses } from '../components/FeaturedCourses';

export function Home() {
  return (
    <main>
      <Hero />
      <FeaturedCourses />
    </main>
  );
}