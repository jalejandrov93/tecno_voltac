"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Award,
  Users,
  Clock,
  CheckCircle,
  HeartHandshake,
} from "lucide-react";


const reasons = [
  {
    icon: Shield,
    title: "Certificación RETIE",
    description:
      "Todas nuestras instalaciones eléctricas cumplen con el Reglamento Técnico de Instalaciones Eléctricas, garantizando seguridad total.",
    color: "primary",
  },
  {
    icon: Award,
    title: "Personal Certificado",
    description:
      "Nuestro equipo está capacitado y certificado por entidades reconocidas, asegurando trabajos de la más alta calidad.",
    color: "accent",
  },
  {
    icon: Users,
    title: "Experiencia Comprobada",
    description:
      "Más de 500 proyectos exitosos en Pereira y alrededores respaldan nuestra trayectoria y compromiso.",
    color: "secondary",
  },
  {
    icon: Clock,
    title: "Puntualidad",
    description:
      "Respetamos los tiempos acordados y mantenemos comunicación constante durante todo el proyecto.",
    color: "primary",
  },
  {
    icon: CheckCircle,
    title: "Garantía Total",
    description:
      "Respaldamos todos nuestros trabajos con garantía extendida y servicio post-venta.",
    color: "accent",
  },
  {
    icon: HeartHandshake,
    title: "Atención Personalizada",
    description:
      "Cada proyecto es único. Ofrecemos soluciones a medida según sus necesidades específicas.",
    color: "secondary",
  },
];

export const WhyUsSection = () => {
  return (
    <section
      className="py-16 md:py-24 bg-white dark:bg-slate-900"
      aria-labelledby="why-us-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-400/10 text-yellow-400 text-sm font-medium mb-4">
            ¿Por qué elegirnos?
          </span>
          <h2
            id="why-us-heading"
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Confíe en los{" "}
            <span className="text-primary dark:text-yellow-400">expertos</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            En{" "}
            <span className="text-primary font-semibold dark:text-yellow-400">
              Tecnovoltac
            </span>{" "}
            combinamos experiencia, certificaciones y compromiso para ofrecerle
            el mejor servicio técnico de la región.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-transparent dark:border-slate-700 transition-all duration-300 hover:border-yellow-400 dark:hover:border-yellow-400 overflow-hidden"
            >
              {/* Decoration Element */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-yellow-400/5 rounded-full blur-3xl group-hover:bg-yellow-400/10 transition-all duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <reason.icon
                    className="w-10 h-10 text-yellow-400"
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {reason.title}
                  </h3>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
