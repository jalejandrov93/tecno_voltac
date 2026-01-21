"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ServiceCard } from "@/components/ui/service-card";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/data";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const BRANDS = [
  {
    name: "centelsa",
    image: "/img/brands/centelsa.png",
  },
  {
    name: "conte",
    image: "/img/brands/conte.png",
  },
  {
    name: "halux",
    image: "/img/brands/halux.png",
  },
  {
    name: "inter",
    image: "/img/brands/inter.png",
  },
  {
    name: "legrand",
    image: "/img/brands/legrand.png",
  },
  {
    name: "rawelt",
    image: "/img/brands/rawelt.png",
  },
  {
    name: "rohs",
    image: "/img/brands/rohs.png",
  },
];

export const ServicesPreview = () => {
  return (
    <section
      className="py-16 md:py-24 bg-white dark:bg-slate-900"
      aria-labelledby="services-heading"
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 dark:bg-yellow-400/10 text-primary dark:text-yellow-400 text-sm font-medium mb-4">
            Nuestros Servicios
          </span>
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Soluciones{" "}
            <span className="text-primary dark:text-yellow-400">
              Certificadas
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Ofrecemos servicios integrales de instalaciones eléctricas, gas y
            acabados, siempre cumpliendo con las normativas vigentes y
            priorizando su seguridad.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard service={service} variant="compact" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link href="/servicios">
            <Button className="w-48 group hover:w-52 h-10">
              Ver todos los servicios
              <ArrowRight
                className="w-5 h-5 group-hover:translate-x-2 transition-transform"
                aria-hidden="true"
              />
            </Button>
          </Link>
        </motion.div>
      </div>
      {/* Infinite Moving Cards */}
      <div className="w-full mb-4 mt-4">
        <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md antialiased bg-transparent dark:bg-grid-white/[0.05]">
          <InfiniteMovingCards items={BRANDS} direction="right" speed="slow" />
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
