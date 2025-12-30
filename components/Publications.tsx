'use client';

import { profileData } from '@/data/profile';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, FlaskConical, Lightbulb, Users, UserCircle } from 'lucide-react';

export default function Publications() {
  return (
    <section id="publications" className="py-16 bg-white dark:bg-[#0f1419]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Research & Publications
          </h2>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Contributing to the advancement of mental health treatment through neuroimaging research and evidence-based practice
          </p>
        </div>

        <div className="space-y-6">
          {profileData.publications.map((pub) => (
            <Card
              key={pub.id}
              className="border-0 bg-[var(--muted)] dark:bg-[var(--warm-neutral-200)] shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white ${
                      pub.type === 'published'
                        ? 'bg-gradient-to-br from-[var(--sage-green-400)] to-[var(--sage-green-600)]'
                        : 'bg-gradient-to-br from-[var(--calm-blue-400)] to-[var(--calm-blue-600)]'
                    }`}>
                      {pub.type === 'published' ? (
                        <FileText className="w-8 h-8" />
                      ) : (
                        <FlaskConical className="w-8 h-8" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge
                            variant="secondary"
                            className={`uppercase font-bold ${
                              pub.type === 'published'
                                ? 'bg-[var(--sage-green-100)] text-[var(--sage-green-700)] border-0'
                                : 'bg-[var(--calm-blue-100)] text-[var(--calm-blue-700)] border-0'
                            }`}
                          >
                            {pub.type === 'published' ? 'Published' : 'Ongoing Research'}
                          </Badge>
                          {pub.type === 'published' && (
                            <span className="text-sm font-semibold text-[var(--primary)]">
                              {pub.year}
                            </span>
                          )}
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
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Focus Areas */}
        <Card className="mt-12 border-0 bg-gradient-to-r from-[var(--soft-teal-50)] to-[var(--calm-blue-50)] dark:from-[var(--soft-teal-50)] dark:to-[var(--calm-blue-50)]">
          <CardHeader className="p-6 md:p-10 pb-0">
            <CardTitle className="text-2xl font-bold text-foreground text-center">
              Research Focus Areas
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-10 pt-6">
            <div className="grid md:grid-cols-2 gap-5">
              <Card className="border-0 bg-white dark:bg-white shadow-md">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="w-8 h-8 text-[var(--primary)] flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">Neuroimaging & Biomarkers</h4>
                      <p className="text-sm text-foreground/70">
                        Using structural MRI and resting-state fMRI to identify predictive biomarkers of treatment outcomes in OCD patients
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-white dark:bg-white shadow-md">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <FlaskConical className="w-8 h-8 text-[var(--primary)] flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">Precision Medicine</h4>
                      <p className="text-sm text-foreground/70">
                        Extending the Precision Medicine paradigm to psychology and psychiatry through treatment-specific biomarker identification
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-white dark:bg-white shadow-md">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <Users className="w-8 h-8 text-[var(--primary)] flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">Cultural Adaptation & Accessibility</h4>
                      <p className="text-sm text-foreground/70">
                        Investigating culturally responsive interventions and barriers to mental health care for underserved populations, including refugees and immigrants
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-white dark:bg-white shadow-md">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <UserCircle className="w-8 h-8 text-[var(--primary)] flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">Patient-Centered Approach</h4>
                      <p className="text-sm text-foreground/70">
                        Examining treatment effectiveness from clients&apos; perspectives, focusing on quality of life, functional improvement, and subjective well-being beyond symptom reduction
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
