"use client";

import { motion } from "framer-motion";
import { Shield, Phone, ArrowRight } from "lucide-react";
import { ServiceCard } from "@/components/ui/service-card";
import { Button } from "@/components/ui/button";

import { SERVICES, COMPANY_INFO } from "@/lib/data";
import Lightning from "@/components/Lightning";
import { CTASection } from "@/components/sections";
import Link from "next/link";


export const ServicesPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-primary/5 dark:from-slate-900 dark:via-slate-900 dark:to-primary/10" />

        {/* Lightning Effect Background */}
        <div className="absolute inset-0 opacity-20 dark:opacity-30 mix-blend-screen pointer-events-none">
          <Lightning
            hue={210}
            xOffset={1.2}
            speed={0.5}
            intensity={0.4}
            size={0.9}
          />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#1e3a5f 1px, transparent 1px), linear-gradient(to right, #1e3a5f 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 dark:bg-yellow-500/10 dark:border-yellow-500 text-accent dark:text-accent-foreground text-sm font-medium mb-6"
            >
              <Shield className="w-4 h-4" aria-hidden="true" />
              <span>Servicios Certificados</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
              Nuestros <span className="text-primary dark:text-yellow-400">Servicios</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-100 leading-relaxed mb-8">
              Ofrecemos soluciones técnicas integrales con certificación y
              garantía. Cada proyecto es ejecutado por profesionales capacitados
              que priorizan su seguridad y satisfacción.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contacto">
                <Button
                  variant="default"
                  size="lg"
                  className="group ring ring-white hover:ring-2 w-full sm:w-auto hover:ring-yellow-400 transition-all duration-300s"
                >
                  Solicitar Cotización
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-300s" aria-hidden="true" />
                </Button>
              </Link>
              <Link href={COMPANY_INFO.whatsappLink}>
                <Button
                  variant="default"
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto ring ring-green-500 hover:ring-2 hover:ring-yellow-400 transition-all duration-300s"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Consultar por WhatsApp
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard service={service} variant="full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
};

export default ServicesPage;
