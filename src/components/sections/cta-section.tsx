"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/data";
import Link from "next/link";

const benefits = [
  { icon: Shield, text: "Sin compromiso" },
  { icon: Clock, text: "Respuesta en 24h" },
  { icon: CheckCircle, text: "Cotización gratuita" },
];

export const CTASection = () => {
  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden bg-slate-900 dark:bg-slate-900"
      aria-labelledby="cta-heading"
    >
      <BackgroundBeams className="absolute inset-0" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              id="cta-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              ¿Listo para iniciar su proyecto?
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Contáctenos hoy y reciba una cotización personalizada sin
              compromiso. Estamos aquí para hacer realidad su proyecto con
              seguridad y profesionalismo.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white/90"
              >
                <div className="flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-yellow-400" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium">{benefit.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link href="/contacto">
              <Button
                variant="secondary"
                size="lg"
                className="bg-primary text-white hover:bg-primary/60 hover:text-white dark:text-slate-900"
              >
                Solicitar Cotización
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Button>
            </Link>

            <Link href={COMPANY_INFO.whatsappLink}>
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/60 hover:text-white dark:text-slate-900"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Llamar Ahora
              </Button></Link>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-white/70 text-sm"
          >
            <p>
              <span className="font-medium text-white">{COMPANY_INFO.phone}</span>{" "}
              | {COMPANY_INFO.businessHours}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
