"use client";

import { motion } from "framer-motion";
import { Users, Shield, Award, TrendingUp } from "lucide-react";
import { TeamCard } from "@/components/ui/team-card";

import { TEAM_MEMBERS, TEAM_HIGHLIGHTS } from "@/lib/data";
import { CTASection } from "@/components/sections";

export const TeamPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-primary/5 dark:from-slate-900 dark:via-slate-900 dark:to-primary/10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Users className="w-4 h-4" aria-hidden="true" />
              Profesionales Certificados
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Nuestro <span className="text-primary">Equipo</span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Un equipo de profesionales comprometidos con la excelencia,
              capacitados y certificados para garantizar la seguridad y calidad
              en cada proyecto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {TEAM_HIGHLIGHTS.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {highlight.stat}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {highlight.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Conozca a nuestros <span className="text-primary">técnicos</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Cada miembro de nuestro equipo está capacitado y certificado para
              brindarle el mejor servicio.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TeamCard member={member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Team */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                ¿Por qué confiar en{" "}
                <span className="text-primary">nuestro equipo</span>?
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Nuestro equipo se distingue por su compromiso con la
                excelencia, la capacitación continua y el cumplimiento estricto
                de las normas de seguridad.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                      Seguridad ante todo
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Todos nuestros técnicos siguen estrictos protocolos de
                      seguridad en cada proyecto.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                      Certificaciones actualizadas
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Mantenemos nuestras certificaciones al día y nos
                      capacitamos constantemente.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp
                      className="w-5 h-5 text-secondary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                      Mejora continua
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Invertimos en formación y actualización tecnológica para
                      ofrecer lo mejor.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative rounded-3xl bg-gradient-to-br from-accent via-accent/90 to-accent/80 p-8 shadow-2xl shadow-accent/30">
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="relative text-white">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                      <Award className="w-7 h-7" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">Compromiso</p>
                      <p className="text-2xl font-bold">100% Profesional</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-white" />
                      <span className="text-white/90">
                        Personal certificado RETIE
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-white" />
                      <span className="text-white/90">
                        Capacitación continua
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-white" />
                      <span className="text-white/90">
                        Equipos de protección personal
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-white" />
                      <span className="text-white/90">
                        Protocolos de seguridad estrictos
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
};

export default TeamPage;
