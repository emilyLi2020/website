import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Footer from '@/components/Footer';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f1419]">
      <Navigation />
      
      {/* Header */}
      <header className="bg-gradient-to-r from-[var(--soft-teal-50)] to-[var(--calm-blue-50)] dark:from-[var(--soft-teal-50)] dark:to-[var(--calm-blue-50)] pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-[var(--primary)] transition-colors mb-8"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-foreground mb-4">Experience & Education</h1>
          <p className="text-xl text-foreground/70 max-w-3xl">
            My professional journey in mental health care, research, and clinical practice
          </p>
        </div>
      </header>

      <main>
        {/* Certifications Section */}
        <section className="py-16 bg-white dark:bg-[#0f1419]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Licenses & Certifications
              </h2>
              <div className="w-20 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-4 p-4 bg-[var(--muted)] dark:bg-[var(--warm-neutral-200)] rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[var(--soft-teal-400)] to-[var(--calm-blue-400)] rounded-lg flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Bilingual Staff Certificate</h4>
                  <p className="text-sm text-foreground/70">Kaiser Permanente - Mandarin</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-[var(--muted)] dark:bg-[var(--warm-neutral-200)] rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[var(--accent-rose)] to-[var(--accent-amber)] rounded-lg flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">CPR/AED & First Aid</h4>
                  <p className="text-sm text-foreground/70">Adult and Pediatric Certified</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Experience />
        <Education />
      </main>
      
      <Footer />
    </div>
  );
}

