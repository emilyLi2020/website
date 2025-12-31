'use client';

import { profileData } from '@/data/profile';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Users, Languages, Heart, ClipboardList, AlertTriangle, CheckCircle } from 'lucide-react';

const iconMap: { [key: string]: JSX.Element } = {
  person: <User className="w-8 h-8" />,
  people: <Users className="w-8 h-8" />,
  language: <Languages className="w-8 h-8" />,
  heart: <Heart className="w-8 h-8" />,
  clipboard: <ClipboardList className="w-8 h-8" />,
  alert: <AlertTriangle className="w-8 h-8" />,
};

const iconGradientMap: { [key: string]: string } = {
  person: 'from-[var(--soft-teal-400)] to-[var(--calm-blue-400)]',
  people: 'from-[var(--soft-teal-400)] to-[var(--calm-blue-400)]',
  language: 'from-[var(--accent-rose)] via-[var(--accent-rose)] via-[85%] to-[var(--accent-amber)]', // Mostly pink
  heart: 'from-[var(--accent-rose)] via-[var(--accent-rose)] via-[85%] to-[var(--accent-amber)]', // Mostly pink
  clipboard: 'from-[var(--accent-rose)] to-[var(--accent-amber)]', // Same as CPR/AED
  alert: 'from-[var(--accent-rose)] to-[var(--accent-amber)]', // Same as CPR/AED
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
            <Card
              key={service.id}
              className="border-0 bg-white dark:bg-[#0f1419] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <CardHeader className="flex flex-row items-start gap-4 p-8 pb-4">
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${iconGradientMap[service.icon] || 'from-[var(--soft-teal-400)] to-[var(--calm-blue-400)]'} rounded-xl flex items-center justify-center text-white`}>
                  {iconMap[service.icon]}
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-foreground/70 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8 pt-0">
                {service.modalities && service.modalities.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {service.modalities.map((modality, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-[var(--soft-teal-100)] dark:bg-[var(--soft-teal-500)]/20 text-[var(--soft-teal-700)] dark:text-[var(--soft-teal-500)] border-0 text-xs font-medium"
                      >
                        {modality}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Therapeutic Modalities Section */}
        <Card className="border-0 bg-white dark:bg-[#0f1419] shadow-lg">
          <CardHeader className="p-8 md:p-12 pb-0">
            <CardTitle className="text-3xl font-bold text-foreground text-center">
              Therapeutic Modalities
            </CardTitle>
          </CardHeader>
          <CardContent className="px-8 pb-8 md:px-12 md:pb-12 pt-4">
            <div className="grid md:grid-cols-3 gap-6">
              {profileData.skills
                .find((category) => category.category === 'Therapeutic Modalities')
                ?.items.map((modality, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-[var(--muted)] dark:bg-[var(--warm-neutral-200)] rounded-lg hover:bg-[var(--soft-teal-100)] dark:hover:bg-[var(--soft-teal-100)] transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                    <span className="text-foreground font-medium text-sm">{modality}</span>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
