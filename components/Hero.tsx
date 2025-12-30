'use client';

import { profileData } from '@/data/profile';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown } from 'lucide-react';

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
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--soft-teal-50)] via-[var(--calm-blue-50)] to-[var(--sage-green-50)]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Profile Avatar */}
        <div className="mb-8 flex justify-center">
          <Avatar className="w-32 h-32 bg-gradient-to-br from-[var(--soft-teal-400)] to-[var(--calm-blue-400)] shadow-xl">
            <AvatarFallback className="bg-gradient-to-br from-[var(--soft-teal-400)] to-[var(--calm-blue-400)] text-white text-4xl font-bold">
              WL
            </AvatarFallback>
          </Avatar>
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

        {/* Key Highlights - Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-white/80 dark:bg-white/20 text-foreground dark:text-white border-0 shadow-sm">
            Kaiser Permanente Mental Health Trainee
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-white/80 dark:bg-white/20 text-foreground dark:text-white border-0 shadow-sm">
            UC Berkeley MSW
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-white/80 dark:bg-white/20 text-foreground dark:text-white border-0 shadow-sm">
            Published Researcher
          </Badge>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => scrollToSection('#services')}
            size="lg"
            className="px-8 py-6 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View Services
          </Button>
          <Button
            onClick={() => scrollToSection('#contact')}
            variant="secondary"
            size="lg"
            className="px-8 py-6 bg-white dark:bg-white/20 hover:bg-[var(--muted)] dark:hover:bg-white/30 text-foreground dark:text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-foreground/50" />
        </div>
      </div>
    </section>
  );
}
