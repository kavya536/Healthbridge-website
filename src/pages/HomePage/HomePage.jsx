import React from 'react';
import Hero from '../../sections/Hero/Hero';
import Stats from '../../sections/Stats/Stats';
import About from '../../sections/About/About';
import Solutions from '../../sections/Solutions/Solutions';
import Patients from '../../sections/Patients/Patients';
import Community from '../../sections/Community/Community';
import Trust from '../../sections/Trust/Trust';
import CTA from '../../sections/CTA/CTA';
import './HomePage.css';

export default function HomePage() {
  return (
    <main className="home-page">
      <Hero />
      <div className="page-fade-in">
        <Stats />
        <About />
        <Solutions />
        <Patients />
        <Community />
        <Trust />
        <CTA />
      </div>
    </main>
  );
}
