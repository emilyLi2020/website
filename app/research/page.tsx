import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Publications from '@/components/Publications';
import Footer from '@/components/Footer';

export default function ResearchPage() {
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
          <h1 className="text-5xl font-bold text-foreground mb-4">Research & Publications</h1>
          <p className="text-xl text-foreground/70 max-w-3xl">
            Contributing to the advancement of mental health treatment through neuroimaging research and evidence-based practice
          </p>
        </div>
      </header>

      <main>
        <Publications />
      </main>
      
      <Footer />
    </div>
  );
}


