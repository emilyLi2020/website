'use client';

import { profileData } from '@/data/profile';

export default function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-[#0f1419]">
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
                <svg className="w-6 h-6 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {profileData.about.languages.map((language, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[var(--soft-teal-100)] dark:bg-[var(--soft-teal-100)] text-[var(--soft-teal-700)] dark:text-[var(--soft-teal-700)] rounded-lg text-sm font-medium"
                  >
                    {language}
                  </span>
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
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-[var(--muted)] dark:bg-[var(--warm-neutral-200)] rounded-lg hover:shadow-md transition-shadow"
                >
                  <svg
                    className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-foreground font-medium">{specialization}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Statement */}
        <div className="mt-16 p-8 bg-gradient-to-r from-[var(--soft-teal-50)] to-[var(--calm-blue-50)] dark:from-[var(--soft-teal-50)] dark:to-[var(--calm-blue-50)] rounded-2xl border border-[var(--border)]">
          <blockquote className="text-center">
            <p className="text-xl md:text-2xl font-medium text-foreground italic mb-4">
              "What looks like 'choice' is often the residue of childhood harm and survival-based neural patterns. Trauma-informed care invites us to look beyond symptoms and help people rebuild safety, connection, and meaning."
            </p>
            <cite className="text-foreground/70 font-semibold">— Wenqing(Emily) Li</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

