import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f1419]">
      {/* Header */}
      <header className="bg-gradient-to-r from-[var(--soft-teal-50)] to-[var(--calm-blue-50)] dark:from-[var(--soft-teal-50)] dark:to-[var(--calm-blue-50)] py-20">
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
          <h1 className="text-5xl font-bold text-foreground mb-4">Blog & Insights</h1>
          <p className="text-xl text-foreground/70 max-w-3xl">
            Thoughts on mental health, therapy, cultural considerations, and the intersection of neuroscience and clinical practice.
          </p>
        </div>
      </header>

      {/* Coming Soon */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-[var(--soft-teal-400)] to-[var(--calm-blue-400)] rounded-full flex items-center justify-center text-white mx-auto mb-8">
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Coming Soon</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            I&apos;m currently working on creating thoughtful content about mental health, therapy approaches, and cultural considerations in clinical practice. Check back soon for updates!
          </p>

          {/* Potential Topics */}
          <div className="mt-12 bg-[var(--muted)] dark:bg-[var(--warm-neutral-200)] rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6">Upcoming Topics</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--primary)] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-foreground">Trauma-Informed Care in Practice</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--primary)] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-foreground">Cultural Considerations in Therapy</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--primary)] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-foreground">Neuroscience of Psychotherapy</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--primary)] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-foreground">Supporting Immigrant Mental Health</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--primary)] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-foreground">Understanding OCD Treatment</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

