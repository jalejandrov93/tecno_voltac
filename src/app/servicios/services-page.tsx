"use client";

import { motion } from "framer-motion";
import { Shield, Phone, ArrowRight } from "lucide-react";
import { ServiceCard } from "@/components/ui/service-card";
import { Button } from "@/components/ui/button";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

import { SERVICES, COMPANY_INFO } from "@/lib/data";
import Lightning from "@/components/Lightning";
import { CTASection } from "@/components/sections";
import Link from "next/link";
import { useTheme } from "next-themes";

// Gallery data for repair services
const galleryData = [
  {
    category: "Instalaciones Eléctricas",
    title: "Sistemas Eléctricos Profesionales",
    src: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-600 dark:text-neutral-400">
          Instalaciones eléctricas residenciales, comerciales e industriales con
          certificación RETIE. Garantizamos seguridad y eficiencia energética.
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400">
          <li>Diseño y cálculo de cargas eléctricas</li>
          <li>Instalación de tableros y acometidas</li>
          <li>Cableado estructurado</li>
          <li>Certificación RETIE</li>
        </ul>
      </div>
    ),
  },
  {
    category: "Reparaciones",
    title: "Mantenimiento y Reparaciones",
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-600 dark:text-neutral-400">
          Servicio técnico especializado para solucionar cualquier problema
          eléctrico en su hogar o negocio con respuesta rápida.
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400">
          <li>Diagnóstico de fallas eléctricas</li>
          <li>Reparación de cortocircuitos</li>
          <li>Cambio de breakers y tomas</li>
          <li>Atención 24/7</li>
        </ul>
      </div>
    ),
  },
  {
    category: "Instalaciones de Gas",
    title: "Gas Natural Certificado",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-600 dark:text-neutral-400">
          Instalación de redes de gas natural con todos los estándares de
          seguridad y normativas vigentes.
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400">
          <li>Instalación de tuberías de gas</li>
          <li>Conexión de estufas y calentadores</li>
          <li>Pruebas de hermeticidad</li>
          <li>Certificación de instalación</li>
        </ul>
      </div>
    ),
  },
  {
    category: "Acabados",
    title: "Acabados de Construcción",
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-600 dark:text-neutral-400">
          Trabajos de acabados finos para darle el toque final perfecto a su
          proyecto de construcción o remodelación.
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400">
          <li>Pintura interior y exterior</li>
          <li>Instalación de pisos y enchapes</li>
          <li>Drywall y cielo raso</li>
          <li>Carpintería y acabados finos</li>
        </ul>
      </div>
    ),
  },
  {
    category: "Iluminación",
    title: "Soluciones de Iluminación",
    src: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-600 dark:text-neutral-400">
          Diseño e instalación de sistemas de iluminación LED modernos y
          eficientes para todo tipo de espacios.
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400">
          <li>Iluminación LED residencial</li>
          <li>Iluminación comercial</li>
          <li>Sistemas de domótica</li>
          <li>Ahorro energético</li>
        </ul>
      </div>
    ),
  },
];

// Testimonials data
const testimonials = [
  {
    quote:
      "Excelente servicio de instalación eléctrica. El equipo de Tecnovoltac fue muy profesional, cumplieron con los tiempos acordados y dejaron todo impecable. Totalmente recomendados.",
    name: "Carlos Rodríguez",
    designation: "Propietario de Vivienda",
    src: "https://ui-avatars.com/api/?name=Carlos+Rodriguez&background=006cb7&color=fff&size=500",
  },
  {
    quote:
      "Contraté sus servicios para la instalación de gas natural en mi apartamento. Todo el proceso fue transparente, con certificación incluida. Muy satisfecho con el resultado.",
    name: "María González",
    designation: "Cliente Residencial",
    src: "https://ui-avatars.com/api/?name=Maria+Gonzalez&background=f59e0b&color=fff&size=500",
  },
  {
    quote:
      "Como empresa necesitábamos una solución rápida para un problema eléctrico. Tecnovoltac respondió de inmediato y solucionó todo de manera eficiente. Excelente atención al cliente.",
    name: "Jorge Martínez",
    designation: "Gerente de Operaciones",
    src: "https://ui-avatars.com/api/?name=Jorge+Martinez&background=006cb7&color=fff&size=500",
  },
  {
    quote:
      "Los acabados que hicieron en mi casa quedaron perfectos. Muy atentos a los detalles y con materiales de primera calidad. Sin duda volveré a trabajar con ellos.",
    name: "Andrea López",
    designation: "Propietaria",
    src: "https://ui-avatars.com/api/?name=Andrea+Lopez&background=f59e0b&color=fff&size=500",
  },
  {
    quote:
      "Personal altamente capacitado y certificado. La instalación eléctrica de mi negocio quedó perfecta y con todas las normas de seguridad. Muy profesionales.",
    name: "Luis Hernández",
    designation: "Dueño de Negocio",
    src: "https://ui-avatars.com/api/?name=Luis+Hernandez&background=006cb7&color=fff&size=500",
  },
];

export const ServicesPage = () => {
  const { resolvedTheme } = useTheme();

  const cards = galleryData.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-primary/5 dark:from-slate-900 dark:via-slate-900 dark:to-primary/10" />

        {/* Lightning Effect Background */}
        <div className="absolute inset-0 opacity-30 dark:mix-blend-screen pointer-events-none">
          <Lightning
            hue={resolvedTheme === "dark" ? 210 : 40}
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

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Galería de <span className="text-primary dark:text-yellow-400">Servicios</span>
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              Conoce más sobre nuestros servicios y proyectos realizados con los
              más altos estándares de calidad.
            </p>
          </motion.div>

          <Carousel items={cards} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Lo Que Dicen Nuestros <span className="text-primary dark:text-yellow-400">Clientes</span>
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mejor carta de
              presentación.
            </p>
          </motion.div>

          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
};

export default ServicesPage;
