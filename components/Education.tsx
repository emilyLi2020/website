'use client';

import { profileData } from '@/data/profile';

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
            <div
              key={edu.id}
              className="bg-white dark:bg-[#0f1419] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Header with gradient */}
              <div className="bg-gradient-to-r from-[var(--soft-teal-500)] to-[var(--calm-blue-500)] p-5 text-white">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-white/90 font-medium">{edu.field}</p>
                  </div>
                  <svg className="w-12 h-12 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <p className="text-white/80 text-sm">{edu.institution}</p>
                <p className="text-white/70 text-sm">{edu.location}</p>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-[var(--soft-teal-100)] dark:bg-[var(--soft-teal-100)] text-[var(--soft-teal-700)] dark:text-[var(--soft-teal-700)] rounded-full text-sm font-medium">
                    {edu.period}
                  </span>
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
                      <svg className="w-5 h-5 text-[var(--accent-amber)]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

