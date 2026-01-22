"use client";

import Link from "next/link";
import { useMemo } from "react";
import {
  Zap,
  Flame,
  Paintbrush,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/lib/data/services";
import { BorderBeam } from "@/components/ui/border-beam"

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Flame,
  Paintbrush,
};

export interface ServiceCardProps {
  service: Service;
  variant?: "compact" | "full";
}

export const ServiceCard = ({
  service,
  variant = "compact",
}: ServiceCardProps) => {
  const IconComponent = iconMap[service.icon] || Zap;
  const random = useMemo(() => {
    let hash = 0;
    for (let i = 0; i < service.id.length; i++) {
      hash = service.id.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash % 1000);
  }, [service.id]);

  if (variant === "compact") {
    return (
      <Link
        href={`/servicios#${service.id}`}
        className="group block "
        aria-label={`Ver más sobre ${service.title}`}
      >
        <article className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ">
          <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-primary/10 to-transparent rounded-bl-full" />

          <div className="relative">
            <div className="flex flex-row gap-2 items-center justify-start text-primary dark:text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
              <IconComponent className="w-10 h-10" aria-hidden="true" />
              <h3 className="text-lg font-bold text-primary dark:text-white group-hover:text-yellow-400">
                {service.title}
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400  text-sm leading-relaxed mb-4">
              {service.shortDescription}
            </p>

            {service.certifications && service.certifications.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {service.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20"
                  >
                    ✓ {cert}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
              <span>Ver más</span>
              <ArrowRight
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </div>
          </div>
          <BorderBeam colorFrom="#fcba03" colorTo="#fff" delay={random} />
        </article>
      </Link>
    );
  }

  return (
    <article
      id={service.id}
      className="relative scroll-mt-24 rounded-2xl bg-white dark:bg-slate-800 p-8 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50  dark:border-slate-700"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="shrink-0">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-primary to-primary/80 text-white dark:text-yellow-400 shadow-lg shadow-primary/30">
            <IconComponent className="w-10 h-10" aria-hidden="true" />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white ">
              {service.title}
            </h2>
            {service.certifications?.map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-accent/10 text-accent border border-accent/20"
              >
                ✓ Certificado {cert}
              </span>
            ))}
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
            {service.fullDescription}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary rounded-full" />
                Lo que ofrecemos
              </h3>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
                  >
                    <span className="shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-primary dark:bg-yellow-400" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-secondary rounded-full" />
                Beneficios
              </h3>
              <ul className="space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
                  >
                    <span className="shrink-0 w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-secondary dark:bg-yellow-400" />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <BorderBeam colorFrom="#fcba03" colorTo="#fff" delay={random} />
    </article>
  );
};

export default ServiceCard;
