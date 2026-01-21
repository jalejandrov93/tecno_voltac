"use client";

import { motion } from "framer-motion";
import { Shield, ArrowRight, Phone } from "lucide-react";
import { IconClockCheck, IconAward } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/data";
import Lightning from "@/components/Lightning";
import Link from "next/link";
import Image from "next/image";
import { NumberTicker } from "@/components/ui/number-ticker";
import { useTheme } from "next-themes";

const features = [
  {
    icon: Shield,
    text: "Certificación RETIE",
  },
  {
    icon: IconAward,
    text: "Personal certificado",
  },
  {
    icon: IconClockCheck,
    text: "+10 años experiencia",
  },
];

export const HeroSection = () => {
  const { resolvedTheme } = useTheme();


  return (
    <section
      className="relative min-h-screen flex items-center pt-0 sm:pt-16 md:pt-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
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
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(#1e3a5f 1px, transparent 1px), linear-gradient(to right, #1e3a5f 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 sm:py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 dark:bg-yellow-500/10 dark:border-yellow-500 text-accent dark:text-accent-foreground text-sm font-medium mb-6"
            >
              <Shield className="w-4 h-4" aria-hidden="true" />
              <span>Instalaciones Certificadas RETIE</span>
            </motion.div>

            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6"
            >
              Servicios técnicos{" "}
              <span className="text-yellow-400">profesionales</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-100 leading-relaxed mb-8 max-w-xl">
              Instalaciones eléctricas, gas y acabados con los más altos
              estándares de seguridad y calidad. Su tranquilidad es nuestra
              prioridad.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-slate-600 dark:text-yellow-400"
                >
                  <div className="flex items-center justify-center">
                    <feature.icon
                      className="w-8 h-8 text-primary dark:text-yellow-400"
                      aria-hidden="true"
                    />
                  </div>
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-row gap-4"
            >
              <Link href="/contacto">
                <Button
                  variant="default"
                  size="lg"
                  className="group ring ring-white hover:ring-2 w-40 hover:w-44 hover:ring-yellow-400 transition-all duration-300s"
                >
                  Solicitar Cotización
                  <ArrowRight
                    className="w-5 h-5 group-hover:translate-x-1 transition-all duration-300s"
                    aria-hidden="true"
                  />
                </Button>
              </Link>
              <Link href={COMPANY_INFO.whatsappLink}>
                <Button
                  variant="default"
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white w-32 ring ring-green-500 hover:ring-2 hover:ring-yellow-400  hover:w-40 transition-all duration-300s"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  WhatsApp
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="relative z-10 rounded-3xl p-8 shadow-2xl shadow-primary/30 overflow-hidden group">
                <div className="absolute inset-0">
                  <Image
                    src="/img/hero/tc-v.webp"
                    alt="Card background"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-primary/60 to-primary/20 dark:from-blue-900/20 dark:via-blue-900/40 dark:to-blue-900/20 mix-blend-multiply" />
                </div>

                <div className="relative text-white">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-64 h-64 flex items-center justify-center mx-auto mt-4">
                      {/* Logo Central */}
                      <div className="absolute inset-0 flex items-center justify-center z-0">
                        <div className="w-40 h-40 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center p-6 border border-white/10 shadow-inner shadow-white/5">
                          <Image
                            src="/img/tv_logo.svg"
                            alt="Tecnovoltac Logo"
                            width={200}
                            height={200}
                            className="w-full h-full object-contain opacity-90 drop-shadow-lg"
                          />
                        </div>
                      </div>

                      {/* Circles */}
                      {/* Eléctricas - Top */}
                      <motion.div
                        className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 hidden"
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <div className="w-24 h-24 bg-linear-to-br from-white/30 to-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center shadow-xl shadow-black/10 transition-transform hover:scale-105 p-2">
                          <span className="text-[10px] group-hover:text-yellow-400 font-bold text-white uppercase tracking-wider drop-shadow-md">
                            Instalaciones Eléctricas
                          </span>
                        </div>
                      </motion.div>

                      {/* Gas - Bottom Right */}
                      <motion.div
                        className="absolute bottom-6 -right-2 z-10 hidden"
                        animate={{ y: [0, 8, 0] }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1,
                        }}
                      >
                        <div className="w-24 h-24 bg-linear-to-br from-white/30 to-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center shadow-xl shadow-black/10 transition-transform hover:scale-105 p-2">
                          <span className="text-[10px] group-hover:text-yellow-400 font-bold text-white uppercase tracking-wider drop-shadow-md">
                            Instalaciones de Gas
                          </span>
                        </div>
                      </motion.div>

                      {/* Acabados - Bottom Left */}
                      <motion.div
                        className="absolute bottom-6 group -left-2 z-10 hidden"
                        animate={{ y: [0, 8, 0] }}
                        transition={{
                          duration: 4.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                      >
                        <div className="w-24 h-24  bg-linear-to-br from-white/20 to-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center shadow-xl shadow-black/10 transition-transform hover:scale-105 p-2">
                          <span className=" text-[10px] group-hover:text-yellow-400 transition-colors duration-300 font-bold text-white uppercase tracking-wider drop-shadow-md">
                            Acabados de obra de construcción
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/60 rounded-xl p-4">
                      <p className="text-3xl text-blue-500 dark:text-blue-900 font-bold">
                        <NumberTicker
                          value={500}
                          className="text-blue-500 dark:text-blue-900"
                        />
                        +
                      </p>
                      <p className="text-blue-500 dark:text-blue-900 font-semibold">
                        Proyectos exitosos
                      </p>
                    </div>
                    <div className="bg-white/60 rounded-xl p-4">
                      <p className="text-3xl text-blue-500 dark:text-blue-900 font-bold">
                        <NumberTicker
                          value={100}
                          className="text-blue-500 dark:text-blue-900"
                        />
                        %
                      </p>
                      <p className="text-blue-500 dark:text-blue-900 font-semibold">
                        Clientes satisfechos
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-5 -right-6 z-20 bg-white/80 dark:bg-[#006cb7] rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center">
                    <IconAward
                      className="w-10 h-10 text-blue-500 dark:text-yellow-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-200">
                      Garantía
                    </p>
                    <p className="font-bold text-slate-900 dark:text-white">
                      Asegurada
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -bottom-6 -left-6 z-20 bg-white/80 dark:bg-[#006cb7] rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center">
                    <IconClockCheck
                      className="w-10 h-10 text-blue-500 dark:text-yellow-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-200">
                      Respuesta
                    </p>
                    <p className="font-bold text-slate-900 dark:text-white">
                      24 horas
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
