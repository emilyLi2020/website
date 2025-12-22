'use client';

import { profileData } from '@/data/profile';
import DarkModeToggle from './DarkModeToggle';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--soft-teal-50)] via-[var(--calm-blue-50)] to-[var(--sage-green-50)] dark:from-[var(--soft-teal-50)] dark:via-[#0f1419] dark:to-[var(--sage-green-50)]"
    >
      {/* Dark mode toggle - fixed position */}
      <div className="fixed top-6 right-6 z-50">
        <DarkModeToggle />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Profile Image Placeholder */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[var(--soft-teal-400)] to-[var(--calm-blue-400)] flex items-center justify-center text-white text-4xl font-bold shadow-xl">
            WL
          </div>
        </div>

        {/* Name and Credentials */}
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
          {profileData.name}
          <span className="text-2xl md:text-3xl font-normal text-foreground/70 block mt-4">
            {profileData.credentials}
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-foreground/80 mb-6 max-w-3xl mx-auto leading-relaxed">
          {profileData.tagline}
        </p>

        {/* Key Highlights */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="px-4 py-2 bg-white/80 dark:bg-[var(--warm-neutral-200)] rounded-full text-sm font-medium text-foreground shadow-sm">
            Kaiser Permanente Mental Health Trainee
          </div>
          <div className="px-4 py-2 bg-white/80 dark:bg-[var(--warm-neutral-200)] rounded-full text-sm font-medium text-foreground shadow-sm">
            UC Berkeley MSW
          </div>
          <div className="px-4 py-2 bg-white/80 dark:bg-[var(--warm-neutral-200)] rounded-full text-sm font-medium text-foreground shadow-sm">
            Published Researcher
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('#services')}
            className="px-8 py-4 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View Services
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="px-8 py-4 bg-white dark:bg-[var(--warm-neutral-200)] hover:bg-[var(--muted)] text-foreground rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-foreground/50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}

