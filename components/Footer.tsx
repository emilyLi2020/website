'use client';

import Link from 'next/link';
import { profileData } from '@/data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--warm-neutral-900)] dark:bg-[var(--warm-neutral-900)] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">{profileData.name}</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Mental health therapist providing trauma-informed, culturally sensitive care in English and Mandarin.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#about" className="text-white/70 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-white/70 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-white/70 hover:text-white transition-colors">
                  Experience & Education
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-white/70 hover:text-white transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-sm">LinkedIn</span>
              </a>
              <p className="text-white/70 text-sm">
                <span className="font-semibold">Location:</span><br />
                {profileData.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} {profileData.name}. All rights reserved.
          </p>
          <p className="text-white/50 text-xs mt-2">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

