"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Shield } from "lucide-react";
import { ContactForm } from "@/components/ui/contact-form";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/data";
import Link from "next/link";

const contactMethods = [
  {
    icon: Phone,
    title: "Teléfono",
    description: "Llámenos directamente",
    value: COMPANY_INFO.phone,
    href: `tel:${COMPANY_INFO.phone}`,
    color: "primary",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Respuesta inmediata",
    value: COMPANY_INFO.whatsapp,
    href: COMPANY_INFO.whatsappLink,
    color: "accent",
  },
  {
    icon: Mail,
    title: "Correo",
    description: "Escríbanos",
    value: COMPANY_INFO.email,
    href: `mailto:${COMPANY_INFO.email}`,
    color: "secondary",
  },
  {
    icon: Clock,
    title: "Horario",
    description: "Atención presencial",
    value: COMPANY_INFO.businessHours,
    color: "primary",
  },
];

const colorClasses = {
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent",
  secondary: "bg-secondary/10 text-secondary",
};

export const ContactPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-primary/5 dark:from-slate-900 dark:via-slate-900 dark:to-primary/10" />
        <div className="absolute top-20 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              Estamos para ayudarle
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              <span className="text-primary">Contáctenos</span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400">
              ¿Tiene un proyecto en mente? Estamos listos para ayudarle.
              Contáctenos y reciba una cotización personalizada sin compromiso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {method.href ? (
                  <a
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      method.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    aria-label={`${method.title}: ${method.value}`}
                  >
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colorClasses[method.color as keyof typeof colorClasses]
                        } mb-4`}
                    >
                      <method.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                      {method.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                      {method.description}
                    </p>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {method.value}
                    </p>
                  </a>
                ) : (
                  <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colorClasses[method.color as keyof typeof colorClasses]
                        } mb-4`}
                    >
                      <method.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                      {method.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                      {method.description}
                    </p>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {method.value}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-xl border border-slate-100 dark:border-slate-700">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Solicite su cotización
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    Complete el formulario y nos pondremos en contacto con usted
                    en menos de 24 horas.
                  </p>
                </div>

                <ContactForm />
              </div>
            </motion.div>

            {/* Map & Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Map */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-700">
                <div className="aspect-video w-full">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31802.89375!2d-75.74!3d4.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38870bb0d2e8a7%3A0x7bf7b9c3c3cf2cc8!2sPereira%2C%20Risaralda!5e0!3m2!1ses!2sco!4v1234567890`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de Tecnovoltac en Pereira"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <MapPin
                      className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">
                        {COMPANY_INFO.address}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {COMPANY_INFO.city}, {COMPANY_INFO.country}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 rounded-2xl p-6 text-white shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Shield className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">
                      ¿Prefiere atención inmediata?
                    </p>
                    <p className="text-white/80 text-sm">
                      Contáctenos por WhatsApp
                    </p>
                  </div>
                </div>

                <p className="text-white/90 text-sm mb-4">
                  Nuestro equipo está disponible para responder sus consultas
                  y agendar visitas técnicas. Respuesta garantizada en minutos.
                </p>
                <Link href={COMPANY_INFO.whatsappLink}>
                  <Button
                    size="lg"
                    className="w-full bg-white text-[#25D366] hover:bg-white/90"
                  >
                    Escribir por WhatsApp<MessageCircle className="w-5 h-5" aria-hidden="true" />
                  </Button>
                </Link>
              </div>

              {/* Service Area */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3">
                  Área de cobertura
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  Prestamos servicios en {COMPANY_INFO.serviceArea}. Si está
                  fuera de esta zona, contáctenos para evaluar su caso.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Pereira",
                    "Dosquebradas",
                    "Santa Rosa",
                    "La Virginia",
                    "Cerritos",
                  ].map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 rounded-full text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ or Final CTA */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Respuesta garantizada en 24 horas
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Una vez recibamos su solicitud, nuestro equipo la evaluará y le
              contactaremos para programar una visita técnica o enviarle una
              cotización detallada.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Cotización sin compromiso
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Visita técnica gratuita
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Asesoría personalizada
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
