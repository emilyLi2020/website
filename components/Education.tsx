'use client';

import { profileData } from '@/data/profile';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Star } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-16 bg-[var(--muted)] dark:bg-[var(--warm-neutral-200)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {profileData.education.map((edu) => (
            <Card
              key={edu.id}
              className="border-0 bg-white dark:bg-[#0f1419] shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Header with gradient */}
              <CardHeader className="bg-gradient-to-r from-[var(--soft-teal-500)] to-[var(--calm-blue-500)] p-5 text-white">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-white/90 font-medium">{edu.field}</p>
                  </div>
                  <GraduationCap className="w-12 h-12 opacity-50" />
                </div>
                <p className="text-white/80 text-sm">{edu.institution}</p>
                <p className="text-white/70 text-sm">{edu.location}</p>
              </CardHeader>

              {/* Content */}
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-[var(--soft-teal-100)] text-[var(--soft-teal-700)] border-0">
                    {edu.period}
                  </Badge>
                  {edu.gpa && (
                    <span className="text-lg font-bold text-[var(--primary)]">
                      GPA: {edu.gpa}
                    </span>
                  )}
                </div>

                {/* Honors */}
                {edu.honors && edu.honors.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Star className="w-5 h-5 text-[var(--accent-amber)]" />
                      Honors & Awards
                    </h4>
                    <ul className="space-y-1">
                      {edu.honors.map((honor, index) => (
                        <li key={index} className="text-sm text-foreground/70 flex items-start gap-2">
                          <span className="text-[var(--primary)] mt-1">•</span>
                          <span>{honor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Activities */}
                {edu.activities && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Activities</h4>
                    <p className="text-sm text-foreground/70">{edu.activities}</p>
                  </div>
                )}

                {/* Courses */}
                {edu.courses && (
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Core Courses</h4>
                    <p className="text-sm text-foreground/70">{edu.courses}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
