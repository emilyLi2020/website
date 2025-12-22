'use client';

import { profileData } from '@/data/profile';

const iconMap: { [key: string]: JSX.Element } = {
  person: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  people: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  language: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
    </svg>
  ),
  heart: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  clipboard: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
  alert: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="services" className="py-16 bg-[var(--muted)] dark:bg-[var(--warm-neutral-200)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Services & Approach
          </h2>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Providing trauma-informed, culturally sensitive mental health care using evidence-based therapeutic modalities
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {profileData.services.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-[#0f1419] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[var(--soft-teal-400)] to-[var(--calm-blue-400)] rounded-xl flex items-center justify-center text-white">
                  {iconMap[service.icon]}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  {service.modalities && service.modalities.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {service.modalities.map((modality, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[var(--soft-teal-100)] dark:bg-[var(--soft-teal-100)] text-[var(--soft-teal-700)] dark:text-[var(--soft-teal-700)] rounded-full text-xs font-medium"
                        >
                          {modality}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Therapeutic Modalities Section */}
        <div className="bg-white dark:bg-[#0f1419] rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            Therapeutic Modalities
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {profileData.skills
              .find((category) => category.category === 'Therapeutic Modalities')
              ?.items.map((modality, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-[var(--muted)] dark:bg-[var(--warm-neutral-200)] rounded-lg hover:bg-[var(--soft-teal-100)] dark:hover:bg-[var(--soft-teal-100)] transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-[var(--primary)] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-foreground font-medium text-sm">{modality}</span>
                </div>
              ))}
          </div>
        </div>

      </div>
    </section>
  );
}

