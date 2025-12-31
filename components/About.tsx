'use client';

import { profileData } from '@/data/profile';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Languages, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-[#121820]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Introduction */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-foreground/80 leading-relaxed">
                {profileData.about.intro}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {profileData.about.philosophy}
              </p>
            </div>

            {/* Languages */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Languages className="w-6 h-6 text-[var(--primary)]" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {profileData.about.languages.map((language, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 bg-[var(--soft-teal-100)] dark:bg-[var(--soft-teal-500)]/20 text-[var(--soft-teal-700)] dark:text-[var(--soft-teal-500)] border-0 text-sm font-medium"
                  >
                    {language}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Specializations */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Areas of Specialization
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {profileData.about.specializations.map((specialization, index) => (
                <Card
                  key={index}
                  className="border-0 bg-[var(--muted)] dark:bg-[var(--warm-neutral-200)] hover:shadow-md transition-shadow"
                >
                  <CardContent className="flex items-start gap-3 p-4">
                    <CheckCircle className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-medium">{specialization}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Statement */}
        <Card className="mt-16 border border-[var(--border)] bg-gradient-to-br from-[var(--soft-teal-50)] via-[var(--calm-blue-50)] to-[var(--sage-green-50)] dark:from-[var(--soft-teal-50)] dark:via-[var(--calm-blue-50)] dark:to-[var(--sage-green-50)]">
          <CardContent className="p-8">
            <blockquote className="text-center">
              <p className="text-xl md:text-2xl font-medium text-foreground italic mb-4">
                &quot;What looks like &apos;choice&apos; is often the residue of childhood harm and survival-based neural patterns. Trauma-informed care invites us to look beyond symptoms and help people rebuild safety, connection, and meaning.&quot;
              </p>
              <cite className="text-foreground/70 font-semibold">— Wenqing(Emily) Li</cite>
            </blockquote>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
