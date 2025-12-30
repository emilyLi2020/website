'use client';

import { useState } from 'react';
import { profileData } from '@/data/profile';
import type { Experience as ExperienceType } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-16 bg-white dark:bg-[#0f1419]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[var(--border)]"></div>

          {/* Experience items */}
          <div className="space-y-8">
            {profileData.experiences.map((exp: ExperienceType, index: number) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--primary)] rounded-full border-4 border-white dark:border-[#0f1419] z-10"></div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <Card className="border-0 bg-[var(--muted)] dark:bg-[var(--warm-neutral-200)] shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : ''}`}>
                          <h3 className="text-lg font-bold text-foreground mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-[var(--primary)] font-semibold mb-1">
                            {exp.organization}
                          </p>
                          <p className="text-sm text-foreground/60">
                            {exp.location}
                          </p>
                        </div>
                      </div>

                      <div className={`flex flex-wrap gap-2 mb-3 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                        <Badge variant="secondary" className="bg-[var(--soft-teal-100)] text-[var(--soft-teal-700)] border-0">
                          {exp.period}
                        </Badge>
                        <Badge variant="secondary" className="bg-[var(--calm-blue-100)] text-[var(--calm-blue-700)] border-0">
                          {exp.type}
                        </Badge>
                      </div>

                      {/* Expandable description */}
                      <Collapsible open={expandedId === exp.id} onOpenChange={() => toggleExpand(exp.id)}>
                        <div className={`${index % 2 === 0 ? 'text-right' : ''}`}>
                          <CollapsibleTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className={`text-[var(--primary)] hover:text-[var(--primary-hover)] hover:bg-transparent p-0 h-auto font-medium text-sm ${
                                index % 2 === 0 ? 'ml-auto' : ''
                              }`}
                            >
                              {expandedId === exp.id ? 'Show less' : 'Show details'}
                              <ChevronDown
                                className={`w-4 h-4 ml-1 transform transition-transform ${
                                  expandedId === exp.id ? 'rotate-180' : ''
                                }`}
                              />
                            </Button>
                          </CollapsibleTrigger>

                          <CollapsibleContent className="pt-4">
                            <div className={`space-y-2 text-sm text-foreground/70 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                              <ul className={`space-y-2 ${index % 2 === 0 ? 'list-none' : 'list-disc list-inside'}`}>
                                {exp.description.map((item, i) => (
                                  <li key={i} className="leading-relaxed">
                                    {index % 2 === 0 && '• '}{item}
                                  </li>
                                ))}
                              </ul>
                              <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                                {exp.skills.map((skill, i) => (
                                  <Badge
                                    key={i}
                                    variant="outline"
                                    className="bg-white dark:bg-white text-foreground border-0"
                                  >
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </CollapsibleContent>
                        </div>
                      </Collapsible>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for timeline */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
