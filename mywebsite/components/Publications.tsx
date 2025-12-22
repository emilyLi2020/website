'use client';

import { profileData } from '@/data/profile';

export default function Publications() {
  return (
    <section id="publications" className="py-20 bg-white dark:bg-[#0f1419]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Research & Publications
          </h2>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Contributing to the advancement of mental health treatment through neuroimaging research and evidence-based practice
          </p>
        </div>

        <div className="space-y-8">
          {profileData.publications.map((pub) => (
            <div
              key={pub.id}
              className="bg-[var(--muted)] dark:bg-[var(--warm-neutral-200)] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white ${
                    pub.type === 'published'
                      ? 'bg-gradient-to-br from-[var(--sage-green-400)] to-[var(--sage-green-600)]'
                      : 'bg-gradient-to-br from-[var(--calm-blue-400)] to-[var(--calm-blue-600)]'
                  }`}>
                    {pub.type === 'published' ? (
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    ) : (
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                          pub.type === 'published'
                            ? 'bg-[var(--sage-green-100)] dark:bg-[var(--sage-green-100)] text-[var(--sage-green-700)] dark:text-[var(--sage-green-700)]'
                            : 'bg-[var(--calm-blue-100)] dark:bg-[var(--calm-blue-100)] text-[var(--calm-blue-700)] dark:text-[var(--calm-blue-700)]'
                        }`}>
                          {pub.type === 'published' ? 'Published' : 'Ongoing Research'}
                        </span>
                        <span className="text-sm font-semibold text-[var(--primary)]">
                          {pub.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                        {pub.title}
                      </h3>
                      <p className="text-sm text-foreground/70 mb-2">
                        <span className="font-semibold">Authors:</span> {pub.authors}
                      </p>
                      <p className="text-sm text-foreground/70 mb-2">
                        <span className="font-semibold">Journal:</span> {pub.journal}
                      </p>
                      {pub.presented && (
                        <p className="text-sm text-foreground/70">
                          <span className="font-semibold">Presented at:</span> {pub.presented}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Focus Areas */}
        <div className="mt-16 bg-gradient-to-r from-[var(--soft-teal-50)] to-[var(--calm-blue-50)] dark:from-[var(--soft-teal-50)] dark:to-[var(--calm-blue-50)] rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-foreground mb-6 text-center">
            Research Focus Areas
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <svg className="w-8 h-8 text-[var(--primary)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Neuroimaging & Biomarkers</h4>
                  <p className="text-sm text-foreground/70">
                    Using structural MRI and resting-state fMRI to identify predictive biomarkers of treatment outcomes in OCD patients
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <svg className="w-8 h-8 text-[var(--primary)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Precision Medicine</h4>
                  <p className="text-sm text-foreground/70">
                    Extending the Precision Medicine paradigm to psychology and psychiatry through treatment-specific biomarker identification
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <svg className="w-8 h-8 text-[var(--primary)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Treatment Efficacy</h4>
                  <p className="text-sm text-foreground/70">
                    Comparing neurobiological mechanisms of psychotherapy (CBT, MBCT) versus pharmacotherapy in OCD treatment
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <svg className="w-8 h-8 text-[var(--primary)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Data Analysis & Modeling</h4>
                  <p className="text-sm text-foreground/70">
                    Statistical modeling and data visualization using R, SPSS, and MATLAB for neuroimaging data analysis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

