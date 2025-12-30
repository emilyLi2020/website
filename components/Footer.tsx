'use client';

import Link from 'next/link';
import { profileData } from '@/data/profile';
import { Separator } from '@/components/ui/separator';
import { Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--warm-neutral-900)] dark:bg-[#1c1917] text-white py-12">
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
                <Linkedin className="w-6 h-6" />
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
        <Separator className="bg-white/20 mb-8" />
        <div className="text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} {profileData.name}. All rights reserved.
          </p>
          <p className="text-white/50 text-xs mt-2">
            Built with Next.js & shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}
