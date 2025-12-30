'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import DarkModeToggle from '@/components/DarkModeToggle';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#about', label: 'About', isHash: true },
    { href: '/#services', label: 'Services', isHash: true },
    { href: '/experience', label: 'Experience & Education', isHash: false },
    { href: '/research', label: 'Research', isHash: false },
    { href: '/#contact', label: 'Contact', isHash: true },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isHash: boolean) => {
    if (!isHash) {
      setIsOpen(false);
      return; // Let Next.js handle the navigation
    }
    
    e.preventDefault();
    const hash = href.split('#')[1];
    const element = document.querySelector(`#${hash}`);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    } else if (href.startsWith('/')) {
      // If we're not on the home page, navigate there first
      window.location.href = href;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#0f1419]/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-semibold text-foreground hover:text-[var(--primary)] transition-colors"
          >
            Wenqing(Emily) Li, MSW, ASW-Eligible
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href, link.isHash)}
                className="text-sm font-medium text-foreground/70 hover:text-[var(--primary)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <DarkModeToggle />
          </div>

          {/* Mobile Dark Mode Toggle and Menu */}
          <div className="flex items-center gap-2 md:hidden">
            <DarkModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Toggle menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <SheetHeader>
                <SheetTitle className="text-left text-foreground">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href, link.isHash)}
                    className="text-lg font-medium text-foreground/70 hover:text-[var(--primary)] transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
